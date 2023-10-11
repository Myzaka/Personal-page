import React from 'react';
import './Competences_style.scss';
import texts from './Competences_text.json';
import Block from '../Generic/Block/Block';
import '../Generic/Block/Block_style.scss';
import { useLang } from '../Generic/Language_context';

export default function Competences() {
    const { language } = useLang();
    const text = texts[language];
    return(
        <section className='competences'>
            <h1>Competences</h1>
            <div className='competences__list'>
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