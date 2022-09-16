import * as Icon from "@mui/icons-material/";
import { Box, Collapse, Container, Input, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import theme from "../../utils/Theme";
import SearchResult from "./SearchResult";

const SearchContainer = styled(Box)`
  position: absolute;
  bottom: -2.5rem;
  align-self: center;
`;

const StyledInput = styled(Input)`
  border-radius: 5px;
  padding: 0 1rem;
  gap: 0.5rem;
`;

interface Props {
  toggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
  containerRef: React.RefObject<HTMLDivElement>;
  onClickOutside: () => void;
  searchIsActive: boolean;
}

const Searchbar = React.forwardRef(({ toggleSearch, containerRef, onClickOutside, searchIsActive }: Props, ref) => {
  const [searchString, setSearchString] = useState("");

  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchIsActive) {
      const handleClickOutisde = (e: any) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
          onClickOutside && onClickOutside();
        }
      };
      document.addEventListener("click", handleClickOutisde, true);

      return () => {
        document.removeEventListener("click", handleClickOutisde, true);
      };
    }
  }, [onClickOutside]);

  function getHeaderWidth() {
    return containerRef.current?.clientWidth as number;
  }

  const handleChange = (value: string) => {
    setSearchString(value);
  };

  return (
    <SearchContainer ref={ref} sx={{ width: getHeaderWidth }}>
      <Container maxWidth="lg" fixed>
        <Box sx={{ position: "relative" }} paddingLeft={smScreen ? "80px" : "110px"} alignSelf={["flex-end"]}>
          <StyledInput
            // autoFocus
            type="text"
            fullWidth
            autoFocus
            disableUnderline
            placeholder="Search..."
            startAdornment={<Icon.Search />}
            onChange={(e) => handleChange(e.target.value)}
            ref={searchRef}
            sx={{ background: theme.palette.common.white, boxShadow: "2px 6px 8px rgba(0, 0, 0, 0.15), -2px 6px 8px rgba(0, 0, 0, 0.15);" }}
          ></StyledInput>
          <Box
            sx={{
              position: "absolute",
              width: `calc(${getHeaderWidth} - ${smScreen ? "100px" : "130px"})`,
              background: "#f7f7f7",
              zIndex: 1200,
              boxShadow: "2px 6px 8px rgba(0,0,0,.15),-2px 6px 8px rgba(0,0,0,.15)",
            }}
          >
            <Collapse easing={{ enter: "theme.transitions.easing.easeInOut", exit: "theme.transitions.easing.easeInOut" }} in={searchString !== ""}>
              <SearchResult toggleSearch={toggleSearch} searchString={searchString} headerWidth={getHeaderWidth() - (smScreen ? 130 : 160)} />
            </Collapse>
          </Box>
        </Box>
      </Container>
    </SearchContainer>
  );
});

export default Searchbar;
