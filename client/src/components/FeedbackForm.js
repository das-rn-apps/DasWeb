import React, { useState } from 'react';
import '../styles/FeedbackForm.css';

function FeedbackForm({ onSubmit }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('submitting');
        try {
            await onSubmit(formData);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        }
    };

    return (
        <div className="feedback-form-container">
            <form onSubmit={handleSubmit} className="feedback-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email (optional)</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={submitStatus === 'submitting'}>
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Feedback'}
                </button>
            </form>
            {submitStatus === 'success' && <p className="success-message">Feedback sent successfully!</p>}
            {submitStatus === 'error' && <p className="error-message">Failed to send feedback. Please try again.</p>}
        </div>
    );
}

export default FeedbackForm;