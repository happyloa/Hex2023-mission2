// 匯入 next/link 模組，這是 Next.js 中用來處理頁面間導航的組件
import Link from "next/link";

// 匯入樣式表，使用 CSS Modules 來確保樣式的本地作用域
import styles from "./StartUsingBtn.module.css";

// 定義 StartUsingBtn 元件，接收一個名為 withIcon 的可選 prop，默認值為 false
export default function StartUsingBtn({ withIcon = false }) {
  return (
    // 使用 Link 組件來實現頁面間導航，點擊按鈕時將導航到 "/pricing" 頁面
    // 同時應用了 styles.button 樣式類別來控制按鈕的外觀
    <Link href="/pricing" className={styles.button}>
      {/* 顯示按鈕文本 "開始使用" */}
      開始使用
      {/* 如果 withIcon prop 為 true，則渲染一個圖標 */}
      {withIcon && (
        <img
          // 圖標的路徑指向表示行動呼籲的圖示
          src="/image/icons/call made.webp"
          // 設定圖標的替代文字，當圖像無法顯示時，這段文字將被呈現
          alt="行動呼籲"
          // 應用 styles.icon 樣式類別來控制圖標的外觀和位置
          className={styles.icon}
        />
      )}
    </Link>
  );
}
