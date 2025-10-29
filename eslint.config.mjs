import nextConfig from "eslint-config-next";

// 採用 Next.js 官方提供的預設 ESLint 設定（Flat Config）
const config = [...nextConfig];

// 專案採用靜態資產搭配 <img>，關閉強制使用 next/image 的規則
if (config[0]?.rules) {
  config[0].rules["@next/next/no-img-element"] = "off";
}

export default config;
