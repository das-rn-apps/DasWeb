import React from 'react';
import './Projects.css';

function Projects() {
    const projects = [
        {
            id: 1,
            name: 'E-commerce Mobile App',
            description: 'A full-stack mobile app built with React Native and Node.js, featuring user authentication, product browsing, and secure checkout.',
            technologies: ['React Native', 'Node.js', 'MongoDB', 'Express.js']
        },
        {
            id: 2,
            name: 'Task Management Web App',
            description: 'A responsive web application using React.js and Express.js, allowing users to create, assign, and track tasks in real-time.',
            technologies: ['React.js', 'Express.js', 'MongoDB', 'Socket.io']
        },
        {
            id: 3,
            name: 'Weather Forecast App',
            description: 'A mobile app developed with React Native that provides accurate weather forecasts using geolocation and a third-party weather API.',
            technologies: ['React Native', 'Redux', 'OpenWeatherMap API']
        },
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;