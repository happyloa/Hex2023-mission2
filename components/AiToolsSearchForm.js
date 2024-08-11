// 匯入 useState Hook，用於在元件中管理狀態
import { useState } from "react";

// 匯入樣式表，使用 CSS Modules 來確保樣式具有本地範圍作用
import styles from "./AiToolsSearchForm.module.css";

// 定義 AiToolsSearchForm 元件，接收 onSearch prop，用於處理搜尋操作
export default function AiToolsSearchForm({ onSearch }) {
  // 使用 useState Hook 來管理 searchTerm 狀態，初始值為空字串
  const [searchTerm, setSearchTerm] = useState("");

  // 定義 handleInputChange 函數，處理輸入框值的變更
  const handleInputChange = (event) => {
    const value = event.target.value; // 取得輸入框的值
    setSearchTerm(value); // 更新 searchTerm 狀態
    onSearch(value); // 將輸入的值傳遞給父元件，用於觸發搜尋操作
  };

  return (
    // 定義一個表單，用於包裹搜尋輸入框
    <form>
      {/* 輸入框，用於接收用戶輸入的搜尋關鍵字 */}
      <input
        type="text" // 輸入框類型為文字
        className={styles["search-input"]} // 應用 search-input 樣式類別來控制輸入框的外觀
        placeholder="輸入關鍵字搜尋" // 在輸入框中顯示提示文字
        value={searchTerm} // 將輸入框的值綁定到 searchTerm 狀態
        onChange={handleInputChange} // 當輸入框的值發生變化時觸發 handleInputChange 函數
      />
    </form>
  );
}
