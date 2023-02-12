import React from 'react'
import { PropTypes } from 'prop-types'
import _ from 'lodash'
const GroupList = ({
  classes,
  onClassSelect,
  selectedClass,
  handleResetFilter
}) => {
  return (
    <ul className="list-group">
      {_.orderBy([...new Set(classes)], [], ['asc']).map((classe) => (
        <li
          key={classe}
          className={
            'list-group-item list-group-item-action d-flex justify-content-between align-items-start' +
            (selectedClass === classe ? ' active' : '')
          }
          onClick={() => onClassSelect(classe)}
          role="button"
        >
          <div className="ms-2 me-auto">{'Class: ' + classe}</div>
          <span className="badge bg-primary rounded-pill">
            {classes.filter((item) => item === classe).length}
          </span>
        </li>
      ))}
      <li
        className="list-group-item list-group-item-action bg-light"
        onClick={handleResetFilter}
        role="button"
      >
        Reset Filter
      </li>
    </ul>
  )
}

GroupList.propTypes = {
  classes: PropTypes.array.isRequired,
  onClassSelect: PropTypes.func.isRequired,
  selectedClass: PropTypes.string,
  handleResetFilter: PropTypes.func
}

export default GroupList
