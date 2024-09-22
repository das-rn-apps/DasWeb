import React, { useState, useEffect } from 'react';
import Feedback from '../components/Feedback';
import FeedbackForm from '../components/FeedbackForm';
import { fetchFeedback, submitFeedback } from '../api/feedback';
import '../styles/Contact.css';

function Contact() {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        const getFeedback = async () => {
            try {
                const data = await fetchFeedback();
                setFeedbackList(data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };
        getFeedback();
    }, []);

    const handleSubmitFeedback = async (formData) => {
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
        <div>
            <div className="contact-container">
                <h3>Get in Touch</h3>
                <FeedbackForm onSubmit={handleSubmitFeedback} />
            </div>
            <div>
                <Feedback feedbackList={feedbackList} />
            </div>
        </div>
    );
}

export default Contact;