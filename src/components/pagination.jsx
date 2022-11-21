import _ from "lodash";
import React from "react";
import { PropTypes } from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    // console.log("itemsCount:", itemsCount);
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav aria-label="Navigation" className="align-items-center">
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item " +
                            (currentPage === page ? "active" : "")
                        }
                        key={page}
                    >
                        <button
                            className={"page-link"}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func
};

export default Pagination;
