import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

console.log(currentPage, pagesCount);
  return (
    <nav>
      <ul className="pagination pagination-sm">
      <li><button disabled={currentPage === 1} className="mr-2 btn btn-primary" onClick={() => onPageChange(-1)}>Prev</button></li>
      <li><button disabled={currentPage === pagesCount} className="btn btn-primary" onClick={() => onPageChange(1)}>Next</button></li>
       
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
