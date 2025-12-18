"use client";

import { useGameHistoryContext } from "@/context/GameHistoryContext";
import { formatDate } from "@/utils/utils";
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MessageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: theme.spacing(10),
}));

export const GameHistory = () => {
  const { history, isLoading } = useGameHistoryContext();

  if (isLoading) {
    return (
      <MessageWrapper>
        <Typography>Loading...</Typography>
      </MessageWrapper>
    );
  }

  if (!history.length) {
    return (
      <MessageWrapper>
        <Typography>No game results yet</Typography>
      </MessageWrapper>
    );
  }
  return (
    <Box pt={10}>
      <Table sx={{ minWidth: 600 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Guess</TableCell>
            <TableCell align="left">Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((h) => (
            <TableRow key={h.timestamp} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="left">{formatDate(new Date(h.timestamp))}</TableCell>
              <TableCell align="left">{`${h.condition} ${h.selectedNumber}`}</TableCell>
              <TableCell align="left">
                <Typography color={h.isWin ? "success" : "error"} variant="body2">
                  {h.diceResult}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
