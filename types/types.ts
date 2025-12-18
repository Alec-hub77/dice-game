export enum Condition {
  Under = "under",
  Over = "over",
}

export interface GameHistory {
  diceResult: number;
  condition: Condition;
  timestamp: Date;
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
