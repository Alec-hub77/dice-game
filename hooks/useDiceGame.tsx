import { Comparison, Condition, GameHistory, GameResult } from "@/types/types";
import { useState } from "react";

const MIN = 1;
const MAX = 100;

interface Props {
  addToHistory: (history: GameHistory) => void;
}

export const useDiceGame = ({ addToHistory }: Props) => {
  const [condition, setCondition] = useState<Condition>(Condition.Under);
  const [selectedNumber, setSelectedNumber] = useState<number>(MIN);
  const [diceResult, setDiceResult] = useState<GameResult | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const rollDice = () => {
    const value = Math.floor(Math.random() * 100) + 1;
    let isWin = false;
    let comparison: Comparison = Comparison.Equal;

    if (value > selectedNumber) {
      comparison = Comparison.Higher;
      isWin = condition === Condition.Over;
    } else if (value < selectedNumber) {
      comparison = Comparison.Lower;
      isWin = condition === Condition.Under;
    } else {
      isWin = false;
    }
    const result = { value, isWin, comparison };
    setDiceResult(result);
    setOpenSnackbar(true);
    addToHistory({
      condition,
      diceResult: result.value,
      isWin,
      selectedNumber,
      timestamp: new Date().toISOString(),
    });
  };

  const closeSnackbar = () => setOpenSnackbar(false);

  return {
    condition,
    setCondition,
    selectedNumber,
    setSelectedNumber,
    diceResult,
    rollDice,
    openSnackbar,
    closeSnackbar,
    MIN,
    MAX,
  };
};
