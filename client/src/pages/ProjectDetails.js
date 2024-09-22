import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchFeedback, submitFeedback } from '../api/feedback';
import { fetchProjectDetails } from '../api/project';
import Feedback from '../components/Feedback';
import FeedbackForm from '../components/FeedbackForm';
import '../styles/ProjectDetails.css';

function ProjectDetails() {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    console.log("id", id);
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projectData, feedbackData] = await Promise.all([
                    fetchProjectDetails(id),
                    fetchFeedback(id)
                ]);
                setProject(projectData);
                setFeedbackList(feedbackData);
            } catch (error) {
                setError('Failed to load project details. Please try again later.');
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
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

    const handleFeedbackSubmit = async (formData) => {
        try {
            await submitFeedback(formData);
            const updatedFeedback = await fetchFeedback();
            setFeedbackList(updatedFeedback);
        } catch (error) {
            console.error('Error submitting feedback:', error);
            throw error;
        }
    };

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
            <Link to="/projects" className="back-link">Back to Projects</Link>
            <FeedbackForm onSubmit={handleFeedbackSubmit} />
            {project.userFeedback && project.userFeedback.length > 0 && (
                <Feedback feedbackList={feedbackList} />
            )}

        </div>
    );
}

export default ProjectDetails;