import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#about">Sobre mí</a></li>
                    <li className="nav-item"><a href="#projects">Proyectos</a></li>
                    <li className="nav-item"><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;