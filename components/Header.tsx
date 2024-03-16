import Image from "next/image";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useContext } from "react";
import { MExoticImage } from "./ExoticImage";
import { useMotionValueEvent } from "framer-motion";
import { ClickContext, FirstAnimationComplete } from "./ClickContext";

export default function Header() {
  const { isAnimationComplete, setAminationComplete } = useContext(
    FirstAnimationComplete
  );

  const x = useMotionValue(0);
  const isClicked = useContext(ClickContext);

  useMotionValueEvent(x, "animationComplete", () => {
    setAminationComplete(!isAnimationComplete);
  });

  return (
    <AnimatePresence mode={"wait"}>
      {!isClicked ? (
        <motion.div
          style={{ x }}
          className="px-5 py-24 bg-white/35"
          key={"head"}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{
            opacity: 0,
            y: 100,
            x: 87,
            transition: {
              duration: 0.35,
              delay: 0.3,
            },
          }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <div className="p-7 bg-transparent/15">
            <div className="flex items-end justify-between relative">
              <div className="bg-transparent/15 h-[20px] w-[260px] absolute p-0 right-[118px] top-[-70px]"></div>
              <div className="flex items-start">
                <Image
                   style={{ width: '100%', height: 'auto' }}
                  src="/actions.svg"
                  alt="Vercel Logo"
                  className="mr-[40px]"
                  width={0}
                  height={0}
                  priority
                />
                <Image
                  src="/c4.png"
                  alt="Vercel Logo"
                  width={703.4}
                  height={135.72}
                  priority
                />
              </div>
              <Image
                src="/KRET.svg"
                alt="Vercel Logo"
                className="absolute bottom-[7px] right-[82px]"
                width={372}
                height={70}
                priority
              />
            </div>
            <h1 className="p-[82px] pb-10">
              Посмотрите фото
              <br /> и найдите свое место в зале
            </h1>
          </div>
        </motion.div>
      ) : (
        <div className="p-32 w-full pb-0" key={"logo"}>
          <motion.div
            className="w-100 flex justify-center p-32"
            animate={{
              opacity: 1,
              boxShadow: "0 0 0 1.5px white",
              transition: {
                duration: 0.35,
                delay: 0.45,
              },
            }}
            exit={{
              opacity: 1,
              boxShadow: "0 0 0 1.5px white",
            }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <MExoticImage
              initial={{ opacity: 0, y: -100, x: -87 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                  duration: 0.35,
                  delay: 0.3,
                },
              }}
              transition={{ type: "spring", stiffness: 80 }}
              src="/KRET.svg"
              alt="Vercel Logo"
              width={751}
              height={172}
              priority
            />
          </motion.div>
          <motion.div
            className="w-100 h-[400px]"
            initial={{ maxHeight: 400 }}
            animate={{
              maxHeight: 0,
              transition: {
                duration: 0.45,
              },
            }}
            exit={{
              paddingBottom: 0,
            }}
          ></motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
