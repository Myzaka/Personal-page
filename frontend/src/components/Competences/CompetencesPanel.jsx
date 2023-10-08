import React from 'react';
import './Competences_style.scss';
import texts from './Competences_text.json';

export default function competencesPanel({ language, title, sentence }) {
  const text = texts[language];
  const sentences = sentence.split('.');
  
  // Supprimer les phrases vides (contenant uniquement un point)
  const filteredSentences = sentences.filter(e => e.trim() !== '');

  return (
    <div className='competences__panel'>
      <h3 className='competences__panel--title'>{text[title]}</h3>
      {filteredSentences.map((e, index) => (
        <p key={index}>{e.trim()}.</p>
      ))}
    </div>
  );
}
