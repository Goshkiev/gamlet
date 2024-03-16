"use client";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export const ClickContext = createContext(false);

interface IFirstAnimationContext {
  isAnimationComplete: boolean;
  setAminationComplete: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  isAnimationComplete: false,
  setAminationComplete: () => {},
};

export const FirstAnimationComplete =
  createContext<IFirstAnimationContext>(defaultState);

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
          style={{
            backgroundImage: 'url("./whale.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
          }}
          className="flex min-h-screen flex-col items-center h-lvh"
          onClick={() => {
            setClick(true);
          }}
        >
          <Header />
          <Main />
        </main>
      </FirstAnimationComplete.Provider>
    </ClickContext.Provider>
  );
}
