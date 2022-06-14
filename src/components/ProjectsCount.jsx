import React from 'react'

function ProjectsCount() {
  return (
    <div className="projectsCount">
        <h1>Personnals projects</h1>
        <p>It is a long established fact that a reader will </p>

        <div className="projectsCount__one">
            <p>1765</p>
            <div className="projectsCount__one--title">
                <h2>Idées de projets personnel</h2>
            </div>
        </div>

        <div className="projectsCount__two">
            <p>18</p>
            <div className="projectsCount__two--title">
                <h2>Projets en cours</h2>
            </div>
        </div>

        <div className="projectsCount__three">
        <p>35</p>
            <div className="projectsCount__three--title">
                <h2>Projets terminés</h2>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCount