import { FirstAnimationComplete } from "@/app/page";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import Link from "next/link";
import { MExoticImage } from "./ExoticImage";

export const Buttons = () => {
  const { isAnimationComplete } = useContext(FirstAnimationComplete);
  return (
    <AnimatePresence mode={"wait"}>
      {isAnimationComplete && (
        <motion.div
          className="relative h-full flex flex-col items-center"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 120 }}
          exit={{
            opacity: 1,
            transition: {
              duration: 5,
            },
          }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <Link href="/hall">
          <motion.div
            whileHover={{ backgroundColor: "rgba(118, 231, 48, 0.55)" }}
            whileTap={{ backgroundColor: "rgba(118, 231, 48, 0.55)" }}
            className="m-[60px] items-center flex justify-center rounded-full w-[1000px] h-[1000px] bg-white/20  bg-transparent/15 text-9xl uppercase tracking-[-.04em] leading-[96px]"
          >
            Место
            <br />в зале
          </motion.div>
          </Link>
          <Link href="/gallery">
            <motion.div
              whileHover={{ backgroundColor: "rgba(118, 231, 48, 0.55)" }}
              whileTap={{ backgroundColor: "rgba(118, 231, 48, 0.55)" }}
              className="m-[60px] items-center flex justify-center rounded-full w-[1000px] h-[1000px] bg-white/20 bg-transparent/15 text-9xl uppercase tracking-[-.04em] leading-[96px]"
            >
              Галерея
            </motion.div>
          </Link>

          <MExoticImage
            className="absolute left-[-400px] bottom-[110px]"
            style={{ width: "433.56px", height: "474" }}
            src="/kvadrat.svg"
            alt="kvadrat"
            width={0}
            height={0}
            priority
            animate={{
              opacity: 1,
              x: 200,
              transition: {
                duration: 0.35,
                delay: 0.45,
              },
            }}
            exit={{
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 80 }}
          />

          <MExoticImage
            className="absolute right-[-400px] bottom-[110px]"
            style={{ width: "877.51px", height: "198" }}
            src="/RDX-w.svg"
            alt="RDX"
            width={0}
            height={0}
            priority
            animate={{
              opacity: 1,
              x: -400,
              transition: {
                duration: 0.55,
                delay: 0.45,
              },
            }}
            exit={{
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 80 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
