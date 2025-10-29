// 共用的邏輯抽象：處理 AI 工具清單的搜尋與篩選
// 將狀態管理與過濾函式抽離成 hook，可在不同頁面或元件中重複使用
import { useEffect, useMemo, useState } from "react";

export function useAiTools(initialTools) {
  // 透過 useMemo 確保初始資料在相依項目不變時不會被重新建立
  // 之後若要改為從 API 取得資料，只需要改動外部呼叫端傳入的陣列
  const tools = useMemo(() => initialTools, [initialTools]);

  // 保存目前顯示在畫面上的工具清單
  const [filteredTools, setFilteredTools] = useState(tools);

  // 當傳入的資料變動時，自動同步目前的顯示內容
  useEffect(() => {
    setFilteredTools(tools);
  }, [tools]);

  // 依關鍵字篩選工具，未輸入文字時回復完整清單
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredTools(tools);
      return;
    }

    const normalizedKeyword = searchTerm.toLowerCase();
    setFilteredTools(
      tools.filter((tool) => tool.title.toLowerCase().includes(normalizedKeyword))
    );
  };

  // 依標籤篩選工具，選擇「全部」則回復完整清單
  const handleFilter = (tag) => {
    if (tag === "全部") {
      setFilteredTools(tools);
      return;
    }

    setFilteredTools(tools.filter((tool) => tool.tag === tag));
  };

  return {
    filteredTools,
    handleSearch,
    handleFilter,
    resetTools: () => setFilteredTools(tools), // 提供外部在必要時重置清單
  };
}
