import React, { useState, useEffect } from 'react';
import Feedback from '../components/Feedback';
import FeedbackForm from '../components/FeedbackForm';
import SocialMedia from '../components/SocialMedia';
import { fetchFeedback, submitFeedback } from '../api/feedback';
import '../styles/Contact.css';

function Contact() {
    const [feedbackList, setFeedbackList] = useState([]);
    const socialMediaLinks = [
        { url: 'https://facebook.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', name: 'Facebook' },
        { url: 'https://twitter.com', icon: 'https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1727079289~exp=1727082889~hmac=c7eec82eaa77f51bdc8ca3e88b7b3bb93f335184d82861a990c3f28ff160cbae&w=740', name: 'Twitter' },
        { url: 'https://instagram.com', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png', name: 'Instagram' }
    ];

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
                <FeedbackForm onSubmit={handleSubmitFeedback} id={null} />
            </div>
            <div>
                <SocialMedia links={socialMediaLinks} />
            </div>
            <div>
                <Feedback feedbackList={feedbackList} />
            </div>
        </div>
    );
}

export default Contact;