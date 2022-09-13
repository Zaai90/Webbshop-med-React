import { Container } from "@mui/material";
import { ReactNode } from "react";
import styled from "styled-components";
import theme from "../utils/Theme";

const MainStyled = styled.main`
  margin-top: 2rem;
  min-height: calc(100vh - 2rem);
  margin-bottom: 6rem;

  @media (min-width: ${theme.breakpoints.values.md}px) {
    margin-top: 6rem;
    min-height: calc(100vh - 6rem);
  }
`;

interface Props {
  children: ReactNode;
}

const MainContent = ({ children }: Props) => {
  return (
    <Container maxWidth="lg" fixed>
      <MainStyled>{children}</MainStyled>
    </Container>
  );
};

export default MainContent;
