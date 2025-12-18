"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    primary: {
      main: "#9C27B0",
    },
    secondary: {
      main: "#F5F5F5",
    },
    background: {
      paper: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
