import Block from "../ui/Block";
import Button from "../ui/Button";
import { FaDownload } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import MessageBubble from "./MessageBubble";
import AboutSection from "../ui/AboutSection";
import { useTranslation } from "react-i18next";


export default function DownloadSection() {
    const { t } = useTranslation();
    return (<>
        <AboutSection id="download" aria-label="Скачать или использовать Lina AI">{t('download_section.header')}</AboutSection>
        <Block>
            <div className="flex flex-col place-items-center place-content-center gap-10 h-fit   ">
                <MessageBubble
                    x={screen.width <= 768 ? 0 : 40}
                    y={screen.width <= 768 ? 40 : 0}
                    position={`${screen.width <= 768 ? "bottom" : "right"}`}
                >
                    {t("download_section.text")}
                </MessageBubble>
                <div className="flex gap-5 md:gap-10 xl:gap-20 2xl:gap-30">
                    <Button
                        className="sm:scale-110 md:scale-120 lg:scale-130 xl:scale-140 2xl:scale-150"
                        onClick={()=>{
                            alert(t("download_section.notice"))
                        }}
                        icon={<FaDownload></FaDownload>}
                    >
                        {t("download_section.button_text")}
                    </Button>
                    <Button
                        className="sm:scale-110 md:scale-120 lg:scale-130 xl:scale-140 2xl:scale-150"
                        onClick={ () => {window.open('https://github.com/AdonsKali/LinaDesk', '_blank');}}
                        icon={<FaGitAlt></FaGitAlt>}
                    >
                        GitHub
                    </Button>
                </div>
            </div>
            <motion.img
                initial={screen.width >= 768 ? { x: 40, opacity: 0 }: { y: 40, opacity: 0}}
                whileInView={screen.width >= 768 ? { x: 0, opacity: 1 }: { y: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:w-70 xl:w-80 2xl:w-90 md:w-60 place-self-center"
                src="chibis/lina_sit.png" />
        </Block>
    </>)
}