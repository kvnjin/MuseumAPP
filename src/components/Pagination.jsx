import React, { useState } from "react";    
import styles from '../css/Pagination.module.css';


function Pagination({ currentPage, totalPages, setCurrentPage }) {

    const goToNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const goToFirstPage = () => {
        if (currentPage > 1) {
        setCurrentPage(1);
        }
    };

    const goToLastPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(totalPages);
        }
    }

    return (
        <div className={styles.pagination}>
        <button onClick={goToFirstPage} disabled={currentPage === 1}>
          First
        </button>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        &#8592;
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        &#8594;
        </button>
        <button onClick={goToLastPage} disabled={currentPage === totalPages}>
          Last
        </button>
      </div>
    );

}

export default Pagination;