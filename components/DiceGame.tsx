"use client";

import { Alert, Box, Button, FormControlLabel, Radio, RadioGroup, Slider, Snackbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Condition } from "@/types/types";
import { useDiceGame } from "@/hooks/useDiceGame";
import { useGameHistoryContext } from "@/context/GameHistoryContext";

const ResultBox = styled(Box)(({ theme }) => ({
  width: 320,
  height: 200,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const GameContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 320,
}));

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(10),
}));

export const DiceGame = () => {
  const { addToHistory } = useGameHistoryContext();
  const {
    selectedNumber,
    setSelectedNumber,
    condition,
    setCondition,
    diceResult,
    rollDice,
    openSnackbar,
    closeSnackbar,
    MIN,
    MAX,
  } = useDiceGame({ addToHistory });

  return (
    <Wrapper>
      <GameContainer>
        <ResultBox>
          <Typography variant={diceResult ? "h1" : "body2"}>
            {diceResult ? diceResult.value : "Click to play the game"}
          </Typography>
        </ResultBox>
        <Box mt={2}>
          <RadioGroup row value={condition} onChange={(e) => setCondition(e.target.value as Condition)}>
            <FormControlLabel value={Condition.Under} control={<Radio />} label="Under" />
            <FormControlLabel value={Condition.Over} control={<Radio />} label="Over" />
          </RadioGroup>
        </Box>
        <Box mt={5} sx={{ width: "100%" }}>
          <Slider
            min={MIN}
            max={MAX}
            value={selectedNumber}
            defaultValue={1}
            step={1}
            valueLabelDisplay="auto"
            onChange={(_, value) => setSelectedNumber(value)}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Typography variant="body2">{MIN}</Typography>
          <Typography variant="body2">{MAX}</Typography>
        </Box>
        <Box mt={5} width="100%">
          <Button sx={{ width: "100%" }} variant="contained" onClick={rollDice}>
            Play
          </Button>
        </Box>
        {diceResult && (
          <Snackbar
            sx={{ width: 800 }}
            open={openSnackbar}
            autoHideDuration={1500}
            onClose={closeSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={closeSnackbar}
              severity={diceResult.isWin ? "success" : "error"}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {diceResult.isWin ? (
                "You won"
              ) : (
                <>
                  You lost
                  <br />
                  number was {diceResult.comparison}
                </>
              )}
            </Alert>
          </Snackbar>
        )}
      </GameContainer>
    </Wrapper>
  );
};
