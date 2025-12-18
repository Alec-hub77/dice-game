import { DiceGame } from "@/components/DiceGame";
import { GameHistory } from "@/components/GameHistory";
import { GameHistoryProvider } from "@/context/GameHistoryContext";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <GameHistoryProvider>
      <Container
        component="main"
        sx={{
          width: 600,
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        <DiceGame />
        <GameHistory />
      </Container>
    </GameHistoryProvider>
  );
}
