import { ReactNode } from "react";
import styled from "styled-components";

const MainStyled = styled.main`
  margin-top: 5rem;
  min-height: calc(100vh - 5rem);
`;

interface Props {
  children: ReactNode;
}

const MainContent = ({ children }: Props) => {
  return <MainStyled>{children}</MainStyled>;
};

export default MainContent;
