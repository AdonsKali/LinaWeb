import { motion, AnimatePresence } from "framer-motion";
import { MdContactSupport } from "react-icons/md";
import { RiFunctionFill, RiContactsFill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import HelpWindow from "./SupportWindow";
import { useLockBodyScroll } from 'react-use';

interface LinkItem {
  name: string;
  href: string;
  icon: JSX.Element;
}

const links: Omit<LinkItem, 'name'>[] = [
  { href: "#about", icon: <MdContactSupport /> },
  { href: "#features", icon: <RiFunctionFill /> },
  { href: "#contacts", icon: <RiContactsFill /> },
  { href: "#download", icon: <FaDownload /> },
];

export default function Nav_bar() {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useLockBodyScroll(state || isMenuOpen);

  const linkNames = [
    t('nav_section.links.about'),
    t('nav_section.links.functions'),
    t('nav_section.links.contact'),
    t('nav_section.links.download'),
  ];

  const handleNavClick = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const handleDonateClick = () => {
    setState(true);
    setIsMenuOpen(false);
  };

  const changeLanguage = (lang: 'ru' | 'en') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0, scale: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
        className="h-[6%] md:h-fit fixed top-0 left-0 w-full z-50 bg-white/35 backdrop-blur-xl shadow-lg glow rounded-b-full"
        style={{
          backgroundImage: "url(nav_bar_wave.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div className="2xl:max-w-6xl 2xl:py-3 lg:py-2 lg:max-w-4xl md:max-w-3xl md:py-0 mx-auto justify-between items-center md:px-14 2xl:px-6 px-4 py-3 flex">

          {/* Логотип */}
          <motion.div
            className="md:ml-0 ml-10 2xl:text-3xl xl:text-xl lg:text-xl md:text-[12px] text-lg font-bold bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent drop-shadow"
            whileHover={{ scale: 1.25 }}
          >
            Lina AI
          </motion.div>

          {/* Десктопная навигация */}
          <ul className="hidden md:flex space-x-2 2xl:space-x-8 lg:space-x-2 md:space-x-1">
            {links.map((link, i) => (
              <motion.li key={i} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => handleNavClick(link.href)}
                  className="hover:ml-3 hover:mr-3 hover:shadow-pink-400"
                  icon={link.icon}
                >
                  {linkNames[i]}
                </Button>
              </motion.li>
            ))}
          </ul>

          {/* Десктопные кнопки: переключатель языка + донат */}
          <div className="hidden md:flex items-center gap-3 2xl:gap-8">
            {/* Кнопка доната */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={handleDonateClick}
                className="bg-linear-to-r from-pink-300 to-purple-300 text-purple-900 font-bold font-serif
                          hover:from-pink-500 hover:cursor-pointer hover:to-purple-500 hover:text-white
                          rounded-2xl 2xl:text-2xl 2xl:scale-110 lg:text-sm lg:scale-80 md:scale-74 shadow-lg px-5 py-2 transition-all duration-300"
              >
                <div className="inline-flex relative 2xl:text-sm xl:text-[14px] md:text-[12px] lg:gap-0.5 2xl:gap-2 md:gap-0.5 items-center">
                  <img src="./heart-svgrepo-com.svg" className="xl:size-4 md:size-3 size-3 relative" alt="heart" />
                  {t('nav_section.donate')}
                  <img src="./heart-svgrepo-com.svg" className="xl:size-4 md:size-3 size-3 relative" alt="heart" />
                </div>
              </button>
            </motion.div>
            {/* Переключатель языка */}
            <motion.div
              className="flex gap-0.5 bg-white/30 backdrop-blur-sm rounded-full p-0.5 shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 }}
            >

              <button
                onClick={() => changeLanguage('ru')}
                className={`px-2.5 py-1 rounded-full text-[10px] lg:text-xs 2xl:text-sm font-medium transition-all duration-300 ${i18n.language === 'ru'
                    ? 'bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-md'
                    : 'text-purple-700 hover:bg-purple-100/50'
                  }`}
              >
                RU
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-[10px] lg:text-xs 2xl:text-sm font-medium transition-all duration-300 ${i18n.language === 'en'
                    ? 'bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-md'
                    : 'text-purple-700 hover:bg-purple-100/50'
                  }`}
              >
                EN
              </button>
            </motion.div>
          </div>

          {/* Бургер-иконка */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden mr-10 relative z-50 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-100/50 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-purple-700" />
              ) : (
                <FiMenu className="w-6 h-6 text-purple-700" />
              )}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Затемняющий фон */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden h-full"
            />

            {/* Само меню */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-64 bg-white/95 backdrop-blur-xl shadow-2xl z-40 md:hidden flex flex-col"
            >
              {/* Заголовок меню */}
              <div className="pt-20 pb-4 px-6 border-b border-purple-100 flex items-center justify-between">
                <h3 className="text-lg font-bold bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {t('nav_section.menu')}
                </h3>

                {/* Переключатель языка в мобильном меню */}
                <div className="flex gap-0.5 bg-purple-50 rounded-full p-0.5">
                  <button
                    onClick={() => changeLanguage('ru')}
                    className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-300 ${i18n.language === 'ru'
                        ? 'bg-linear-to-r from-pink-500 to-purple-500 text-white'
                        : 'text-purple-700'
                      }`}
                  >
                    RU
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-300 ${i18n.language === 'en'
                        ? 'bg-linear-to-r from-pink-500 to-purple-500 text-white'
                        : 'text-purple-700'
                      }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Ссылки в меню */}
              <div className="flex-1 overflow-y-auto py-4">
                {links.map((link, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full flex items-center gap-3 px-6 py-4 text-purple-900 hover:bg-purple-50 transition-colors duration-200"
                  >
                    <span className="text-xl text-purple-500">{link.icon}</span>
                    <span className="font-medium">{linkNames[i]}</span>
                  </motion.button>
                ))}
              </div>

              {/* Кнопка доната в мобильном меню */}
              <div className="p-6 border-t border-purple-100">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    handleDonateClick()
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-linear-to-r from-pink-300 to-purple-300 text-purple-900 font-bold font-serif
                           hover:from-pink-500 hover:to-purple-500 hover:text-white
                           rounded-2xl shadow-lg px-5 py-3 transition-all duration-300"
                >
                  <div className="inline-flex gap-2 items-center justify-center w-full">
                    <img src="./heart-svgrepo-com.svg" className="size-4" alt="heart" />
                    {t('nav_section.donate')}
                    <img src="./heart-svgrepo-com.svg" className="size-4" alt="heart" />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <HelpWindow
        onClose={() => {
          setState(false);
        }}
        isOpen={state}
      />
    </>
  );
}