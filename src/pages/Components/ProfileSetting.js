
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";

export default function ProfileSetting({ src, title}) {
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
        <Box sx={{ height: 30, width: 30 }} >
        {src}
        </Box>

        </Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>
        <Typography
          variant="h6"
          marginLeft="20px"
          fontSize="16px"
        >
          {title}
        </Typography>
        </Box>
      </Box>
    </div>
  );
}
