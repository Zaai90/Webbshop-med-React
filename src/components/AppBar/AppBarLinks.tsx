import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderLinks = styled(Box)`
  display: flex;
  font-size: 18px;
  line-height: normal;
  margin-right: auto;
  margin-left: 2rem;

  a {
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
    transition: 0.5s ease all;
  }

  a:hover {
    color: #8d8d8d;
  }
`;

interface Props {
  pages: string[];
}

const AppBarLinks = ({ pages }: Props) => {
  return (
    <HeaderLinks>
      {pages.map((page) => (
        <NavLink key={page} to={page}>
          <Button size="large">
            <Typography variant="h6" color={(theme) => theme.palette.common.white} textTransform="uppercase">
              {page}
            </Typography>
          </Button>
        </NavLink>
      ))}
    </HeaderLinks>
  );
};

export default AppBarLinks;
