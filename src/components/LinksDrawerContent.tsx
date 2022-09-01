import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  toggleDrawer: () => void;
}

const LinksDrawerContent = ({ toggleDrawer }: Props) => {
  return (
    <>
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
    </>
  );
};

export default LinksDrawerContent;
