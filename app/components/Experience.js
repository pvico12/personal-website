import React from 'react'

function experience(props) {
  return (
    <div className="flex pb-4 gap-4">
      <div className="w-1/5 text-xs">
        {props.date}
      </div>
      <div className="w-4/5">
        <h2>{props.position} - {props.company}</h2>
        <ul>
          <li>{props.description}</li>
          <li>{props.skills}</li>
        </ul>
      </div>
    </div>
  )
}

export default experience

