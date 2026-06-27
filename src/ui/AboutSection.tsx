import { motion } from "framer-motion";

interface AboutSection{
    children: React.ReactNode;
    id?: string;
}


export default function AboutSection({children, id}: AboutSection){
    return(
        <div id={id} className="items-center place-self-center p-4">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="xl:max-w-3xl md:max-w-2xl sm:max-w-xs max-w-2xs text-center space-y-4 w-xl "
            
            >
            <h2 className="xl:text-3xl lg:text-2xl text-2xl font-extrabold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow
 
            ">
                {children}
            </h2>
            <hr className="h-px my-2 w-full bg-linear-to-r from-pink-500 via-purple-500 to-pink-400 border-0"/>
            </motion.div>
        </div>
    )
}