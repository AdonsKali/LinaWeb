import { motion } from "framer-motion";
import { useMemo } from "react";


interface FallingSakuraCoordinates {
  y: number;
  x: number;
  yEnd: number;
}

function GetPosition() {
  const width: number = screen.width;
  const coordinates: FallingSakuraCoordinates = {x:0,y:0,yEnd:0};
  if(width >= 1440){
    coordinates.y = 300;
    coordinates.yEnd = 380;
    coordinates.x = 360;
  }
  else if (width >= 1024){
    coordinates.y = 170;
    coordinates.yEnd = 200;
    coordinates.x = 180;
  }
  else if (width >= 768){
    coordinates.y = 130;
    coordinates.yEnd = 150;
    coordinates.x = 160;

  }
  else if (width <= 425){
    coordinates.y = 120;
    coordinates.yEnd = 140;
    coordinates.x = 120;

  }
  return coordinates;
}

export function FallingSakura({ count = 15 }) {
  const coordinates = GetPosition();
  const flowers = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        x: Math.random() * + coordinates.x,
        rotateStart: Math.random() * 360,
        rotateEnd: 360 + Math.random() * 180,
        delay: Math.random() * 0.7,
        duration: 6 + Math.random() * 1,
        yEnd: coordinates.yEnd + Math.random() * 40,
      })),
    [count]
  );
  return (
    <div className="absolute inset-0 pointer-events-none pb-20">
      {flowers.map((flower, i) => (
        <motion.img
          key={i}
          src="sakura.png"
          className="absolute xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4 w-3 h-3"
          initial={{
            y: coordinates.y,
            x: flower.x,
            opacity: 0,
            rotate: flower.rotateStart,
          }}
          animate={{
            y: flower.yEnd,
            opacity: [0, 1, 0],
            rotate: [flower.rotateStart, flower.rotateEnd],
          }}
          transition={{
            delay: 3 + flower.delay + i * Math.random(), 
            duration: flower.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
}
