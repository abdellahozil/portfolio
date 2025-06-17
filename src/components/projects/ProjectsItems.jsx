import React from 'react'

const ProjectsItems = ({item}) => {
  return (
    <div className="project__card" key={item.id}>
        <img src={item.image} alt="" className='project__img'/>
        <h3 className="project__title">{item.title}</h3>
        <a href="https://abdellahozil.github.io/Beema/" target='_blank' rel='noopener noreferrer' className='project__btn'>
            Demo <i className='bx bx-right-arrow-alt project__btn__icon'></i>
        </a>
    </div>
  )
}

export default ProjectsItems
