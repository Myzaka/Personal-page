import React from 'react';
import './Presentation_style.scss';
import texts from './Presentation_text.json';
import { useLang } from '../Generic/Language_context';

export default function Presentation() {
    const { language } = useLang();
    const text = texts[language];
    return(
        <section className='presentation'>
            <div className='presentation__panel1'>
                <h1 className='presentation__maintitle'>{text.name}</h1>
                <h2 className='presentation__subtitle'>{text.offer}</h2>
            </div>
            <div className='presentation__panel2'>
                <h1 className='presentation__maintitle'>{text.pitch}</h1>
            </div>
        </section>
    )
}