import React, { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export function LanguageContext ({ children }) {
  const [language, setLanguage] = useState('fr'); // Définissez la langue par défaut ici

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LangContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
