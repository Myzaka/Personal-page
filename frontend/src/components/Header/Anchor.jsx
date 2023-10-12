import React, { useState } from 'react';
import './Anchor_style.scss';
import texts from './Header_text.json';
import { useLang } from '../Generic/Language_context';

export default function Anchor({ label }) {
    const { language } = useLang();
    const text = texts[language];

    // État pour suivre l'élément actif
    const [isActive, setIsActive] = useState(false);

    // Gestionnaire de clic pour les liens
    const handleItemClick = () => {
        setIsActive(!isActive); // Inversez l'état actif lorsque vous cliquez
    };

    return (
        <div
            className={`Anchor ${isActive ? 'active' : ''}`}
            onClick={handleItemClick}
        >
            {text[label]}
        </div>
    );
}

