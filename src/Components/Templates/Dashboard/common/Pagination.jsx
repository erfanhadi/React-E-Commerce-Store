import React, { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = ({ items = [], onPageChange, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    onPageChange(items.slice(start, end));
  }, [currentPage, items, itemsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    } else if (totalPages === 0) {
      setCurrentPage(1);
    }
  }, [items, totalPages, currentPage]);

  const hasItems = items.length > 0;

  return (
    <div className="flex items-center select-none justify-center">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1 || !hasItems}
      >
        <BiChevronRight />
      </button>

      <span className="font-medium text-zinc-700 mx-4 text-xs">
        نمایش {currentPage} رکورد از {totalPages || 1}
      </span>

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages || !hasItems}
      >
        <BiChevronLeft />
      </button>
    </div>
  );
};

export default Pagination;
