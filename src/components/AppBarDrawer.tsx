import * as Icon from "@mui/icons-material/";
import { Box, Drawer } from "@mui/material";
import { ReactNode } from "react";
import styled from "styled-components";

const AppBarDrawerStyled = styled(Drawer)`
  .MuiPaper-root {
    overflow: visible;
  }
`;

const AppBarBoxStyled = styled(Box)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
`;

const CloseButtonStyled = styled(Icon.HighlightOffSharp)`
  position: absolute !important;
  top: 0px !important;
  right: -75px !important;
  color: white;
  height: 4rem !important;
  width: 4rem !important;
  cursor: pointer;
`;

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
  children: ReactNode;
  anchor: "left" | "right" | "top" | "bottom";
}
const AppBarDrawer = ({ toggleDrawer, isOpen, children, anchor }: Props) => {
  return (
    <AppBarDrawerStyled anchor={anchor} open={isOpen} onClose={toggleDrawer}>
      <CloseButtonStyled onClick={toggleDrawer} />
      <AppBarBoxStyled width={anchor === "left" ? "250px" : "100%"}>{children}</AppBarBoxStyled>
    </AppBarDrawerStyled>
  );
};

export default AppBarDrawer;
