import { Container } from "@mui/material";
import { ReactNode } from "react";
import styled from "styled-components";

const MainStyled = styled.main`
  margin-top: 6rem;
  min-height: calc(100vh - 6rem);
  margin-bottom: 6rem;
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
