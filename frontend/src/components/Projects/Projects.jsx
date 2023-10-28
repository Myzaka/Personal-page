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
            <h2 className='title'>{text['title']}</h2>
            <section className='projects' id='projects'>
                <div className='projects__list'>
                    <CardPresentation 
                        title={textProject["project1"]["title"]}
                        description={textProject["project1"]["description_short"]}
                    />
                    <CardPresentation 
                        title={textProject["project2"]["title"]}
                        description={textProject["project2"]["description_short"]}
                    />
                    <CardPresentation 
                        title={textProject["project3"]["title"]}
                        description={textProject["project3"]["description_short"]}
                    />
                    <CardPresentation 
                        title={textProject["project4"]["title"]}
                        description={textProject["project4"]["description_short"]}
                    />
                    <CardPresentation 
                        title={textProject["project5"]["title"]}
                        description={textProject["project5"]["description_short"]}
                    />
                    <CardPresentation 
                        title={textProject["project6"]["title"]}
                        description={textProject["project6"]["description_short"]}
                    />
                    <CardPresentation 
                        title={textProject["project7"]["title"]}
                        description={textProject["project7"]["description_short"]}
                    />
                    <CardPresentation 
                        title={textProject["project8"]["title"]}
                        description={textProject["project8"]["description_short"]}
                    />
                    <CardPresentation 
                        title={textProject["project9"]["title"]}
                        description={textProject["project9"]["description_short"]}
                    />
                    <CardPresentation 
                        title={textProject["project10"]["title"]}
                        description={textProject["project10"]["description_short"]}
                    />
                </div>
            </section>
        </>
    )
}