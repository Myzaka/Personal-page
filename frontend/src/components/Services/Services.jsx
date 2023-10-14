import React from 'react';
import './Services_style.scss';
import texts from './Services_text.json';
import Block from '../Generic/Block/Block';
import '../Generic/Block/Block_style.scss';
import { useLang } from '../Generic/Language_context';

export default function Services() {
    const { language } = useLang();
    const text = texts[language];
    return(
        <section className='services' id='services'>
            <h2>Services</h2>
            <div className='services__list'>
                <Block
                    language={'fr'}
                    title={text['title1']}
                    sentence={text['text1']}
                    />
                <Block
                    language={'fr'}
                    title={text['title2']}
                    sentence={text['text2']}
                    />
                <Block
                    language={'fr'}
                    title={text['title3']}
                    sentence={text['text3']}
                    />
            </div>
        </section>
    )
}