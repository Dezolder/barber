import React from "react";
import { PropTypes } from "prop-types";
import Pagination from "./pagination";
import GroupList from "./listGroup";

const MasterHead = ({
    isSort,
    mastersCount,
    iconf,
    handleSort,
    sortClass,
    ...rest
}) => {
    return (
        <div className="d-flex flex-row justify-content-evenly align-items-center border border-2 border-primary rounded-pill m-5">
            <div className="m-4">Back</div>
            <div className="ms-5 text-start">
                {isSort.map((i) => (
                    <div key={i.id} onClick={() => handleSort(i.name)}>
                        Sort by {i.name}
                        <i
                            className={sortClass(i.name, i.sort, i.hide)}
                        ></i>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <header>Masters</header>
                <h3>{mastersCount}</h3>
                {mastersCount !== 0
                    ? <Pagination {...rest} />
                    : <div>Loading...</div>}
            </div>
            <GroupList />
            {/* <div className="list-group">List</div> */}
            <div></div>
            <div className="text-end" onClick={iconf}>
                <h1>
                    <i className="bi bi-person-plus-fill"></i>
                </h1>
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
