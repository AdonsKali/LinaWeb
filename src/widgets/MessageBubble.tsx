import { motion } from "framer-motion";

interface MessageBubbleInterface {
  children?: React.ReactNode;
  className?: string;
  position?: string;
  x?: number;
  y?: number;
}

export default function MessageBubble({ children, position, x, y, className }: MessageBubbleInterface) {
  const baseClasses =
    `mt-4 relative flex text-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-sm text-sm leading-relaxed text-purple-950/90 
                  bg-white px-4 py-3 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.1)] ` + className;
  let tailClasses = "absolute w-0 h-0 border-transparent";

  switch (position) {
    case "top":
      tailClasses +=
        " left-1/2 -translate-x-1/2 top-[-20px] border-l-[20px] border-r-[20px] border-b-[20px] border-b-white";
      break;

    case "bottom":
      tailClasses +=
        " left-1/2 -translate-x-1/2 bottom-[-20px] border-l-[20px] border-r-[20px] border-t-[20px] border-t-white";
      break;

    case "left":
      tailClasses +=
        " top-1/2 -translate-y-1/2 left-[-20px] border-t-[20px] border-b-[20px] border-r-[20px] border-r-white";
      break;

    case "right":
      tailClasses +=
        " top-1/2 -translate-y-1/2 right-[-20px] border-t-[20px] border-b-[20px] border-l-[20px] border-l-white";
      break;

    default:
      break;
  }

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, x: x, y: y  }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 400 }}
      viewport={{ once: true }}
    >
      {children}
      <div className={tailClasses}></div>
    </motion.div>
  );
}