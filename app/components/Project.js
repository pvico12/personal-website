import React from 'react'

function project(props) {
  let link = "https://www." + props.link;
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

          {props.link && 
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex">
              See more at 
              <div className="text-underline text-blue-600 hover:text-blue-800 visited:text-purple-600 pl-1">
              {props.link}
              </div>
            </a>
          }

          <div id="project-skills" className="flex flex-wrap gap-2">
            {skillsDivList}
          </div>
        </div>
      </div>
    </div>

  )
}

export default project