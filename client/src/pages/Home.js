import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../styles/Home.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projects from '../data/Projects';
import heroImages from '../data/Pagination';
import skills from '../data/Skills';

function Home() {
    return (
        <div className="home">
            <section className="about-preview">
                <p>"The only way to do great work is to love what you do."</p>
                <div className="name-photo-container">
                    <p>- Deepak</p>
                    <img src='https://picsum.photos/id/1/800/600' alt="Me" className="my-photo" />
                </div>
            </section>

            <section className="hero">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className="hero-swiper"
                >
                    {heroImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image.src} alt={image.alt} className="hero-image" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>



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

            <section className="projects-preview">
                <h2>Featured Projects</h2>
                <div className="project-cards">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
                <Link to="/projects" className="view-all">View All Projects</Link>
            </section>
        </div>
    );
}

export default Home;