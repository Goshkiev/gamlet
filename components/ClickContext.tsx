import { Dispatch, SetStateAction, createContext } from "react";

export const ClickContext = createContext(false);

interface IFirstAnimationContext {
  isAnimationComplete: boolean;
  setAminationComplete: Dispatch<SetStateAction<boolean>>;
}

export const defaultState = {
  isAnimationComplete: false,
  setAminationComplete: () => {},
};

export const FirstAnimationComplete =
  createContext<IFirstAnimationContext>(defaultState);
