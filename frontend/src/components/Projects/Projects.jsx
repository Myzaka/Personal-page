import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Projects_style.scss';
import texts from './Projects_text.json';
import { useLang } from '../Generic/Language_context';
import CardPresentation from '../Generic/Card/Card';

export default function Projects({filter}) {
    const { language } = useLang();
    const text = texts[language];
    const [projectsData, setProjectsData] = useState({});

    useEffect(() => {
        Axios.get("./ProjectisList_text.json")
            .then((response) => {
                const data = response.data[language];
                if (data) {
                    setProjectsData(data); // Mettez à jour l'état avec les données JSON spécifiques à la langue
                } else {
                    console.error('Aucune donnée trouvée pour la langue :', language);
                }
            })
            .catch((error) => {
                console.error('Erreur lors du chargement des données JSON :', error);
            });
    }, [language]);

    // Filtrer les projets en fonction du bouton cliqué
    const filteredProjects = Object.keys(projectsData).filter(key => {
        if (filter === 'Tous') {
            return true; // Affichez tous les projets si le filtre est "Tous"
        } else {
            return projectsData[key].category === filter; // Sinon, filtrez en fonction de la catégorie
        }
    });

    return (
        <>
            {filteredProjects.map((key) => {
                const project = projectsData[key];
                const imagePath = `${project.image}`;
                return (
                    <CardPresentation
                        key={key}
                        project={key}
                        image={imagePath}
                    />
                );
            })}
        </>
    );
}
