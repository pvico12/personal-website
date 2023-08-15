import React from 'react'

function project(props) {
  let skillsDivList = [];

  for (let i = 0; i < props.skills.length; i++) {
    skillsDivList.push(<div key={i} className="bg-fuchsia-400 rounded-full px-3 py-1">{props.skills[i]}</div>)
  }
  return (
    <div id="project-entry" className="flex pb-4 gap-4">
      <div id="project-info" className="">
        <div id="project-title" className="text-lg pb-2">
          {props.title}
        </div>

        <div id="project-desc-skills" className="text-sm">
          <div id="project-description" className="pb-3">
            {props.description}
          </div>

          <div id="project-skills" className="flex flex-wrap gap-2">
            {skillsDivList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default project