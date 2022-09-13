// Link to default MUI theme  https://mui.com/material-ui/customization/default-theme

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    tablet: true;
  }
}

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#383838",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          height: 64,
          minHeight: 64,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#f7f6f5",
        },
      },
    },
  },
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
    fontFamily: "'Urbanist','Roboto', 'Helvetica', sans-serif",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#E2DDD8",
    },
    warning: {
      main: "#571608",
    },
    success: {
      main: "#1d6317",
    },
    secondary: {
      main: "#b655c3",
    },
  },
});

export default theme;
