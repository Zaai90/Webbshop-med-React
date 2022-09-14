import { useMediaQuery } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";
import theme from "./Theme";

interface Props {
    children: React.ReactNode
}

const OurSnackbarProvider = ({children}: Props) => {
  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));

  return (
    <SnackbarProvider
      style={{ background: theme.palette.common.white, color: theme.palette.common.black }}
      autoHideDuration={smScreen ? 3000 : 2000}
      maxSnack={smScreen ? 1 : 2}
      anchorOrigin={{
        vertical: smScreen ? "bottom" : "top",
        horizontal: smScreen ? "center" : "right",
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default OurSnackbarProvider;
