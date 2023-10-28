import React from 'react';
import './Anchor_style.scss';
import texts from './Header_text.json';
import { useLang } from '../Generic/Language_context';

export default function Anchor({ label, active }) {
    const { language } = useLang();
    const text = texts[language];

    // Gestionnaire de clic pour les liens
    const handleItemClick = () => {

        // Récupérer l'élément cible par son nom (label)
        const targetElement = document.getElementById(label);

        if (targetElement) {
            // Faire défiler la page jusqu'à l'élément cible
            //targetElement.scrollIntoView({ behavior: 'smooth' });
            var headerOffset = 230;
            var elementPosition = targetElement.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.scrollY - headerOffset;
            console.log(offsetPosition);
            console.log('test');
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Déterminez la classe CSS en fonction active
    const determineClassName = () => {
        if (active === 'Y') {
            return 'Anchor active';
        } else {
            return 'Anchor';
        }
    };

    return (
        <div
            className={determineClassName()}
            onClick={handleItemClick}
        >
            {text[label]}
        </div>
    );
}

