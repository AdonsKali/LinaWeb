import { motion } from "framer-motion";


interface WavesInterface{
  h: string;
  w?: string;
  className?: string;
  duration?: number;
}

export default function Wave({ w, h, className, duration}: WavesInterface) {
  return (
    <motion.svg
      className={"absolute bottom-0 left-0 w-full mask-alpha mask-t-from-pink-100 mask-t-from-35% mask-t-to-transparent"}
      viewBox={"0 0 "+ w + " " + h}
      initial={{ y: 10 }}
      animate={{ y: [ 10, 0, 10 ] }}
      transition={{ repeat: Infinity, duration: duration ? duration : 6 , ease: "easeInOut" }}
      preserveAspectRatio="none"
    >
      <path
        d="M 0 47.474 L 48 42.549 C 96 36.527 194.995 -0.337 288 27.721 C 382.47 56.223 499.967 -4.888 575.002 29.979 C 650.037 64.846 771.113 -4.82 861.005 21.211 C 950.897 47.241 1063.87 -10.721 1149.01 24.709 C 1240.92 62.961 1358.826 -13.365 1436.629 28.505 C 1442.206 31.506 1440 47.474 1440 47.474 L 1440 83.96 L 0 83.96 L 0 47.474 Z"
        className={className}
      />
    </motion.svg>
  );
}
