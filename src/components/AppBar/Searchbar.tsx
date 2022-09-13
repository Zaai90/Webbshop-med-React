import * as Icon from "@mui/icons-material/";
import { Box, Collapse, Container, Input, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import theme from "../../utils/Theme";
import SearchResult from "./SearchResult";

interface Props {
  toggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const Searchbar = ({ toggleSearch }: Props) => {
  const [searchString, setSearchString] = useState("");
  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));

  const searchRef = useRef();

  const handleChange = (value: string) => {
    setSearchString(value);
  };

  function clearSearch() {
    setSearchString("");
  }

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
        <Box
          sx={{
            position: "absolute",
            width: `calc(100% - ${smScreen ? "100px" : "130px"})`,
            background: "#f7f7f7",
            zIndex: 1200,
            boxShadow: "2px 6px 8px rgba(0,0,0,.15),-2px 6px 8px rgba(0,0,0,.15)",
          }}
        >
          <Collapse in={searchString !== ""}>
            <SearchResult toggleSearch={toggleSearch} searchString={searchString} />
          </Collapse>
        </Box>
      </Box>
    </Container>
  );
};

export default Searchbar;
