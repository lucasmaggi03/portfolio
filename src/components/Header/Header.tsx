import React from 'react';
import './Header.css';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#about">Sobre mí</a></li>
                    <li className="nav-item"><a href="#portfolio">Proyectos</a></li>
                    <li className="nav-item"><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <h1>Hey! Soy Lucas Maggi</h1>
                <h2>Full Stack Developer</h2>
                <p>Estudiante avanzado de Ingeniería en Sistemas de Información (ISI) con gran interés en el desarrollo web. Experiencia en tecnologías como React, TypeScript, SQL y JWT para crear aplicaciones eficientes y seguras. Apasionado por aprender y enfrentar nuevos desafíos técnicos.</p>
                <div className='social-media'>
                <CiLinkedin size="2.5rem" color='#E2E8F0' />
                <FaGithub size="2.5rem" color='#E2E8F0'/>
                </div>
            </div>
        </header>
    );
};

export default Header;