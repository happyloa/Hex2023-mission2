import { expect, test } from "@playwright/test";

for (const route of ["/", "/pricing"]) {
  test(`${route} renders without broken assets or runtime errors`, async ({ page }, testInfo) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(route);
    expect(response.status()).toBe(200);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "https://hex2023.worksbyaaron.com/image/og-image.webp",
    );
    await expect(page.locator("#ai-tools h3")).toHaveCount(6);
    await expect(page.getByRole("navigation", { name: "AI 工具分頁" })).toHaveCount(0);
    // Decode every image, including lazy images clipped by the animated marquee.
    for (const image of await page.locator("img").all()) {
      if (!(await image.isVisible())) continue;
      await image.evaluate((element) => {
        element.loading = "eager";
      });
      await expect
        .poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0))
        .toBe(true);
    }
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
    expect(errors).toEqual([]);
    await page.screenshot({ path: testInfo.outputPath("page.png"), fullPage: true });
  });

  test(`${route} supports search, category filtering and sorting`, async ({ page }) => {
    await page.goto(route);
    const titles = page.locator("#ai-tools h3");
    const search = page.getByRole("searchbox", { name: "搜尋 AI 工具" });
    await search.fill("  chatbot  ");
    await expect(titles).toHaveText(["Chatbot Builder"]);
    await page.getByRole("button", { name: "翻譯", exact: true }).click();
    await expect(titles).toHaveCount(0);
    await expect(page.getByText("我們目前沒有這個 AI 工具😢")).toBeVisible();
    await search.fill("");
    await expect(titles).toHaveText(["Language Translation API"]);
    await page.getByRole("button", { name: "全部", exact: true }).click();
    await expect(titles).toHaveCount(6);
    await page.getByLabel("AI 工具排序").selectOption("由舊到新");
    await expect(titles.first()).toHaveText("Voice Assistant SDK");
    await page.getByLabel("AI 工具排序").selectOption("由新到舊");
    await expect(titles.first()).toHaveText("Chatbot Builder");
  });
}

test("pricing FAQ can expand and collapse", async ({ page }) => {
  await page.goto("/pricing");
  const question = page.getByRole("button", { name: "如何選擇適合的 AI 模型？" });
  await expect(question).toHaveAttribute("aria-expanded", "false");
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText(/選擇適合的 AI 模型需要考慮您的應用場景/)).toBeVisible();
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "false");
});

test("mobile navigation supports close, Escape, navigation and desktop resize", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "mobile",
    "Mobile navigation is only shown on small screens.",
  );
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "開啟選單" });
  const dialog = page.getByRole("dialog", { name: "行動導覽" });
  await trigger.click();
  await expect(dialog).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath("menu.png") });
  await expect(dialog.getByRole("button", { name: "關閉選單" })).toBeFocused();
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  await trigger.click();
  await dialog.getByRole("button", { name: "關閉選單" }).click();
  await expect(dialog).not.toBeVisible();
  await trigger.click();
  await dialog.getByRole("link", { name: "定價", exact: true }).click();
  await expect(page).toHaveURL(/\/pricing$/);
  await expect(dialog).not.toBeVisible();
  await trigger.click();
  await page.setViewportSize({ width: 1280, height: 720 });
  await expect(dialog).not.toBeVisible();
  await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
});
