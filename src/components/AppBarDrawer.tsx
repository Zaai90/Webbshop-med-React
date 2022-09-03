import * as Icon from "@mui/icons-material/";
import { Box, Drawer } from "@mui/material";
import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const AppBarDrawerStyled = styled(Drawer)<{ anchor: string; isPhoneScreen: boolean }>`
  .MuiPaper-root {
    overflow: ${(props) => (props.anchor === "left" ? "visible" : "scroll")};
    ${(props) => props.anchor === "right" && props.isPhoneScreen && "width: 100%;"}
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
  const isPhoneScreen = useMediaQuery({ query: "(max-width:768px)" });

  const drawerWidth = (anchor: "left" | "right") => {
    if (anchor === "right") {
      if (isPhoneScreen) {
        return "100%";
      } else {
        return "350px";
      }
    } else {
      return "250px";
    }
  };
  return (
    <AppBarDrawerStyled anchor={anchor} open={isOpen} onClose={toggleDrawer} isPhoneScreen={isPhoneScreen}>
      {anchor === "left" && <CloseButtonStyled onClick={toggleDrawer} anchor={anchor} />}
      <AppBarBoxStyled width={drawerWidth(anchor)}>{children}</AppBarBoxStyled>
    </AppBarDrawerStyled>
  );
};

export default AppBarDrawer;
