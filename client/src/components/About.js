import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>I'm a passionate software developer with expertise in building full-stack mobile applications. My goal is to create intuitive and efficient solutions that solve real-world problems.</p>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    <li>JavaScript (React, React Native, Node.js)</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>RESTful API Design</li>
                    <li>Git & Version Control</li>
                    <li>Agile Development</li>
                </ul>
            </div>
            <div className="education">
                <h3>Education</h3>
                <p>Bachelor of Technology in Computer Science</p>
                <p>XYZ University (2018-2022)</p>
            </div>
        </div>
    );
}

export default About;