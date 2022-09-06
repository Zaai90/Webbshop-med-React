import { useMediaQuery } from "@mui/material";
import { theme } from "./Theme";

export const xsScreen = useMediaQuery(theme.breakpoints.down("sm"));

export const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));

export const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));

export const mdScreen = useMediaQuery(theme.breakpoints.down("lg"));

export const lgScreen = useMediaQuery(theme.breakpoints.down("xl"));

export const xlScreen = useMediaQuery(theme.breakpoints.up("xl"));
