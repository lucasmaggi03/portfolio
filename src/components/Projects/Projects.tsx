import React, { useEffect, useState } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import db from "../../data/db.json"

const Projects: React.FC = () => {
  const [data, setData] = useState(db.projects);

  useEffect(() => {
    setData(db.projects);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">&lt;Projects/&gt;</h1>
      <div className="projects-grid">
        {data.map((project, idx) => (
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
