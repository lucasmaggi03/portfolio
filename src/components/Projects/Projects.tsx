import React, { useEffect, useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import db from "../../data/db.json";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  image?: string;
}

const Projects: React.FC = () => {
  const [data, setData] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setData(db.projects);
  }, []);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">&lt;Projects/&gt;</h1>

      <div className="projects-grid">
        {data.map((project, idx) => (
          <div key={idx} className="card" onClick={() => handleCardClick(project)}>
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
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="project-overlay" onClick={closeModal}>
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
          >
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="mac-header">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
              />
            )}

            <div className="tags">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="card-tag">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
