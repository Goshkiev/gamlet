'use client'
import Video from "next-video";
import videoLoop from "../videos/part_01 scn_05 web_v2.mp4";
import { useEffect, useState } from "react";

export const MyVideo = () => {
  const [count, setCount] = useState(0);
  // hack
  useEffect(() => {
    setCount(1)
  }, [count, setCount]);

  return (
    <Video
      style={{
        position: "fixed",
        zIndex: "-1",
        height: "100vh",
        width: "100vw",
      }}
      src={videoLoop}
      autoPlay={count === 1}
      loop
      playsInline
      preload="auto"
      controls={false}
    ></Video>
  );
};
