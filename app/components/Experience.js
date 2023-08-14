import React from 'react'
import PropTypes from 'prop-types'

function experience(props) {
  return (
    <div id="experience-entry" className="flex pb-4 gap-4">
      <div id="experience-date" className="text-xs">
        {props.date}
      </div>
      <div id="experience-info">
        <h2>{props.position} - {props.company}</h2>
        <ul>
          <li>{props.description}</li>
          <li>{props.skills}</li>
        </ul>
      </div>
    </div>
  )
}

experience.propTypes = {
  
}

export default experience



