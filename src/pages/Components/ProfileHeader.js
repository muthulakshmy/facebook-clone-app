import {
    Avatar,
    Box,
    CardMedia,
    ClickAwayListener,
    IconButton,
    Tab,
    Tabs,
    TextField,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import Facebooklogo from "../images/facebook.svg";
  import {
    HomeRounded,
  } from "@mui/icons-material";
import Menu from "../Menu/Menu";
import Messages from "./Messages";
import Notifications from "./Notifications";
import MyProfile from "./Profile";
import SearchPost from "../Search";
  const homeBoxStyle = {
    p: "5px 40px",
    cursor: "pointer",
    color: "gray",
    "&:hover": {
      color: "#2381fa",
      backgroundColor: "whitesmoke",
      borderRadius: 2,
    },
  };
  
  const avatarBoxStyle = { p: "2px 5px", cursor: "pointer" };
  
  const ProfileHeader = ({theme,colorMode }) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [opened, setOpened] = React.useState(false);
    const [anchorEle, setAnchorEle] = React.useState(null);
   const handleClickAwayProfile =()=>{
   
    setAnchorEl(false);
   }
   const handleClickAwayMenu =()=>{
    setOpen(false);
  
   }
   const handleClickAwayNotifications =()=>{
    setAnchorEle(false);
  
   }
   const handleClickAwayMenuMessages =()=>{
    setOpened(false);
  
   }
   const [tabValue, setTabValue] = useState(0);
  
   const handleTabChange = (event, newValue) => {
     setTabValue(newValue);
   };
    return (
  
   
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          position: "fixed",
          top: 0,
          height: 32,
          p: 1,
          zIndex: 1,
          width: 1100,
          boxShadow: "0px 0px 3px #ccc",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CardMedia
            component="img"
            image={Facebooklogo}
            sx={{ height: 35, width: 35, mr: 1, ml: 1 }}
            alt="Group logo"
          />
          <SearchPost />
        </Box>
  
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" ,mr:15}}
        >
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tooltip title="Home">
              <Tab icon={<HomeRounded />} sx={{ ...homeBoxStyle }} />
            </Tooltip>

        
          </Tabs>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
        <ClickAwayListener onClickAway={handleClickAwayMenu}>
  
          <Box sx={avatarBoxStyle}>
            <Menu open={open} setOpen={setOpen} />
          </Box>
      </ClickAwayListener>
      <ClickAwayListener onClickAway={handleClickAwayMenuMessages}>
  
          <Box sx={avatarBoxStyle}>
           
            <Messages open={opened} setOpen={setOpened} />
          </Box>
          </ClickAwayListener>
  
          <ClickAwayListener onClickAway={handleClickAwayNotifications}>
          <Box sx={avatarBoxStyle}>
          
             
              <Notifications open={anchorEle} setOpen={setAnchorEle} />
          
          </Box>
          </ClickAwayListener>
          <ClickAwayListener onClickAway={handleClickAwayProfile}>
  
          <Box sx={avatarBoxStyle}>
            <MyProfile anchorEl={anchorEl} setAnchorEl={setAnchorEl} theme={theme} colorMode={colorMode}  />
          </Box>
          </ClickAwayListener>
        </Box>
  
      </Box>
    );
  };
  
  export default ProfileHeader;
  