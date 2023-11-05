import React from 'react';
import './Burger_style.scss';
import texts from './Burger_text.json';
import { useLang } from '../Generic/Language_context';

export default function Burger() {
    const { language } = useLang();
    const text = texts[language] ?? { links: [] };

    // Utilisez map sur text.links, pas directement sur text
    const links = text.links.map((link, index) => (
        <li key={index} className="nav-item">
            <a className="nav-link" href={link.url}>{link.text}</a>
        </li>
    ));

    return (
        <nav className="navbar bg-body-tertiary fixed-top burger">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 burger__content">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
    
    