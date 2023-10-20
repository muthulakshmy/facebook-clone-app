import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";

export default function Sidebaroptions({ src, title }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          padding: "1px 15px",
          alignItems: "items",
          mb: 3
          ,'&:hover': {
            backgroundColor:"rgb(211 211 211/31%)",
            
           cursor: 'pointer',
          },
        }}
      >
        <CardMedia component="img" image={src} sx={{ height: 25, width: 25 }} />
        <Typography
          variant="h6"
          marginLeft="20px"
          fontSize="14px"
          fontWeight="bold"
        >
          {title}
        </Typography>
      </Box>
    </div>
  );
}
