import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ruTranslation from './locales/ru/translation.json';
import enTranslation from './locales/en/translation.json';

const resources = {
  ru: {
    translation: ruTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

const getDefaultLanguage = () => {
  const savedLang = localStorage.getItem('language');
  if (savedLang === 'ru' || savedLang === 'en') return savedLang;
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'ru' || browserLang === 'en') return browserLang;

  return 'ru';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDefaultLanguage(),
    fallbackLng: 'ru', 
    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;