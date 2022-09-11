import { Box, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  children: string;
}

const ReadMore = ({ children }: Props) => {
  const [isReadMore, setIsReadMore] = useState(children.length > 100);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Typography>
      {isReadMore ? children.slice(0, 100) : children}
      <Box component="span" onClick={toggleReadMore}>
        {isReadMore ? "...läs mer" : " visa mindre"}
      </Box>
    </Typography>
  );
};

export default ReadMore;
