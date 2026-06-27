import { motion } from "framer-motion";
import Wave from "../ui/Wave";
import LinaTextHeader from "./LinaTextHeader";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="relative">
      <NavBar />
      <div id="home" className="relative w-full h-[40vh] lg:h-[60vh] xl:h-screen md:h-[44vh] flex justify-center items-center overflow-hidden bg-pink-100">
        <motion.div
          className="top-full left-0 object-center relative z-10 flex flex-col items-center bg-purple-200"
        >
        </motion.div>
        <motion.video
          className="absolute top-0 left-0 w-full h-full object-cover "
          poster="backgrounds/Lina_web_bg_hight.png" 
          muted={true}
          loop={true}
          playsInline={true}
          autoPlay={true}
          controls={false}
          disablePictureInPicture={true}
          disableRemotePlayback={true}
          aria-label="Lina_AI_bgk_video"
          initial={{ objectPosition: '50% 80%', }}
          animate={{ objectPosition: '50% 20%', }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <source 
            src="backgrounds/Lina_web_bg_hight.mp4" 
            type="video/mp4" 
          />

          <source 
            src="backgrounds/Lina_web_bg_hight.webm" 
            type="video/webm" 
          />
        </motion.video>

        <LinaTextHeader />
        <Wave className="fill-pink-200" w={`${screen.width <= 425 ? "840" : "1440"}`} h={"66"} duration={3.7} />
        <Wave className="fill-pink-50" w={`${screen.width <= 425 ? "840" : "1440"}`} h={"60"} duration={3.3} />
      </div>
    </header>
  );
};