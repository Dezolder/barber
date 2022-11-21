import React from "react";
import { PropTypes } from "prop-types";

const GroupList = ({ classes, onClassSelect, selectedClass, handleResetFilter }) => {
    return (
        <ul className="list-group">
            {[...new Set(classes)].map((classe) => (
                <li
                    key={classe}
                    className={"list-group-item list-group-item-action d-flex justify-content-between align-items-start" +
                        (selectedClass === classe ? " active" : "")
                    }
                    onClick={() => onClassSelect(classe)}
                    role="button"
                >
                    <div className="ms-2 me-auto">
                        {"Class: " + classe}
                    </div>
                    <span className="badge bg-primary rounded-pill">
                        {classes.filter(item => item === classe).length}
                    </span>
                </li>
            ))}
            <li
                className="list-group-item list-group-item-action"
                onClick={handleResetFilter}
                role="button"
            >
                Reset Filter
            </li>
        </ul>
    );
};

GroupList.propTypes = {
    classes: PropTypes.array.isRequired,
    onClassSelect: PropTypes.func.isRequired,
    selectedClass: PropTypes.string,
    handleResetFilter: PropTypes.func
};

export default GroupList;
