import React, { Component } from 'react';
import './Services_style.scss';
import texts from './Services_text.json';
import Block from '../Generic/Block/Block';
import '../Generic/Block/Block_style.scss';
import { useLang } from '../Generic/Language_context';
import Parallax from '../Generic/Parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import Component2 from '../Generic/Parallax2';

export default function Services() {
    const { language } = useLang();
    const text = texts[language];
    return(
        <section className='services' id='services'>
            <Component2 />
            <h2 className='services__title'>{text['title']}</h2>
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