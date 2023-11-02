import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MenuOptions({ src, title,description,setTabValue }) {
  const navigate=useNavigate()
  function handleClick() {
    if (title === "Friends") {
      navigate("/friendList")
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
        sx={{
          display: "flex",
          padding: "1px 15px",
          alignItems: "items",
          mb: 1
          ,'&:hover': {
            backgroundColor:"rgb(211 211 211/31%)",
            
           cursor: 'pointer',
          },
        }}
        onClick={handleClick}
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
        <Typography variant="h6" sx={{fontSize:12}}  marginLeft="20px">{description}</Typography>
        </Box>
      </Box>
    </div>
  );
}
