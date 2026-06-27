import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lang: 'ru' | 'en') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Сохраняем выбор
  };

  return (
    <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'ru'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        🇷🇺 RU
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'en'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
};