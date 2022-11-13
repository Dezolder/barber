import React from "react";
import { PropTypes } from "prop-types";
import Pagination from "./pagination";

const MasterHead = ({ isSort, mastersCount, iconf, handleSort, sortClass, ...rest }) => {
    return (
        <div className="container text-center border border-2 border-primary rounded-pill m-5">
            <div className="row align-items-center">
                <div className="col ms-5 text-start">
                    {
                        isSort.map((i) => (
                            <div
                                key={i.id}
                                onClick={() => handleSort(i.name)}
                            >
                                Sort by {i.name}
                                <i className={sortClass(i.name, i.sort, i.hide)}></i>
                            </div>
                        )
                        )
                    }
                </div>
                <div className="col">
                    <header>Masters</header>
                    <h3>{mastersCount}</h3>
                    <Pagination {...rest} />
                </div>
                <div className="col text-end" onClick={iconf}>
                    <h1><i className="bi bi-person-plus-fill"></i></h1>
                </div>
            </div>
        </div>
    );
};

MasterHead.propTypes = {
    isSort: PropTypes.array,
    mastersCount: PropTypes.number,
    iconf: PropTypes.func,
    handleSort: PropTypes.func,
    sortClass: PropTypes.func
};

export default MasterHead;
