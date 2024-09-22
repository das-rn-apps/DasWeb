import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState(null);
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/contact/all`);
            if (!response.ok) {
                throw new Error('Failed to fetch feedback');
            }
            const data = await response.json();
            setFeedbackList(data);
        } catch (error) {
            console.error('Error fetching feedback:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('submitting');
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.json();
            console.log('Server response:', data);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            fetchFeedback(); // Refresh the feedback list after successful submission
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        }
    };

    return (
        <div className="contact">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                <div className="form-group submit-button">
                    <button type="submit" className="btn btn-primary" disabled={submitStatus === 'submitting'}>
                        {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
            {submitStatus === 'success' && <p className="success-message">Message sent successfully!</p>}
            {submitStatus === 'error' && <p className="error-message">Failed to send message. Please try again.</p>}

            <div className="feedback-list">
                <h3>Recent Feedback</h3>
                {feedbackList.length > 0 ? (
                    <ul>
                        {feedbackList.map((feedback, index) => (
                            <li key={index}>
                                <strong>{feedback.name}:</strong> {feedback.message}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No feedback available yet.</p>
                )}
            </div>
        </div>
    );
}

export default Contact;