import { motion } from "framer-motion";
import MessageBubble from "./MessageBubble";
import AboutSection from "../ui/AboutSection";
import { useTranslation } from "react-i18next";

type Feature = {
  gif: string;
  title: string;
  text: string;
};

export default function FeaturesList() {
  const { t } = useTranslation(); // <- Переносим хук внутрь компонента

  const features: Feature[] = [
    {
      gif: "chibis/idle.webp",
      title: t('functions_section.influence.header'),
      text: t('functions_section.influence.text')
    },
    {
      gif: "chibis/talk.webp",
      title: t('functions_section.to_learn.header'),
      text: t('functions_section.to_learn.text')
    },
    {
      gif: "chibis/think.webp",
      title: t('functions_section.help.header'),
      text: t('functions_section.help.text')
    },
    {
      gif: "chibis/idle_phone.webp",
      title: t('functions_section.play.header'),
      text: t('functions_section.play.text')
    }
  ];



  return (<>
    <AboutSection id="features" aria-label="Раздел с описанием возможностей Lina AI">{t('functions_section.header')}</AboutSection>
    <div className="grid grid-cols-1 md:grid-cols-1 items-center gap-6 p-6 
                    bg-pink-50 
                    rounded-3xl shadow-[0_10px_40px_rgba(255,182,193,0.4)] "
      style={
        {
          backgroundImage: "url(backgrounds/bg_features.svg)",
          backgroundRepeat: "repeat",
        }
      }
    >
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1, y: 50, scale: 0.95 }}
          whileInView={{ y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`grid grid-cols-1 not-xl:grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6 p-4 md:p-6 xl:max-w-5xl lg:max-w-3xl`}
        >
          <div className={`${i % 2 === 0 ? "place-content-center md:flex hidden" : "md:order-2 place-content-center md:flex hidden"} `}>
            <motion.img
              className="2xl:w-90 xl:w-80 lg:w-70 md:w-60 w-50 bg-white rounded-4xl"
              src={feature.gif}
              alt={`Lina функция ${feature.title}`}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

          </div>

          <motion.div
            className={`${i % 2 === 0 ? "" : "md:order-1"} flex flex-col justify-center text-center `}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 400}}
            whileHover={{scale: 1.1}}
            viewport={{ once: true }}
          >
            <motion.h3
              className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl text-xl w-fit self-center  font-extrabold 
                         bg-linear-to-r bg-purple-800
                         bg-clip-text text-transparent 
                         shadow-lg shadow-purple-200 p-2 rounded-b-xl backdrop-blur-sm drop-shadow-[0_1.0px_1.0px_rgba(80,0,88,0.8)]"
            >
              {feature.title}
            </motion.h3>
            
            <MessageBubble
            className="md:flex hidden"
            position={(i % 2 === 0) ? "left": "right"}
            >
              {feature.text}
            </MessageBubble>
            <MessageBubble
            className="md:hidden flex"
            position="bottom"
            >
              {feature.text}
            </MessageBubble>
          </motion.div>

          <div className={`${i % 2 === 0 ? "place-content-center flex md:hidden bg-white rounded-4xl w-fit place-self-center" : "md:order-2 place-content-center flex md:hidden bg-white rounded-4xl w-fit place-self-center"} `}>
            <motion.img
                className="2xl:w-90 xl:w-80 lg:w-70 md:w-60 w-50"
                src={feature.gif}
                alt={`Lina функция ${feature.title}`}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            />

          </div>
        </motion.div>
      ))}
    </div>
    </>
  );
}