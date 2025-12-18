export enum Condition {
  Under = "Under",
  Over = "Over",
}

export interface GameHistory {
  diceResult: number;
  condition: Condition;
  timestamp: string;
  isWin: boolean;
  selectedNumber: number;
}

export enum Comparison {
  Higher = "higher",
  Lower = "lower",
  Equal = "equal",
}

export interface GameResult {
  value: number;
  isWin: boolean;
  comparison: Comparison | null;
}
