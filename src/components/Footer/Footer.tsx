import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">Maggi, Lucas Nahuel</p>
        <p className="footer-role">Fullstack Web Developer</p>
        <a href="mailto:lucasmaggi03@gmail.com" className="footer-email">
          lucasmaggi03@gmail.com
        </a>
        <div className="footer-links">
          <a
            href="https://github.com/lucasmaggi03"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lucasmaggi03"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
