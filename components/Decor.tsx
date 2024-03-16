import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { ClickContext } from "./ClickContext";

export const Decor = () => {
  const isClicked = useContext(ClickContext);

  return (
    <AnimatePresence mode={"sync"}>
      {!isClicked && (
        <motion.div
          className="relative h-full flex justify-between mt-[100px]"
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.35,
            },
          }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <motion.div
            animate={{ y: 0, x: 0 }}
            exit={{
              y: 153,
              x: -87,
              transition: {
                duration: 0.15,
              },
            }}
            transition={{ type: "spring", stiffness: 80 }}
            className="relative left-[-130px]"
          >
            <Image
              style={{ width: "100%", height: "auto" }}
              src="/circle.svg"
              alt="decor-element-circle"
              width="0"
              height="0"
              priority
            />
          </motion.div>
          <motion.div
            animate={{ x: 0, y: 0 }}
            exit={{
              y: -53,
              x: 87,
              transition: {
                duration: 0.35,
              },
            }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <Image
              src="/RDX.png"
              alt="decor-element-RDX"
              width={532}
              height={120}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
