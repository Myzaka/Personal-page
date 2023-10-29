import React from 'react';
import './Projects_style.scss';
import texts from './Projects_text.json';
import textsProjects from './ProjectsList/ProjectisList_text.json'
import { useLang } from '../Generic/Language_context';
import CardPresentation from '../Generic/Card/Card';
import projet10 from './ProjectsList/KASA.png'

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
                        type={textProject["project1"]["type"]}
                        description={textProject["project1"]["description_short"]}
                        description_long={textProject["project1"]["description_long"]}
                        tech={textProject["project1"]["tech"]}
                        issues={textProject["project1"]["issues"]}
                        skills={textProject["project1"]["skills"]}
                        link={textProject["project1"]["link"]}
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
                        description_long={textProject["project9"]["description_long"]}
                        tech={textProject["project9"]["tech"]}
                        issues={textProject["project9"]["issues"]}
                        skills={textProject["project9"]["skills"]}
                        link={textProject["project9"]["link"]}
                    />
                    <CardPresentation 
                        type={textProject["project10"]["type"]}
                        description={textProject["project10"]["description_short"]}
                        description_long={textProject["project10"]["description_long"]}
                        tech={textProject["project10"]["tech"]}
                        issues={textProject["project10"]["issues"]}
                        skills={textProject["project10"]["skills"]}
                        link={textProject["project10"]["link"]}
                        image={projet10}
                    />
                </div>
            </section>
        </>
    )
}