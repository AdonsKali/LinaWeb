import { motion, AnimatePresence } from "framer-motion";
import { FallingSakura } from "./FallingSakura";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";


export default function LinaTextHeader() {
  const { t } = useTranslation();
  const messages = t("lina_bubble_messages", {returnObjects: true}) as string[];
  const currentSrc = "chibis/lina_sit.gif";
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const typingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cycleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTyping = (text: string) => {
    setDisplayedText("");
    setIsTypingComplete(false);
    let index = 0;
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    typingTimerRef.current = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      }
    }, 30);
  };

  const startBubbleCycle = () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];

    setIsOpen(true);
    startTyping(randomMsg);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
      const nextDelay = 7000 + Math.random() * 2000;
      if (cycleTimerRef.current) clearTimeout(cycleTimerRef.current);
      cycleTimerRef.current = setTimeout(startBubbleCycle, nextDelay);
    }, 4000);
  };

  useEffect(() => {
    const initialDelay = 3000;
    const initialTimer = setTimeout(startBubbleCycle, initialDelay);

    return () => {
      clearTimeout(initialTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      if (cycleTimerRef.current) clearTimeout(cycleTimerRef.current);
    };
  }, []);

  return (
    <motion.div className="delay-1000 relative 2xl:mr-140 xl:mr-105 xl:mt-4 lg:mr-65 md:mr-50 md:mt-14 mt-8 mr-28 z-10 flex flex-col items-center">
      {/* Диалоговое облачко - абсолютное позиционирование */}
      <div className="absolute z-30 pointer-events-none" style={{ bottom: 'calc(100% - 20px)'}}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="relative"
              initial={{ scale: 0, originX: 0.5, originY: 1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, originX: 0.5, originY: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4,
              }}
            >
              {/* Само облачко */}
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 translate-y-3 py-3 md:translate-y-0 md:-py-35 max-w-50 md:max-w-50 xl:scale-[100%] md:scale-[75%] lg:scale-[65%] scale-[50%] shadow-lg shadow-pink-200/50 border  relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {/* Хвостик облачка */}
                <div
                  className="absolute -bottom-2.5 left-1/6 -translate-x-1/2 w-4 h-4 bg-white/90 backdrop-blur-sm border-r border-b  rotate-45 rounded-br-sm"
                  style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                />

                {/* Текст с анимацией печати */}
                <p className="xl:text-lg lg:text-md md:text-sm text-xs text-blue-900 font-medium text-center min-h-[1.5em] md:min-h-[1.2em]">
                  {displayedText}
                  {!isTypingComplete && displayedText.length > 0 && (
                    <span className="inline-block w-0.5 h-4 bg-purple-500 animate-pulse ml-0.5 align-middle" />
                  )}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Чиби */}
      <motion.img
        alt="text_chibi"
        src={currentSrc}
        className="w-18 lg:w-26 md:w-20 2xl:w-48 xl:w-36 lg:-translate-x-26 z-20 transform xl:translate-y-10 md:translate-y-6 md:-translate-x-23 xl:-translate-x-33 translate-y-3.5 -translate-x-16 filter smooth-edges"
        initial={{ y: -80, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ stiffness: 100, damping: 15, delay: 2.8 }}
        style={{
          filter: "blur(0.4px) contrast(1.03) brightness(1.02)",
          imageRendering: "auto",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Подложка */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-6 py-4 rounded-xl bg-linear-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-xl" />
      </div>

      {/* Текст */}
      <motion.h1
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        animate={{ x: -20, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 2.8 }}
        className="
          2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-extrabold 
          bg-linear-to-r from-pink-500 to-purple-600
          bg-clip-text text-transparent mb-[10vh]
          bg-purple-200 shadow-lg shadow-pink-200 rounded-b-xl backdrop-blur-sm drop-shadow-[0_1.2px_1.2px_rgba(80,0,88,0.8)]
          relative
        "
      >
        Lina AI
        <div className="absolute -bottom-1.25 left-0 right-0 flex flex-wrap justify-center gap-0 pointer-events-none -translate-y-4">
          <img src="sakura_scatter.png" className="w-full" alt="sakura" />
        </div>

        <motion.p
          className="2xl:text-xl xl:text-lg lg:text-sm md:text-[14px] text-[10px] text-pink-200 opacity-70 mt-[1vh] mb-1 tracking-widest text-center"
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 2 }}
        >
          project
        </motion.p>
      </motion.h1>

      <FallingSakura />
    </motion.div>
  );
}