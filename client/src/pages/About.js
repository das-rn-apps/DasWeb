import React from 'react';
import '../styles/About.css';
import skills from '../data/Skills';

function About() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>
                I'm a dedicated web developer with a passion for creating
                innovative and user-friendly applications. With a strong
                foundation in both front-end and back-end technologies,
                I strive to deliver high-quality solutions that meet and
                exceed client expectations.
            </p>
            <section className="skills-preview">
                <h2>Skills</h2>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-pill">
                            <span className="skill-text">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;