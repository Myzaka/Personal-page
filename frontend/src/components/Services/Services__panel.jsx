import React from 'react';
import './Services_style.scss';
import texts from './Services_text.json';

export default function ServicesPanel({ language, title, sentence }) {
  const text = texts[language];
  const sentences = sentence.split('.');
  
  // Supprimer les phrases vides (contenant uniquement un point)
  const filteredSentences = sentences.filter(e => e.trim() !== '');

  return (
    <div className='services__panel'>
      <h3 className='services__panel--title'>{text[title]}</h3>
      {filteredSentences.map((e, index) => (
        <p key={index}>{e.trim()}.</p>
      ))}
    </div>
  );
}
