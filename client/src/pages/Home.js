import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Testimonials from '../components/Testimonials';
import NewsUpdates from '../components/NewsUpdates';
import Statistics from '../components/Statistics';
import FeaturedSections from '../components/FeaturedSections';
import Tagline from '../components/Tagline';

function Home() {
    const testimonials = [
        { text: "This is the best service I've ever used!", author: "John Doe" },
        { text: "Amazing experience, highly recommend.", author: "Jane Smith" },
    ];

    const newsUpdates = [
        { title: "New Feature Released", date: "2023-10-01", content: "We have released a new feature..." },
        { title: "Upcoming Maintenance", date: "2023-10-05", content: "Scheduled maintenance on..." },
    ];

    const statistics = [
        { label: "Users", value: "10,000+" },
        { label: "Projects Completed", value: "500+" },
        { label: "Awards Won", value: "15" },
    ];

    const featuredSections = [
        { title: "Popular Product 1", description: "Description of popular product 1" },
        { title: "Popular Service 1", description: "Description of popular service 1" },
    ];

    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm a passionate web developer with expertise in creating modern and responsive web applications.</p>
            <Tagline />
            <Statistics statistics={statistics} />
            <FeaturedSections featuredSections={featuredSections} />
            <Testimonials testimonials={testimonials} />
            <NewsUpdates newsUpdates={newsUpdates} />
            <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
    );
}

export default Home;