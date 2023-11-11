import React from 'react';
import './Services_style.scss';
import texts from './Services_text.json';
import Block from '../Generic/Block/Block';
import '../Generic/Block/Block_style.scss';
import { useLang } from '../Generic/Language_context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'
import { faDigging } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
    const { language } = useLang();
    const text = texts[language];
    return(
        <>
        <p className="anchor-offset" id='anchor1'></p>
        <h2 className='title'>
            {text['title']}
        </h2>
        <section className='services' id='services'>

            <div className='services__list'>
                <Block
                    language={'fr'}
                    title={text['title1']}
                    sentence={text['text1']}
                    icon={<FontAwesomeIcon icon={faCompassDrafting} />}
                    />
                <Block
                    language={'fr'}
                    title={text['title2']}
                    sentence={text['text2']}
                    icon={<FontAwesomeIcon icon={faDigging} />}
                    />
                <Block
                    language={'fr'}
                    title={text['title3']}
                    sentence={text['text3']}
                    icon={<FontAwesomeIcon icon={faKeyboard} />}
                    />
            </div>
        </section>
        </>
    )
}