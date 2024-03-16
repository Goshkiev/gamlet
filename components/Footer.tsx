"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import { TouchBtn } from "@/components/TouchBtn";
import { ClickContext, FirstAnimationComplete } from "@/app/page";
import { MExoticImage } from "./ExoticImage";

const decorElementsAnimation = {
  hidden: {
    x: 0,
    opacity: 1,
  },
  visible: (custom: number) => ({
    x: -47,
    opacity: [1, 0.7, 0.3, 0.3, 0.3, 0.3, 0.3, 0],
    transition: { duration: 0.35 },
  }),
};

const textAnimation = {
  hidden: {
    opacity: 1,
  },
  visible: (custom: number) => ({
    opacity: [1, 0.7, 0.3, 0.3, 0.3, 0.3, 0.3, 0],
    transition: { duration: 0.35 },
  }),
};

export const Footer = () => {
  const isClicked = useContext(ClickContext);
  const { isAnimationComplete } = useContext(FirstAnimationComplete);
  return (
    <AnimatePresence mode={"sync"}>
      {!isClicked && (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.35,
            },
          }}
          transition={{ type: "spring", stiffness: 80 }}
          className="relative"
        >
          <div className="absolute w-[2114px] left-[-116px] top-[-918px]">
            <MExoticImage
              animate={{ x: 0 }}
              exit={{ x: -47 }}
              src="/white-elements.svg"
              alt="decor-elements"
              width={2064}
              height={955}
              priority
            />
          </div>
          <div className="absolute left-[180px] top-[-660px] font-w-700 leading-[147px] text-10xl">
            КОСНИТЕСЬ
            <br />
            ЭКРАНА
          </div>
          <div className="absolute right-[-40px] top-[-918px]">
            <TouchBtn />
          </div>
        </motion.div>
      )}
      {/* {isAnimationComplete && (
        <motion.div

          animate={{ opacity: 0 }}
          exit={{
            opacity: 1,
            transition: {
              duration: 0.35,
            },
          }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <MExoticImage
            // animate={{ x: 0 }}
            // exit={{ x: -47 }}
            src="/white-elements.svg"
            alt="decor-elements"
            width={2064}
            height={955}
            priority
          />
        </motion.div>
      )} */}
    </AnimatePresence>
  );
};
