import { Box, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  children: string;
  limit?: number | 100;
  variant?: "body1" | "body2" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2";
}

const ReadMore = ({ children, limit = 100, variant }: Props) => {
  const [isReadMore, setIsReadMore] = useState(children.length > limit);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Typography variant={variant || undefined}>
      {isReadMore ? children.slice(0, limit) : children}
      <Box component="span" sx={{ fontWeight: 600, color: "rgba(0,0,0,0.75)", cursor: "pointer" }} onClick={toggleReadMore}>
        {isReadMore ? "...Read more" : children.length <= limit + 10 ? "" : " Show less"}
      </Box>
    </Typography>
  );
};

export default ReadMore;
