import React from 'react';
import './Services_style.scss';
import texts from './Services_text.json';
import ServicesPanel from './Services__panel';

export default function Services( {language} ) {
    const text = texts[language];
    return(
        <section className='services'>
            <h1>Services</h1>
            <div className='services__list'>
                <ServicesPanel
                    language={'fr'}
                    title={'title1'}
                    sentence={text['text1']}
                    />
                <ServicesPanel
                    language={'fr'}
                    title={'title2'}
                    sentence={text['text2']}
                    />
                <ServicesPanel
                    language={'fr'}
                    title={'title3'}
                    sentence={text['text3']}
                    />
            </div>
        </section>
    )
}