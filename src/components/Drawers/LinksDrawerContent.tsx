import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CurrencyChanger from "../CurrencyChanger";
import LogoSvg from "../LogoSvg";

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
  toggleDrawer: () => void;
}

const LinksDrawerContent = ({ toggleDrawer }: Props) => {
  return (
    <>
      <LogoSvg backgroundColor="#f7f6f5" forgroundColor="#383838" small={200} />

      <NavLinksStyled>
        <NavLink onClick={toggleDrawer} to="">
          Home
        </NavLink>
        <NavLink onClick={toggleDrawer} to="store">
          Store
        </NavLink>
        <NavLink onClick={toggleDrawer} to="admin">
          Admin
        </NavLink>
      </NavLinksStyled>
      <Box position={"absolute"} bottom="1rem" width={"90%"}>
        <CurrencyChanger />
      </Box>
    </>
  );
};

export default LinksDrawerContent;
