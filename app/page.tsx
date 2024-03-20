"use client";
import {
  ClickContext,
  FirstAnimationComplete,
  defaultState,
} from "@/components/ClickContext";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { MyVideo } from "@/components/MyVideo";
import { useState } from "react";

export default function Home() {
  const [isClicked, setClick] = useState(false);
  const [isAnimationComplete, setAminationComplete] = useState(
    defaultState.isAnimationComplete
  );
  return (
    <ClickContext.Provider value={isClicked}>
      <FirstAnimationComplete.Provider
        value={{ isAnimationComplete, setAminationComplete }}
      >
        <main
          // style={{
          //   backgroundImage: 'url("./whale.png")',
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPositionX: "center",
          // }}
          className="flex min-h-screen flex-col items-center h-lvh"
          onClick={() => {
            setClick(true);
          }}
        >
          <Header />
          <Main />
          <MyVideo/>
        </main>
      </FirstAnimationComplete.Provider>
    </ClickContext.Provider>
  );
}
