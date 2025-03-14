import React, { useState } from 'react';
import './Projects.css';

import pr11 from '../../img/11-pr.webp'; // Imagen del primer proyecto

import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMercadopago } from "react-icons/si";
import { SiSequelize } from "react-icons/si";

const Projects: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    const projects = [
        {
            title: "Plataforma de Entretenimiento Interactivo",
            description: "Desarrollé una plataforma web interactiva como proyecto académico, utilizando React y TypeScript para el frontend, y Sequelize con SQL para la gestión de datos. Implementé un sistema de autenticación seguro con JWT y utilicé Axios para la comunicación entre frontend y backend. Además, integré MercadoPago para gestionar transacciones de monedas virtuales. Este proyecto me permitió fortalecer mis habilidades en desarrollo full-stack, seguridad de aplicaciones y pasarelas de pago.",
            image: pr11,
        },
        {
            title: "Sistema de Gestión de Cuotas",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
            image: pr11,
        },
    ];

    return (
        <main className='projects'>
            <div className='content-pr'>
                <h1 className='title-project'>&lt;Proyectos/&gt;</h1>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`card ${expanded === index ? 'expanded' : ''}`}
                        onClick={() => handleImageClick(index)}
                    >
                        <img className='card-img' src={project.image} alt={project.title} />
                        {expanded !== index && (
                            <div className='card-content'>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className='tech-icons'>
                                    <FaReact size="2rem" color='#61DAFB' />
                                    <BiLogoTypescript size="2rem" color='#3178C6' />
                                    <SiMercadopago size="2rem" color='#009EE3' />
                                    <SiSequelize size="2rem" color='#52B0E7' />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Projects;