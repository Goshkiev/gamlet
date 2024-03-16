
import { motion } from "framer-motion";
import { ImageProps } from "next/image";
import { forwardRef } from "react";
import Image from "next/image"

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    return <Image  {...props} ref={ref} />;
  }
);

export const MExoticImage = motion(ExoticImage)