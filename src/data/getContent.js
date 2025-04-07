import { content as en } from './content.en';
import { content as es } from './content.es';
import { content as de } from './content.de';

export const getContent = (lang = 'en') => {
  const translations = { en, es, de };
  return translations[lang] || en;
};