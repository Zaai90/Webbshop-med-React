import { Box, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  children: string;
  limit?: number;
}

const ReadMore = ({ children, limit = 100 }: Props) => {
  const [isReadMore, setIsReadMore] = useState(children.length > limit);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Typography>
      {isReadMore ? children.slice(0, limit) : children}
      <Box component="span" onClick={toggleReadMore}>
        {isReadMore ? "...läs mer" : " visa mindre"}
      </Box>
    </Typography>
  );
};

export default ReadMore;
