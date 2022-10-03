import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    common: {
      white: "#ffffff",
      black: "#000000",
    },
    background: {
      default: "#FCFCFC",
      paper: "#F8F9FA",
    },
    primary: {
      main: "#000000", // Border
    },
    secondary: {
      main: "#D6D5D5", // Border
    },
    info: {
      main: "#888888",
    },
    success: {
      main: "#0FAF1B", // Border
      light: "#707070",
      dark: "#E1242A",
    },
    error: {
      main: "#E1242A",
    },
    text: {
      primary: "#4D4D4D",
      secondary: "7070709F",
      disabled: "#A4A5A5",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "100px",
      lineHeight: "123px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "40px",
      lineHeight: "48px",
    },
    h3: {
      fontSize: "25px",
      lineHeight: "34px",
    },
    h4: {
      fontSize: "20px",
      lineHeight: "24px",
    },
    h5: {
      fontSize: "15px",
      lineHeight: "18px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "12px",
      lineHeight: "15px",
    },
    body1: {
      fontSize: "12px",
      lineHeight: "12px",
    },
    body2: {
      fontSize: "12px",
      lineHeight: "12px",
      fontWeight: 600,
    },
    fontFamily: '"Open Sans"',
  },
});

export default theme;
