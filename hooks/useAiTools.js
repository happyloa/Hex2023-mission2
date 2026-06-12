import { useMemo, useState } from "react";

export function useAiTools(initialTools) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("全部");
  const [sortBy, setSortBy] = useState("由新到舊");

  const filteredTools = useMemo(() => {
    let result = [...initialTools];

    // 1. 依關鍵字篩選
    if (searchTerm) {
      const normalizedKeyword = searchTerm.toLowerCase();
      result = result.filter((tool) =>
        tool.title.toLowerCase().includes(normalizedKeyword)
      );
    }

    // 2. 依標籤篩選
    if (activeTag !== "全部") {
      result = result.filter((tool) => tool.tag === activeTag);
    }

    // 3. 排序 (預設陣列順序為「由新到舊」，反轉為「由舊到新」)
    if (sortBy === "由舊到新") {
      result.reverse();
    }

    return result;
  }, [initialTools, searchTerm, activeTag, sortBy]);

  return {
    filteredTools,
    searchTerm,
    activeTag,
    sortBy,
    handleSearch: setSearchTerm,
    handleFilter: setActiveTag,
    handleSort: setSortBy,
  };
}

