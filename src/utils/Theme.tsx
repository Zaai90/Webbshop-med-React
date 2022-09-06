// Link to default MUI theme  https://mui.com/material-ui/customization/default-theme

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    tablet: true;
  }
}

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "tablet", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      tablet: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "'Poppins','Roboto', 'Helvetica', sans-serif",
  },
});

export default theme;
