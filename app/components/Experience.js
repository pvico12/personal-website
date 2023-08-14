import React from 'react'

function experience(props) {
  let skillsDivList = [];

  for (let i = 0; i < props.skills.length; i++) {
    skillsDivList.push(<div key={i} className="bg-fuchsia-400 rounded-full px-3 py-1">{props.skills[i]}</div>)
  }
  return (
    <div id="experience-entry" className="flex pb-4 gap-4">
      <div id="experience-date" className="text-xs w-24">
        {props.date}
      </div>
      <div id="experience-info" className="w-4/5">
        <div id="experience-position-company" className="text-lg pb-2">
          {props.position} - {props.company}
        </div>

        <div id="experience-desc-skills" className="text-sm">
          <div id="experience-description" className="pb-3">
            {props.description}
          </div>

          <div id="experience-skills" className="flex flex-wrap gap-2">
            {skillsDivList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default experience