import { DiceGame } from "@/components/DiceGame";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box component={"main"} sx={{ display: "flex", justifyContent: "center" }}>
      <DiceGame />
    </Box>
  );
}
