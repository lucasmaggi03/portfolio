import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

import pr11 from '../../img/fpr/11-pr.webp';
import pr12 from '../../img/fpr/12-pr.webp';
import pr21 from '../../img/spr/21-pr.webp';
import pr22 from '../../img/spr/22-pr.webp';
import pr31 from '../../img/tpr/31-pr.webp';
import pr32 from '../../img/tpr/32-pr.webp';

const projects = [
  {
    title: "UTimbaN",
    image: pr11,
    gallery: [pr11, pr12],
    description: "Plataforma interactiva con pagos, autenticación y monedas virtuales.",
    tags: ["React", "TypeScript", "Sequelize", "MercadoPago"],
    github: "https://github.com/starboyagus/DSW-TP-24"
  },
  {
    title: "TakeFee",
    image: pr21,
    gallery: [pr21, pr22],
    description: "Sistema de gestión y cobro de cuotas para clubes o comunidades.",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    github: "https://github.com/lucasmaggi03/debt-collection-software"
  },
  {
    title: "Picadito",
    image: pr31,
    gallery: [pr31, pr32],
    description: "Reservas online de canchas y complejos deportivos.",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    github: "https://github.com/lucasmaggi03/picadito-frontend"
  },
  {
    title: "Wordle Clone",
    image: pr31,
    gallery: [pr31, pr32],
    description: "Clone del popular juego de adivinanza de palabras.",
    tags: ["React", "TypeScript"],
    github: "https://github.com/lucasmaggi03/wordle-clone"
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">&lt;Proyectos/&gt;</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="card">
            <div className="mac-header">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
            <span className="card-title">{project.title}</span>
            <p className="card-description">{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="card-tag">{tag}</span>
              ))}
            </div>
            <div className="code-editor">
              <pre><code>
{`<h1>GitHub</h1>
<p>Repositorio del proyecto ${project.title}</p>`}
              </code></pre>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub /> Ver en GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
