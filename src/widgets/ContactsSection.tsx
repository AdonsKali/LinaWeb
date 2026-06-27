import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import Block from "../ui/Block";
import Button from "../ui/Button";
import MessageBubble from "./MessageBubble";
import AboutSection from "../ui/AboutSection";
import { useTranslation } from "react-i18next";

export default function ContactBlock() {
  const { t } = useTranslation();
  return (<>
    <AboutSection id="contacts" aria-label="Контактная информация для связи с разработчиком Lina AI">{t('contact_section.header')}</AboutSection>
    <Block
      className="place-items-center"
    >
      <motion.img
        src="chibis/lina_sit_on_pillow.png"
        alt="Lina contact"
        className="lg:w-70 xl:w-80 2xl:w-90 md:w-60 rounded-3xl"
        initial={screen.width >= 768 ? { x: -40, opacity: 0 }: { y: -60, opacity: 0}}
        whileInView={screen.width >= 768 ? { x: 0, opacity: 1 }: { y: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{ duration: 0.6, delay: 0.1 }}
      />
      <motion.div
        className="flex flex-col gap-4 text-center md:text-left">
        <MessageBubble
          x={screen.width <= 768 ? 0 : -40}
          y={screen.width <= 768 ? -40 : 0}
          position={`${screen.width <= 768 ? "top" : "left"}`}
        >
          {t("contact_section.text")}
        </MessageBubble>
        {/* Контактные кнопки */}
        <div className="flex place-content-center md:gap-8 gap-1 mt-4 md:mt-6 w-full">
          <Button
            href="mailto:derevianckin@mail.ru"
            className="bg-purple-100"
          >
            <Mail className="w-5 h-5 text-pink-500" />
            AdonsKali
          </Button>
          
          <Button
            href="https://t.me/chibiLinaAI"
            className="bg-purple-100"
          >
            <Send className="w-8 h-5 text-purple-500" />
            LinaAI
          </Button>
        </div>
      </motion.div>

    </Block>
  </>);
}
