import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useData } from "../DataContext";

export default function Sidebaroptions({ src, title, }) {
  const{tabValue, setTabValue, handleTabChange,}=useData()
  const navigate=useNavigate()
  function handleClick() {
    if (title === "Friends") {
      // navigate("/friendList")
      setTabValue(1);

    } else if (title === "Groups") {
      setTabValue(2);
    } else if (title === "Marketplace") {
      setTabValue(3);
    }else if(title==="Feeds"){
      navigate("/feed")
    }else if(title==="Video"){
      navigate("/feed")
    }else if(title==="Memories"){
      navigate("/feed")
    }
    else if(title==="Events"){
      navigate("/feed")
    }else if(title==="Saved"){
      navigate("/saved")
    }
  }
  return (
    <div>
      <Box
        onClick={handleClick}
        sx={{
          display: "flex",
          padding: "1px 15px",
          alignItems: "items",
          mb: 3,
          "&:hover": {
            backgroundColor: "rgb(211 211 211/31%)",

            cursor: "pointer",
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
