import React, { useState } from 'react';
import './Projects.css';

import pr11 from '../../img/11-pr.webp';

import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMercadopago } from "react-icons/si";
import { SiSequelize } from "react-icons/si";

const Projects: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const handleImageClick = () => {
        setExpanded(!expanded);
    };

    return (
        <main className='projects'>
            <div className='content-pr'>
                <h1 className='title-project'>&lt;Proyectos/&gt;</h1>
                <div className='card'>
                    <div 
                        className={`card-img-container ${expanded ? 'expanded' : ''}`}
                        onClick={handleImageClick}
                    >
                        <img className='card-img' src={pr11} alt="Proyecto 1" />
                    </div>
                    <div className='card-content'>
                        <h2>Plataforma de Entretenimiento Interactivo</h2>
                        <p>
                            Desarrollé una plataforma web interactiva como proyecto académico, utilizando React y TypeScript para el frontend, y Sequelize con SQL para la gestión de datos. Implementé un sistema de autenticación seguro con JWT y utilicé Axios para la comunicación entre frontend y backend. Además, integré MercadoPago para gestionar transacciones de monedas virtuales. Este proyecto me permitió fortalecer mis habilidades en desarrollo full-stack, seguridad de aplicaciones y pasarelas de pago.
                        </p>
                        <div className='tech-icons'>
                            <FaReact size="2rem" color='#61DAFB' />
                            <BiLogoTypescript size="2rem" color='#3178C6' />
                            <SiMercadopago size="2rem" color='#009EE3' />
                            <SiSequelize size="2rem" color='#52B0E7' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projects;