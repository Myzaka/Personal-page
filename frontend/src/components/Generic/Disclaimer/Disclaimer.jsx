import React from 'react';
import './Disclaimer_style.scss';
import texts from './Disclaimer_text.json';
import { useLang } from '../../Generic/Language_context';

export default function Disclaimer() {
  const { language } = useLang();
  const text = texts[language];

  return(
    <h3 className='disclaimer'>{text['title']}</h3>
  )
  }