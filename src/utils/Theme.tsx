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
          backgroundColor: "#E2DDD8",
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
    caption: {
      lineHeight: 1,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#e0c298",
    },
    warning: {
      main: "#de988a",
    },
  },
});

export default theme;
