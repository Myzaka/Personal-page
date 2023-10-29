import React from 'react';
import './Projects_style.scss';
import texts from './Projects_text.json';
import textsProjects from './ProjectsList/ProjectisList_text.json'
import { useLang } from '../Generic/Language_context';
import CardPresentation from '../Generic/Card/Card';

export default function Projects() {
    const { language } = useLang();
    const text = texts[language];
    const textProject = textsProjects[language];
    return(
        <>
            <h2 className='type'>{text['type']}</h2>
            <section className='projects' id='projects'>
                <div className='projects__list'>
                    <CardPresentation 
                        type={textProject["project1"]["type"]}
                        description={textProject["project1"]["description_short"]}
                    />
                    <CardPresentation 
                        type={textProject["project2"]["type"]}
                        description={textProject["project2"]["description_short"]}
                    />
                    <CardPresentation 
                        type={textProject["project3"]["type"]}
                        description={textProject["project3"]["description_short"]}
                    />
                    <CardPresentation 
                        type={textProject["project4"]["type"]}
                        description={textProject["project4"]["description_short"]}
                    />
                    <CardPresentation 
                        type={textProject["project5"]["type"]}
                        description={textProject["project5"]["description_short"]}
                    />
                    <CardPresentation 
                        type={textProject["project6"]["type"]}
                        description={textProject["project6"]["description_short"]}
                    />
                    <CardPresentation 
                        type={textProject["project7"]["type"]}
                        description={textProject["project7"]["description_short"]}
                    />
                    <CardPresentation 
                        type={textProject["project8"]["type"]}
                        description={textProject["project8"]["description_short"]}
                    />
                    <CardPresentation 
                        type={textProject["project9"]["type"]}
                        description={textProject["project9"]["description_short"]}
                    />
                    <CardPresentation 
                        type={textProject["project10"]["type"]}
                        description={textProject["project10"]["description_short"]}
                    />
                </div>
            </section>
        </>
    )
}