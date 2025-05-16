import React from 'react';
import './Tech.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiExpress, SiPostman } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Postman', icon: <SiPostman /> },
];

const Tech: React.FC = () => {
  return (
    <section className="tech-section">
      <h2 className="tech-title">&lt;Techs/&gt;</h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-card">
            <div className="tech-icon">{tech.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
