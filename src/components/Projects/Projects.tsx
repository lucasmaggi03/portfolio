import React, { useState } from 'react';
import './Projects.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import pr11 from '../../img/fpr/11-pr.webp';
import pr12 from '../../img/fpr/12-pr.webp';
import pr13 from '../../img/fpr/13-pr.webp';
import pr14 from '../../img/fpr/14-pr.webp';

import pr21 from '../../img/spr/21-pr.webp';
import pr22 from '../../img/spr/22-pr.webp';
import pr23 from '../../img/spr/23-pr.webp';
import pr24 from '../../img/spr/24-pr.webp';
import pr25 from '../../img/spr/25-pr.webp';
import pr26 from '../../img/spr/26-pr.webp';

import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMercadopago } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Projects: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    const projects = [
        {
            title: "Plataforma de Entretenimiento Interactivo",
            description: "Desarollamos en equipo una plataforma web interactiva como proyecto académico, utilizando React y TypeScript para el frontend, y Sequelize con SQL para la gestión de datos. Implementé un sistema de autenticación seguro con JWT y utilicé Axios para la comunicación entre frontend y backend. Además, integré MercadoPago para gestionar transacciones de monedas virtuales. Este proyecto me permitió fortalecer mis habilidades en desarrollo full-stack, seguridad de aplicaciones y pasarelas de pago.",
            image: [pr11, pr12, pr13, pr14],
            tech: [<FaReact size="2rem" color='var(--icon-tech)' />, <BiLogoTypescript size="2rem" color='var(--icon-tech)' />, <SiMercadopago size="2rem" color='var(--icon-tech)' />, <SiSequelize size="2rem" color='var(--icon-tech)' />]
        },
        {
            title: "Sistema de Gestión de Cuotas",
            description: "Es una herramienta diseñada para agilizar y simplificar la gestión y cobro de cuotas. Automatiza procesos como la generación de facturas, recordatorios de pagos, seguimiento de pagos pendientes. Ideal para ahorrar tiempo y garantizar una recaudación eficiente y organizada.",
            image: [pr21, pr22, pr23, pr24, pr25, pr26],
            tech: [<FaReact size="2rem" color='var(--icon-tech)' />, <BiLogoTypescript size="2rem" color='var(--icon-tech)' />, <FaNodeJs size="2rem" color='var(--icon-tech)'/>, <SiMysql size="2rem" color='var(--icon-tech)' />]
        },
    ];

    return (
        <section id='projects' className='projects'>
            <div className='content-pr'>
                <h1 className='title-project'>&lt;Proyectos/&gt;</h1>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`card ${expanded === index ? 'expanded' : ''}`}
                        onClick={() => handleImageClick(index)}
                    >
                        <div
                            className='carousel'
                            onClick={(e) => e.stopPropagation()} 
                        >
                            <ImageGallery
                                items={project.image.map((img) => ({
                                    original: img,
                                }))}
                                showPlayButton={false}
                                autoPlay={false}
                                showFullscreenButton={false}
                            />
                        </div>
                        {expanded !== index && (
                            <div className='card-content'>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className='tech-icons'>
                                    {project.tech}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;