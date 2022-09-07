import * as Icon from "@mui/icons-material/";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";
import styled from "styled-components";
import theme from "../utils/Theme";

const AppBarDrawerStyled = styled(Drawer)<{ anchor: string; isphonescreen: number }>`
  .MuiPaper-root {
    overflow: visible;
    display: -webkit-box !important;
    ${(props) => props.anchor === "right" && props.isphonescreen === 1 && "width: 100%;"}
    background-color:"#E2DDD8";
  }
`;

const AppBarBoxStyled = styled(Box)`
  margin-top: 64px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
`;

const CloseButtonStyled = styled(Icon.HighlightOffSharp)<{ anchor: string }>`
  position: absolute !important;
  top: 64px !important;
  ${(props) => (props.anchor === "left" ? "right: -75px !important;" : "left: -75px !important;")}
  color: white;
  height: 4rem !important;
  width: 4rem !important;
  cursor: pointer;
`;

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
  children: ReactNode;
  anchor: "left" | "right";
}
const AppBarDrawer = ({ toggleDrawer, isOpen, children, anchor }: Props) => {
  const smallScreen = useMediaQuery(theme.breakpoints.down("tablet"));

  const drawerWidth = (anchor: "left" | "right") => {
    if (anchor === "right") {
      if (smallScreen) {
        return "100%";
      } else {
        return "350px";
      }
    } else {
      return "250px";
    }
  };
  return (
    //TODO fix passing boolean attribute. 1:0 is a workaround. checkout transient props.
    <AppBarDrawerStyled anchor={anchor} open={isOpen} onClose={toggleDrawer} isphonescreen={smallScreen ? 1 : 0}>
      {anchor === "left" && <CloseButtonStyled onClick={toggleDrawer} anchor={anchor} />}

      {anchor === "right" && !smallScreen && <CloseButtonStyled onClick={toggleDrawer} anchor={anchor} />}

      <AppBarBoxStyled width={drawerWidth(anchor)}>{children}</AppBarBoxStyled>
    </AppBarDrawerStyled>
  );
};

export default AppBarDrawer;
