
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";

export default function MenuCreate({ src, title,description }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          padding: "1px 15px",
          alignItems: "items",
          mb: 2
          ,'&:hover': {
            backgroundColor:"rgb(211 211 211/31%)",
            
           cursor: 'pointer',
          },
        }}
      >
      

        <Box>
        <CardMedia component="img" image={src} sx={{ height: 25, width: 25 }} />

        </Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>
        <Typography
          variant="h6"
          marginLeft="20px"
          fontSize="12px"
          fontWeight="bold"
        >
          {title}
        </Typography>
        </Box>
      </Box>
    </div>
  );
}
