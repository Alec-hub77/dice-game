import { GameHistory } from "@/types/types";
import { useEffect, useState } from "react";

const MAX_HISTORY_LENGTH = 10;
const STORAGE_KEY = "game_history";

export const useGameHistory = () => {
  const [history, setHistory] = useState<GameHistory[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const addToHistory = (result: GameHistory) => {
    setHistory((prev) => {
      const newHistory = [result, ...prev];
      if (newHistory.length > MAX_HISTORY_LENGTH) {
        newHistory.pop();
      }
      return newHistory;
    });
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  return { history, addToHistory };
};
