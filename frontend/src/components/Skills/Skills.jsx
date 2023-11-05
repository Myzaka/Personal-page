import React from 'react';
import './Skills_style.scss';
import texts from './Skills_text.json';
import Block from '../Generic/Block/Block';
import '../Generic/Block/Block_style.scss';
import { useLang } from '../Generic/Language_context';

export default function Skills() {
    const { language } = useLang();
    const text = texts[language];
    return(
        <>
            <p className="anchor-offset" id='anchor2'></p>
            <h2 className='title'>
                {text['title']}
            </h2>
            <section className='skills' id='skills'>
                <div className='skills__list'>
                    <Block
                        title={text['title1']}
                        sentence={text['text1']}
                        />
                    <Block
                        title={text['title2']}
                        sentence={text['text2']}
                        />
                    <Block
                        title={text['title3']}
                        sentence={text['text3']}
                        />
                </div>
            </section>
        </>
    )
}