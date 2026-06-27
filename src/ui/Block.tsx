import { motion } from "framer-motion";

interface BlockItems {
    children: React.ReactNode;
    className?: string
}

export default function Block({ children, className }: BlockItems) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            style={{
                backgroundImage: "url(/angle_stuff.svg)",
                backgroundRepeat: "no-repeat",
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`2xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-2xl max-w-xs  mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 p-6
                    bg-gradient-to-r from-pink-100 via-purple-200 to-pink-100 
                    rounded-3xl shadow-[0_10px_40px_rgba(255,182,193,0.4)] backdrop-blur-sm ` + className} 
        >
            {children}
        </motion.div>
    )
}