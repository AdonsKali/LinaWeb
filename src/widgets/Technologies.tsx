import { motion } from "framer-motion";
import AboutSection from "../ui/AboutSection";
import { useTranslation } from "react-i18next";

export default function TechnologiesBlock() {
    const { t } = useTranslation();
    const technologies = [
        {
            name: "Python",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            color: "from-blue-400 to-cyan-300",
            delay: 0.1
        },
        {
            name: "Llama",
            icon: "data:image/png;base64,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",
            color: "from-orange-400 to-red-300",
            delay: 0.2
        },
        {
            name: "PySide",
            icon: "https://habrastorage.org/r/w1560/getpro/habr/upload_files/605/86f/e61/60586fe619c53f4136e83be81963c92e.png",
            color: "from-green-400 to-emerald-300",
            delay: 0.3
        },
        {
            name: "FastAPI",
            icon: "data:image/jpeg;base64,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",
            color: "from-teal-400 to-green-300",
            delay: 0.4
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };


    return (<>
        <AboutSection id="technologies" aria-label="Используемые технологии в разработке Lina AI">{t('technology_section.header')}</AboutSection>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
            }}
            viewport={{ 
                once: true, 
                amount: 0.3,
                margin: "-50px"
            }}
            style={{
                backgroundImage: "url(/angle_stuff.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="xl:max-w-5xl lg:max-w-3xl md:max-w-2xl max-w-xs mx-auto p-8 bg-linear-to-r from-pink-100 via-purple-200 to-pink-100 
            rounded-3xl shadow-[0_10px_40px_rgba(255,182,193,0.4)] backdrop-blur-sm "
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12"
            >
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                     
                        whileHover="hover"
                        custom={index}
                        className="group relative"
                    >
                        {/* Фоновая подсветка при наведении */}
                        <motion.div
                            className={`absolute inset-0 bg-linear-to-br ${tech.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                        />
                        
                        {/* Основная карточка */}
                        <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-6 xl:p-8 lg:p-4 md:p-2 shadow-lg 
                                     border border-white/40 group-hover:border-white/60 
                                     transition-all duration-300 hover:shadow-2xl hover:shadow-pink-200/50">
                            
                            {/* Декоративный элемент */}
                            <motion.div
                                className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-linear-to-r from-pink-400 to-purple-400"
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: tech.delay * 2
                                }}
                            />
                            
                            {/* Иконка */}
                            <div className="relative">
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent rounded-3xl"
                                    animate={{
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: tech.delay
                                    }}
                                />
                                <motion.img
                            
                                    className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-3xl object-cover p-2 
                                             bg-linear-to-br from-white to-gray-50 shadow-inner"
                                    src={tech.icon}
                                    alt={tech.name}
                                    whileHover="hover"
                                />
                            </div>
                            
                            {/* Название технологии */}
                            <motion.h3 
                                className="mt-6 text-center xl:text-2xl md:text-md lg:text-lg font-semibold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent
                                       group-hover:from-purple-600 group-hover:to-pink-500 transition-all duration-300"
                                animate={{
                                    textShadow: [
                                        "0 0 0px rgba(147, 51, 234, 0)",
                                        "0 0 10px rgba(147, 51, 234, 0.3)",
                                        "0 0 0px rgba(147, 51, 234, 0)"
                                    ]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: tech.delay
                                }}
                            >
                                {tech.name}
                            </motion.h3>
                            
                           
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        
        </motion.div>
    </>);
}