import React from 'react';
import './Projects_style.scss';
import texts from './Projects_text.json';
import textsProjects from './ProjectsList/ProjectisList_text.json'
import { useLang } from '../Generic/Language_context';
import CardPresentation from '../Generic/Card/Card';
import projet1 from './ProjectsList/controle.png';
import projet2 from './ProjectsList/Risk.png';
import projet3 from './ProjectsList/tiers.png';
import projet4 from './ProjectsList/alert.png';
import projet5 from './ProjectsList/sod.JPG';
import projet6 from './ProjectsList/paiement.png';
import projet7 from './ProjectsList/qlik.png';
import projet8 from './ProjectsList/rgpd.png';
import projet9 from './ProjectsList/grimoire.png';
import projet10 from './ProjectsList/KASA.png';

export default function Projects() {
    const { language } = useLang();
    const text = texts[language];
    const textProject = textsProjects[language];
    return(
        <>
            <h2 className='title'>{text['title']}</h2>
            <section className='projects' id='projects'>
                <div className='projects__list'>
                    <CardPresentation 
                        project="project1"
                        image={projet1}
                    />
                    <CardPresentation 
                        project="project2"
                        image={projet2}
                    />
                    <CardPresentation 
                        project="project3"
                        image={projet3}
                    />
                    <CardPresentation 
                        project="project4"
                        image={projet4}
                    />
                    <CardPresentation 
                        project="project5"
                        image={projet5}
                    />
                    <CardPresentation 
                        project="project6"
                        image={projet6}
                    />
                    <CardPresentation 
                        project="project7"
                        image={projet7}
                    />
                    <CardPresentation 
                        project="project8"
                        image={projet8}
                    />
                    <CardPresentation 
                        project="project9"
                        image={projet9}
                    />
                    <CardPresentation 
                        project="project10"
                        image={projet10}
                    />
                </div>
            </section>
        </>
    )
}