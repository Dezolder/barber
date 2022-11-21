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
    classes,
    onClassSelect,
    selectedClass,
    handleResetFilter,
    ...rest
}) => {
    return (
        <div className="d-flex flex-row justify-content-evenly align-items-center border border-2 border-primary rounded-pill m-5">
            <div className="ms-5 flex-fill">Back</div>
            <div className="ms-5 text-start flex-fill">
                {isSort.map((i) => (
                    <div
                        key={i.id}
                        onClick={() => handleSort(i.name)}
                        role="button"
                    >
                        Sort by {i.name}
                        <i className={sortClass(i.name, i.sort, i.hide)}></i>
                    </div>
                ))}
            </div>
            <div className="text-start flex-fill">
                <header>Masters</header>
                <h3>{mastersCount}</h3>
                {mastersCount !== 0 ? (
                    <Pagination {...rest} />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <div className="text-start flex-fill">
                {classes.lenth !== 0 ? (
                    <GroupList
                        classes={classes}
                        onClassSelect={onClassSelect}
                        selectedClass={selectedClass}
                        handleResetFilter={handleResetFilter}
                    />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <div></div>
            <div className="text-end flex-fill me-5" onClick={iconf}>
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
    sortClass: PropTypes.func,
    classes: PropTypes.array,
    onClassSelect: PropTypes.func.isRequired,
    selectedClass: PropTypes.string,
    handleResetFilter: PropTypes.func
};

export default MasterHead;
