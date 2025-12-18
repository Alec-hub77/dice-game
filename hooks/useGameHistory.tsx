import { GameHistory } from "@/types/types";
import { useEffect, useState } from "react";

const MAX_HISTORY_LENGTH = 10;
const STORAGE_KEY = "game_history";

export const useGameHistory = () => {
  const [history, setHistory] = useState<GameHistory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setHistory(JSON.parse(stored));
        }
      } catch (error) {
        console.error("Failed to load history:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

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
    if (!isLoading && typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
      } catch (error) {
        console.error("Failed to save history:", error);
      }
    }
  }, [history, isLoading]);

  return { history, addToHistory, isLoading };
};
