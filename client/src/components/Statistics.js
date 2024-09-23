import React from 'react';
import '../styles/Statistics.css';

function Statistics({ statistics }) {
    return (
        <section className="statistics">
            {statistics.map((stat, index) => (
                <div key={index} className="stat-item">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                </div>
            ))}
        </section>
    );
}

export default Statistics;