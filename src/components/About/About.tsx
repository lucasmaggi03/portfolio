import React from 'react';
import { useState } from 'react';
import './About.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const About: React.FC = () => {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    return (
        <section id="about" className="about-section">
            <div className="header-content">
                <h1>Hey! Soy Lucas Maggi</h1>
                <h2>Full Stack Developer</h2>
                <p>
                    Estudiante avanzado de Ingeniería en Sistemas de Información (ISI) con gran interés en el desarrollo web.
                    <br />
                    He desarrollado proyectos personales utilizando tecnologías como React, TypeScript, SQL, Node.js y Express.js para crear aplicaciones eficientes, escalables y seguras. Mi enfoque incluye el diseño de interfaces de usuario atractivas con React y la implementación de APIs RESTful robustas.
                    <br />Apasionado por aprender y enfrentar nuevos desafíos técnicos, busco seguir creciendo en el desarrollo de soluciones innovadoras que combinen un frontend dinámico con un backend eficiente.
                </p>
                <div className='social-media'>
                    <a
                        onMouseEnter={() => setHoveredIcon('linkedin')}
                        onMouseLeave={() => setHoveredIcon(null)}
                        className='icon-media'
                        target="_blank"
                        href="https://www.linkedin.com/in/maggilucas/"
                    >
                        <CiLinkedin size="2.5rem" color={hoveredIcon === 'linkedin' ? 'var(--icon-tech)' : '#E2E8F0'} />
                    </a>
                    <a
                        onMouseEnter={() => setHoveredIcon('github')}
                        onMouseLeave={() => setHoveredIcon(null)}
                        className='icon-media'
                        target="_blank"
                        href="https://github.com/lucasmaggi03"
                    >
                        <FaGithub size="2.5rem" color={hoveredIcon === 'github' ? 'var(--icon-tech)' : '#E2E8F0'} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;