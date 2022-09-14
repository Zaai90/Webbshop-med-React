import { Box, Container } from "@mui/material";
import MainContent from "../MainContent";
import disappointed from "../Review/img/disappointed.webp";

const EmptyCart = () => {
  return (
    <MainContent>
      <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Box>Cart is empty.</Box>
        <Box>
          <img draggable="false" width={32} src={disappointed} />
        </Box>
      </Box>
    </MainContent>
    // TODO: Add more content, suggestive things the user can buy blabla
  );
};

export default EmptyCart;
