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
      <Box component="span" sx={{ fontWeight: 600, color: "rgba(0,0,0,0.75)", cursor: "pointer" }} onClick={toggleReadMore}>
        {isReadMore ? "...Read more" : " Show less"}
      </Box>
    </Typography>
  );
};

export default ReadMore;
