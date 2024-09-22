import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProjectDetails } from '../mockApi';
import './ProjectDetails.css';

function ProjectDetails() {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getProjectDetails = async () => {
            try {
                const data = await fetchProjectDetails(id);
                setProject(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching project details:', error);
                setError('Failed to load project details. Please try again later.');
                setLoading(false);
            }
        };

        getProjectDetails();
    }, [id]);

    if (loading) {
        return <div>Loading project details...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-details">
            <h2>{project.name}</h2>
            <div className="project-overview">
                <div className="project-main-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="project-info">
                    <p className="project-description">{project.description}</p>
                    {project.category && project.rating && (
                        <div className="project-meta">
                            <div className="project-category">{project.category}</div>
                            <div className="project-rating">Rating: {project.rating}/5</div>
                        </div>
                    )}
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>

            {project.features && project.features.length > 0 && (
                <section className="project-section">
                    <h3>Purpose and Features</h3>
                    <ul>
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
                <section className="project-section">
                    <h3>Screenshots</h3>
                    <div className="screenshot-gallery">
                        {project.screenshots.map((screenshot, index) => (
                            <img key={index} src={screenshot} alt={`${project.name} screenshot ${index + 1}`} />
                        ))}
                    </div>
                </section>
            )}

            {project.technologies && project.technologies.length > 0 && (
                <section className="project-section">
                    <h3>Technologies Used</h3>
                    <div className="technologies">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </section>
            )}

            {project.userFeedback && project.userFeedback.length > 0 && (
                <section className="project-section">
                    <h3>User Feedback</h3>
                    <div className="user-feedback">
                        {project.userFeedback.map((feedback, index) => (
                            <div key={index} className="feedback-item">
                                <p className="feedback-text">"{feedback.text}"</p>
                                <p className="feedback-author">- {feedback.author}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <Link to="/projects" className="back-link">Back to Projects</Link>
        </div>
    );
}

export default ProjectDetails;