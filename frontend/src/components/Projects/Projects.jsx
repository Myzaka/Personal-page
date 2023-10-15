import React from 'react';
import './Projects_style.scss';
import texts from './Projects_text.json';
import { useLang } from '../Generic/Language_context';
import CardPresentation from '../Generic/Card/Card';

export default function Projects() {
    const { language } = useLang();
    const text = texts[language];
    return(
        <section className='projects photo-hover' id='projects'>
            <h2>{text['title']}</h2>
            <div className='projects__list'>
                <CardPresentation />
            </div>
        </section>
    )
}