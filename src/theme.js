import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
  shadows: [
    "none",
    "0px 2px 2px rgba(0, 0, 0, 0.01)",
    "0px 3px 4px rgba(0, 0, 0, 0.02)",
    "0px 4px 5px rgba(0, 0, 0, 0.03)",
    "0px 6px 10px rgba(0, 0, 0, 0.04)",
    "0px 8px 10px rgba(0, 0, 0, 0.05)",
    "0px 12px 15px rgba(0, 0, 0, 0.06)",
    "0px 16px 20px rgba(0, 0, 0, 0.07)",
    "0px 24px 30px rgba(0, 0, 0, 0.08)",
  ],
});

export default theme;
