import { motion } from "framer-motion";
import Button from "../ui/Button";
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import { useEffect, useState } from "react";


export default function ArrowUp(){
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const section = document.querySelector("#home");
      if (!section) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        {
          threshold: 0.1, 
          rootMargin: '-100px'
        }
      );
      observer.observe(section);
      return () => {
        observer.unobserve(section);
      };
    }, []);
    return(
      <>
      {isVisible &&(
        <motion.div
        className="text-center fixed flex items-center lg:h-[6%] lg:w-[6%] h-[10%] w-[10%] top-13/15 right-1/20 bottom-[50%] justify-center z-55 drop-shadow-[0_0.0px_10.0px_rgba(252,157,243)]"
        >
            <Button 
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{type: "spring", stiffness: 300, duration: 2 }}
            className={`relative 2xl:scale-150 lg:scale-130 bg-pink-200

            `}
            icon={<HiOutlineChevronDoubleUp></HiOutlineChevronDoubleUp>}
            onClick={() => {
                const section = document.querySelector("#home");
                if (section) {
                  section.scrollIntoView({behavior: "smooth", block: "start"})
                }
              }}
            >     
            </Button>
        </motion.div>)}
        </>
    )
}