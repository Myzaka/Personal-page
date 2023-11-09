import React from 'react';
import './Presentation_style.scss';
import texts from './Presentation_text.json';
import { useLang } from '../Generic/Language_context';
import JSK from './JSK.webp';

export default function Presentation() {
    const { language } = useLang();
    const text = texts[language];
    const sentences = text.pitch.split('.');
    const filteredSentences = sentences.filter(e => e.trim() !== '');
    return(
        <section className='presentation' id='presentation'>
            <div className='presentation__panel1'>
                <h1 className='presentation__maintitle'>{text.name}</h1>
                <h2 className='presentation__subtitle'>{text.offer}</h2>
            </div>
            <div className='presentation__panel2'>
                <img src={JSK} className='presentation__panel2--photo' alt="JSK" />
                <h3 >{filteredSentences.map((e, index) => (
                    <p className='presentation__subtitle' key={index}>{e.trim()}.</p>
                    ))}
                </h3>
            </div>
        </section>
    )
}