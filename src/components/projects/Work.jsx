import React from 'react'
import { projectsData } from './Data'
import ProjectsItems from './ProjectsItems'

const Work = () => {
  return (
    <div className="project__container container grid">
        {
            projectsData.map((item) => {
                return <ProjectsItems item={item} key={item.id}/>
            })
        }
    </div>
  )
}

export default Work
