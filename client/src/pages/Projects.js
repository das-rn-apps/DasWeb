import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';
import { fetchProjects } from '../api/project';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(setProjects);
    }, []);
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project._id} className="project-card">
                        <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                        <div className="project-content">
                            <h3>{project.name}</h3>
                            <p>{project.description.substring(0, 100)}...</p>
                            <div className="technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <Link to={`/project/${project._id}`} className="project-link">View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;