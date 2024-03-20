'use client'
import Video from "next-video";
import videoLoop from "../videos/part_01 scn_05 web_v2.mp4";

export const MyVideo = () => {

  return (
    <Video
      style={{
        position: "fixed",
        zIndex: "-1",
        height: "100vh",
        width: "100vw",
      }}
      src={videoLoop}
      autoPlay={true}
      loop
      playsInline
      preload="auto"
      controls={false}
    ></Video>
  );
};
