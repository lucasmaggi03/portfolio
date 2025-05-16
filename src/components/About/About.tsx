import React, { useEffect, useState } from "react";
import "./About.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const About: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = ["Maggi Lucas", "FullStack Web Developer"];

  useEffect(() => {
    const currentText = texts[textIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setCharIndex(updatedCharIndex);
      setDisplayText(currentText.substring(0, updatedCharIndex));

      if (!isDeleting && updatedCharIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedCharIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <>
      <section id="about" className="about-section">
        <div className="header-content">
          <h1>Hello! I'm</h1>
          <h2>
            {displayText}
            <span className="cursor">|</span>
          </h2>
          <p className="about-description">
            I'm a System Engineering student, passionate about web
            development and solving complex problems through efficient and
            creative solutions. Constantly learning to grow both technically and
            personally. Focused on building scalable applications and writing
            clean, maintainable code.
          </p>
          <div className="social-media">
            <a
              onMouseEnter={() => setHoveredIcon("linkedin")}
              onMouseLeave={() => setHoveredIcon(null)}
              className="icon-media"
              target="_blank"
              href="https://www.linkedin.com/in/maggilucas/"
            >
              <CiLinkedin
                size="2.5rem"
                color={
                  hoveredIcon === "linkedin" ? "var(--icon-tech)" : "#E2E8F0"
                }
              />
            </a>
            <a
              onMouseEnter={() => setHoveredIcon("github")}
              onMouseLeave={() => setHoveredIcon(null)}
              className="icon-media"
              target="_blank"
              href="https://github.com/lucasmaggi03"
            >
              <FaGithub
                size="2.5rem"
                color={
                  hoveredIcon === "github" ? "var(--icon-tech)" : "#E2E8F0"
                }
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
