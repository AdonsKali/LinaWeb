import { motion, type LegacyAnimationControls, type TargetAndTransition, type VariantLabels, type Transition } from "framer-motion";

interface ButtonProps {
    children?: React.ReactNode;
    initial?: TargetAndTransition | VariantLabels | boolean
    animate?: TargetAndTransition | VariantLabels | boolean | LegacyAnimationControls;
    transition?: Transition;
    icon?: any;
    className?: string;
    href?: string;
    onClick?: () => void;   
}

export default function Button({ className, transition, children, initial, animate, icon, onClick, href }: ButtonProps) {
    return (
        <motion.div
            initial={initial}
            animate={animate}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={transition ? transition: {type: "spring", stiffness: 300 }}
            className="w-fit flex"
        >
            <a href={href}>
                <button
                    onClick={onClick}
                    className={className + ` flex px-4 2xl:text-md lg:text-sm md:text-[12px] py-2 rounded-full
                        text-purple-900 font-semibold xl:text-base lg:scale-94 md:scale-90 xl:scale-100 2xl:scale-110 scale-84    
                            transition-all duration-300 
                            hover:bg-gradient-to-r hover:cursor-pointer hover:from-pink-400 hover:to-purple-400 hover:text-white
                            shadow-md`}
                >
                    <motion.div
                    className="flex gap-2 items-center"
                    >
                        {children}
                        <span className="2xl:text-xl lg:text-md">{icon}</span>
                    </motion.div>
                </button>
            </a>
        </motion.div>
    )
}