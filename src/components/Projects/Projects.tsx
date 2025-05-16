import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "UTimbaN",
    description:
      "Interactive platform with payments, authentication, and virtual currencies.",
    tags: ["React", "TypeScript", "Sequelize", "MercadoPago"],
    github: "https://github.com/starboyagus/DSW-TP-24",
  },
  {
    title: "TakeFee",
    description:
      "Management and fee collection system for clubs or communities.",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    github: "https://github.com/lucasmaggi03/debt-collection-software",
  },
  {
    title: "Picadito",
    description: "Online booking for sports fields and complexes.",
    tags: ["React", "TypeScript", "Node.js", "MySQL"],
    github: "https://github.com/lucasmaggi03/picadito-frontend",
  },
  {
    title: "Wordle Clone",
    description: "Clone of the popular word guessing game.",
    tags: ["React", "TypeScript"],
    github: "https://github.com/lucasmaggi03/wordle-clone",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">&lt;Projects/&gt;</h1>
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
                <span key={i} className="card-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="code-editor">
              <pre>
                <code>
                  {`<h1>GitHub</h1>
<p>Project repository for ${project.title}</p>`}
                </code>
              </pre>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
