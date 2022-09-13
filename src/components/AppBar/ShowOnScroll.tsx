import { Slide, useScrollTrigger } from "@mui/material";
import styled from "styled-components";

interface Props {
  children: React.ReactElement;
  // searchBar?: boolean;
}

const SlideStyled = styled(Slide)`
  & .MuiBox-root {
    flex: 1;
  }
`;

const ShowOnScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger({
    threshold: 64,
    disableHysteresis: true,
  });

  return (
    <SlideStyled appear={false} direction="down" in={trigger}>
      {children}
    </SlideStyled>
  );
};

export default ShowOnScroll;
