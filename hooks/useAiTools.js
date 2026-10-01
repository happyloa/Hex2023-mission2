import { useMemo, useState } from "react";

export function useAiTools(initialTools) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("全部");
  const [sortBy, setSortBy] = useState("由新到舊");
  const [page, setPage] = useState(1);

  const filteredTools = useMemo(() => {
    let result = [...initialTools];

    // 1. 依關鍵字篩選
    const normalizedKeyword = searchTerm.trim().toLowerCase();
    if (normalizedKeyword) {
      result = result.filter((tool) => tool.title.toLowerCase().includes(normalizedKeyword));
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

  const pageCount = Math.max(1, Math.ceil(filteredTools.length / 6));
  const currentPage = Math.min(page, pageCount);
  const visibleTools = filteredTools.slice((currentPage - 1) * 6, currentPage * 6);

  return {
    filteredTools,
    activeTag,
    searchTerm,
    sortBy,
    currentPage,
    pageCount,
    visibleTools,
    handleSearch: (value) => {
      setSearchTerm(value);
      setPage(1);
    },
    handleFilter: (value) => {
      setActiveTag(value);
      setPage(1);
    },
    handleSort: (value) => {
      setSortBy(value);
      setPage(1);
    },
    handlePageChange: (value) => setPage(Math.max(1, Math.min(value, pageCount))),
  };
}
