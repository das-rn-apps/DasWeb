import React from 'react';
import '../styles/NewsUpdates.css';

function NewsUpdates({ newsUpdates }) {
    return (
        <section className="news-updates">
            <h3>News & Updates</h3>
            {newsUpdates.map((news, index) => (
                <div key={index} className="news-item">
                    <h4>{news.title}</h4>
                    <p>{news.date}</p>
                    <p>{news.content}</p>
                </div>
            ))}
        </section>
    );
}

export default NewsUpdates;