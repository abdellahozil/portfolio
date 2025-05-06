import React from 'react'
import "./project.css"
import Work from './Work'

const Project = () => {
  return (
    <section className="project section" id="project">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">Most recent works</span>
        <Work/>
    </section>
  )
}

export default Project
