import * as Icon from "@mui/icons-material/";
import { Box, Container, Input, useMediaQuery } from "@mui/material";
import theme from "../../utils/Theme";

const Searchbar = () => {
  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  return (
    <Container maxWidth="lg" fixed>
      <Box paddingLeft={smScreen ? "100px" : "130px"} flexGrow="grow" alignSelf={["flex-end"]}>
        <Input type="text" fullWidth placeholder="Search..." startAdornment={<Icon.Search />}></Input>
      </Box>
    </Container>
  );
};

export default Searchbar;
