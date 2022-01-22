import React from "react";

function Pagination({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === Math.floor(totalItems / itemsPerPage) - 1;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isFirstPage}>
        {!isFirstPage && "←"}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isLastPage}>
        {!isLastPage && "→"}
      </button>
    </div>
  );
}

export default Pagination;
