import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { Box, Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
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

const CloseButtonStyled = styled(HighlightOffSharpIcon)`
  position: absolute !important;
  top: 0px !important;
  right: -75px !important;
  color: white;
  height: 4rem !important;
  width: 4rem !important;
  cursor: pointer;
`;

const DrawerLogoStyled = styled.img`
  width: 75%;
`;

const NavLinksStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: normal;

  a {
    border-top: 1px solid #eee;
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    transition: 0.5s ease all;
  }

  a:last-child {
    border-bottom: 1px solid #eee;
  }

  a:hover {
    color: #8d8d8d;
  }
`;

interface Props {
  isOpen: boolean;
  toggleDrawer: () => void;
}
const AppBarDrawer = ({ toggleDrawer, isOpen }: Props) => {
  return (
    <AppBarDrawerStyled anchor="left" open={isOpen} onClose={toggleDrawer}>
      <CloseButtonStyled onClick={toggleDrawer} />
      <AppBarBoxStyled width="250px">
        <DrawerLogoStyled src="https://media-exp1.licdn.com/dms/image/C560BAQH5vu9lhkh9kA/company-logo_200_200/0/1573217460967?e=1669852800&amp;v=beta&amp;t=q47TrUF_2hsgbET6fxlBk0IzqraqQL1WDmKV1JTog14" />
        <NavLinksStyled>
          <NavLink onClick={toggleDrawer} to="">
            Home
          </NavLink>
          <NavLink onClick={toggleDrawer} to="store">
            Store
          </NavLink>
          <NavLink onClick={toggleDrawer} to="checkout">
            Checkout
          </NavLink>
          <NavLink onClick={toggleDrawer} to="admin">
            Admin
          </NavLink>
        </NavLinksStyled>
      </AppBarBoxStyled>
    </AppBarDrawerStyled>
  );
};

export default AppBarDrawer;
