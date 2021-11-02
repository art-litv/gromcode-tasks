import React from 'react';

export function getPagesCount(totalItems, itemsPerPage) {
  return Math.ceil(totalItems / itemsPerPage);
}

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isLastPage = getPagesCount(totalItems, itemsPerPage) === currentPage;
  const isFirstPage = currentPage === 1;

  return (
    <div className="pagination">
      <button className="btn" disabled={isFirstPage} onClick={goPrev}>
        {!isFirstPage && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" disabled={isLastPage} onClick={goNext}>
        {!isLastPage && '→'}
      </button>
    </div>
  );
};

export default Pagination;
