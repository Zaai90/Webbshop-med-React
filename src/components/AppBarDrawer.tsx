import * as Icon from "@mui/icons-material/";
import { Box, Drawer } from "@mui/material";
import { ReactNode } from "react";
import styled from "styled-components";

const AppBarDrawerStyled = styled(Drawer)<{ anchor: string }>`
  .MuiPaper-root {
    overflow: ${(props) => (props.anchor === "left" ? "visible" : "scroll")};
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
  return (
    <AppBarDrawerStyled anchor={anchor} open={isOpen} onClose={toggleDrawer}>
      {anchor === "left" && <CloseButtonStyled onClick={toggleDrawer} anchor={anchor} />}
      <AppBarBoxStyled width={anchor === "left" ? "250px" : "360px"}>{children}</AppBarBoxStyled>
    </AppBarDrawerStyled>
  );
};

export default AppBarDrawer;
