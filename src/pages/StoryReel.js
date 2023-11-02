import { Avatar, Box,Typography } from "@mui/material";
import React, { useState } from "react";

const StoryReel = () => {
const[data,setData]=useState("")
  const reelStyle = {
    position: "relative",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100px",
    height: "170px",
    boxShadow: "0px 5px 17px -7px rgb(0,0,0,0.75)",
    m: "0px 5px",
    transition: "all 0.2 linear 0s",
    cursor: "pointer",
    borderRadius: "10px",'&:hover': {
        transform:"scale(1.07)"
      },
  };

  const fontStyle={
    position:"absolute",
    bottom:"15px",
    left:"20px",
    color:"whitesmoke",
    fontSize:12,
    fontWeight:"normal",
  }
  const avatarStyle={m:"10px",border:"2px solid  #0088cc",height:"30px",width:"30px"}
  function handleData(e){
    console.log("edfr")
    console.log(e.target,"edata")
    setData(e.target)
    console.log("setdata",data)
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Box onClick={handleData}  sx={{backgroundImage: `url('https://w0.peakpx.com/wallpaper/591/1003/HD-wallpaper-romantic-place-love-place-romantic-thumbnail.jpg')`,...reelStyle}} >
        
      <Avatar sx={avatarStyle} src={'https://i.pinimg.com/736x/ca/8f/ca/ca8fca670f3cb98f7ae207a142024cbb.jpg'} />
        
        <Typography  onClick={handleData} sx={fontStyle}>Ava Alex</Typography>
      </Box>
      <Box
      sx={{backgroundImage: `url('https://i.pinimg.com/originals/0d/91/76/0d9176f10b71f4729d72a8841e1a7a41.jpg')`,...reelStyle}}
      >
        <Avatar sx={avatarStyle} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqn9zWUXJNvhg0Es1kwedoqiLPMgt2vKkPUw&usqp=CAU'} />
        <Typography sx={fontStyle}>Syed Taha</Typography>
      </Box>
      <Box
        sx={{backgroundImage: `url('https://w0.peakpx.com/wallpaper/102/79/HD-wallpaper-beautiful-place-karen-story-lighthouse.jpg')`,...reelStyle}}
      >
        <Avatar sx={avatarStyle} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJQAvFmI1k6ACSdSF5CljQjbTkmXNlJ9wGg&usqp=CAU'} />
        <Typography sx={fontStyle}>Josh Chen</Typography>
      </Box>
      <Box
       sx={{backgroundImage: `url('https://i.pinimg.com/originals/10/48/93/104893acf8f3a8b047121d29dac2b1a1.png')`,...reelStyle}}
      >
        <Avatar sx={avatarStyle} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCBTg6d4MFvRfq7Iw1hH1hVP2_Q_D7LirKme0O6LxQ4szeXwa'} />
        <Typography sx={fontStyle}>Hazel Rithvesh</Typography>
      </Box>
      <Box
      sx={{backgroundImage: `url('https://e0.pxfuel.com/wallpapers/197/688/desktop-wallpaper-best-places-to-visit-in-london-united-kingdom-uk-aesthetic.jpg')`,...reelStyle}}
      >
        <Avatar sx={avatarStyle} src={'https://i.pinimg.com/236x/78/a0/69/78a069ecabc0bf6b0e00d947a49025a9.jpg'} />
        <Typography sx={fontStyle}>Rhys Larsen</Typography>
      </Box>
    </Box>
  );
};

export default StoryReel;
