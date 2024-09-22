import React from 'react';
import '../styles/Feedback.css';

function Feedback({ feedbackList }) {
    if (!feedbackList || feedbackList.length === 0) {
        return null;
    }

    return (
        <section className="feedback-section">
            <h3>User Feedback</h3>
            <div className="user-feedback">
                {feedbackList.map((feedback, index) => (
                    <div key={index} className="feedback-item">
                        <p className="feedback-text">"{feedback.text || feedback.message}"</p>
                        <p className="feedback-author">- {feedback.author || feedback.name}</p>
                        <p className="feedback-timestamp">{new Date(feedback.createdAt).toLocaleString('en-US', { day: '2-digit', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Feedback;