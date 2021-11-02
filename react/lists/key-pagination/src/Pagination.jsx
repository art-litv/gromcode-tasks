import React from 'react';

export function getPagesCount(totalItems, itemsPerPage) {
  Math.floor(totalItems / itemsPerPage);
}

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isLastPage = getPagesCount(totalItems, itemsPerPage) === currentPage;
  const isFirstPage = currentPage === 1;

  return (
    <div class="pagination">
      <button class="btn" disabled={isFirstPage} onClick={goPrev}>
        {!isFirstPage && '←'}
      </button>
      <span class="pagination__page">{currentPage}</span>
      <button class="btn" disabled={isLastPage} onClick={goNext}>
        {!isLastPage && '→'}
      </button>
    </div>
  );
};

export default Pagination;
