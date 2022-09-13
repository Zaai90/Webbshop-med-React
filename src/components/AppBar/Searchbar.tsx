import * as Icon from "@mui/icons-material/";
import { Box, Container, Input, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import theme from "../../utils/Theme";
import SearchResult from "./SearchResult";

const Searchbar = () => {
  const [searchString, setSearchString] = useState("");
  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));

  const searchRef = useRef();

  const handleChange = (value: string) => {
    setSearchString(value);
  };

  return (
    <Container maxWidth="lg" fixed>
      <Box sx={{ position: "relative" }} paddingLeft={smScreen ? "100px" : "130px"} alignSelf={["flex-end"]}>
        <Input
          type="text"
          fullWidth
          placeholder="Search..."
          startAdornment={<Icon.Search />}
          onChange={(e) => handleChange(e.target.value)}
          ref={searchRef}
        ></Input>
        <Box sx={{ position: "absolute", width: `calc(100% - ${smScreen ? "100px" : "130px"} )`, background: "gray", zIndex: 1200 }}>
          <SearchResult searchString={searchString} />
        </Box>
      </Box>
    </Container>
  );
};

export default Searchbar;
