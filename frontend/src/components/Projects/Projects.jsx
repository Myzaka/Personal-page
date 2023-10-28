import React from 'react';
import './Projects_style.scss';
import texts from './Projects_text.json';
import { useLang } from '../Generic/Language_context';
import CardPresentation from '../Generic/Card/Card';

export default function Projects() {
    const { language } = useLang();
    const text = texts[language];
    return(
        <>
            <h2 className='title'>{text['title']}</h2>
            <section className='projects' id='projects'>
                <div className='projects__list'>
                    <CardPresentation />
                    <CardPresentation />
                    <CardPresentation />
                    <CardPresentation />
                    <CardPresentation />
                    <CardPresentation />
                    <CardPresentation />
                    <CardPresentation />
                    <CardPresentation />
                    <CardPresentation />
                </div>
            </section>
        </>
    )
}