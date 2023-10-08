import React from 'react';
import './Competences_style.scss';
import texts from './Competences_text.json';
import CompetencesPanel from './CompetencesPanel';
import { useLang } from '../Generic/Language_context';

export default function Competences() {
    const { language } = useLang();
    const text = texts[language];
    return(
        <section className='competences'>
            <h1>Competences</h1>
            <div className='competences__list'>
                <CompetencesPanel
                    language={'fr'}
                    title={'title1'}
                    sentence={text['text1']}
                    />
                <CompetencesPanel
                    language={'fr'}
                    title={'title2'}
                    sentence={text['text2']}
                    />
                <CompetencesPanel
                    language={'fr'}
                    title={'title3'}
                    sentence={text['text3']}
                    />
            </div>
        </section>
    )
}