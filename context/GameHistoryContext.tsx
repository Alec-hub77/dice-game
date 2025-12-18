"use client";

import { createContext, ReactNode, useContext } from "react";
import { useGameHistory } from "../hooks/useGameHistory";

const GameHistoryContext = createContext<ReturnType<typeof useGameHistory> | null>(null);

export const GameHistoryProvider = ({ children }: { children: ReactNode }) => {
  const historyHook = useGameHistory();
  return <GameHistoryContext.Provider value={historyHook}>{children}</GameHistoryContext.Provider>;
};

export const useGameHistoryContext = () => {
  const ctx = useContext(GameHistoryContext);
  if (!ctx) throw new Error("useGameHistoryContext must be used within GameHistoryProvider");
  return ctx;
};
