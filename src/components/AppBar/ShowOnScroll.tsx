import { Slide, useScrollTrigger } from "@mui/material";

interface Props {
  children: React.ReactElement;
  searchBar?: boolean;
}

const ShowOnScroll = ({ children, searchBar }: Props) => {
  let trigger;

  if (searchBar) {
    trigger = !useScrollTrigger();
  } else {
    trigger = useScrollTrigger({
      threshold: 64,
      disableHysteresis: true,
    });
  }

  return (
    <Slide appear={searchBar ? true : false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
};

export default ShowOnScroll;
