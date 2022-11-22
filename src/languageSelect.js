import React, { useState, createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LangContext from './config/LangContext';

const DropdownLanguage = () => {
  const { lange, setLange } = useContext(LangContext);
  console.log(lange);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('');

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    setLange(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <select onChange={handleLangChange} value={language}>
      <option value="fa">FA</option>
      <option value="en">EN</option>
    </select>
  );
};

export default DropdownLanguage;
