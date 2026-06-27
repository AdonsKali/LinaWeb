import Block from "../ui/Block";
import { motion } from "framer-motion";
import MessageBubble from "./MessageBubble";
import AboutSection from "../ui/AboutSection";
import { useTranslation } from "react-i18next";

export default function LinaAbout() {
    const { t } = useTranslation();
    return (<>
        <AboutSection id="about" aria-label="Раздел о персональном AI-ассистенте Lina">{t('about_section.header')}</AboutSection>
        <Block>
            {/* Левая часть с картинкой */}
            <div className="flex justify-center">
                <motion.img
                    src="chibis/lina_shy.png"
                    alt="Lina - персональный AI-ассистент в образе милого аниме-чибика"
                    className="2xl:w-90 xl:w-80 lg:w-70 md:w-60 w-50 drop-shadow-xl"
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    loading="eager"
                    width="400"
                    height="400"
                />
            </div>

            {/* Правая часть с текстом */}
            <motion.div
                className="flex flex-col justify-center text-center"
                aria-label="Описание функций Lina AI"
            >
                <MessageBubble
                    x={-40}
                    position={`${screen.width <= 766 ? "top" : "left"}`}
                >
                    {t("about_section.text")}
                </MessageBubble>
            </motion.div>
        </Block>
    </>);
}