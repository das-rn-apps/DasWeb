import React from 'react';
import './About.css';

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
            <div className="skills">
                <h3>My Skills</h3>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Git</li>
                </ul>
            </div>
        </div>
    );
}

export default About;