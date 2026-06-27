import { motion } from "framer-motion";
import { FallingSakura } from "./FallingSakura";


export default function LinaTextHeader() {
  const currentSrc = "chibis/lina_sit.gif";
  return (
    <motion.div
      className="delay-1000 relative 2xl:mr-140 xl:mr-105 lg:mr-65 md:mr-50 mr-28 z-10 flex flex-col items-center "
    >
      {/* Чиби */}
      <motion.img
        src={currentSrc}
        className="w-18 lg:w-26 md:w-20 2xl:w-48 xl:w-36 lg:-translate-x-26 z-20 transform xl:translate-y-10 md:translate-y-6 md:-translate-x-23  xl:-translate-x-33 translate-y-3.5 -translate-x-16 filter smooth-edges"
        initial={{ y: -80, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ stiffness: 100, damping: 15, delay: 2.8 }}
        style={{
          filter: 'blur(0.4px) contrast(1.03) brightness(1.02)',
          imageRendering: 'auto',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
      </motion.img>
      {/* Подложка */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-6 py-4 rounded-xl bg-linear-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-xl" />
      </div>

      {/* { Текст } */}
      <motion.h1
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        animate={{ x: -20, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 2.8 }}
        className="
                        2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl font-extrabold 
                        bg-linear-to-r from-pink-500 to-purple-600
                        bg-clip-text text-transparent mb-[10vh]
                        bg-purple-200 shadow-lg shadow-pink-200 rounded-b-xl backdrop-blur-sm drop-shadow-[0_1.2px_1.2px_rgba(80,0,88,0.8)]"
      >

        Lina AI
        <div className="absolute -bottom-1.25 left-0 right-0 flex flex-wrap justify-center gap-0 pointer-events-none -translate-y-4">
          <img src="sakura_scatter.png" className=" w-full"></img>
        </div>

        <motion.p className="2xl:text-xl xl:text-lg lg:text-sm md:text-[14px] text-[10px] text-pink-200 opacity-70 mt-[1vh] mb-1 tracking-widest text-center"
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 2 }}
        >
          project
        </motion.p>
      </motion.h1>
      <FallingSakura></FallingSakura>
    </motion.div>
  )
}