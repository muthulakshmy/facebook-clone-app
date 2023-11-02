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
import Facebooklogo from "./images/facebook.svg";
import MessageIcon from "./images/chat.png";
import NotificationIcon from "./images/bell-ring.png";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import {
  Search,
  HomeRounded,
  PeopleRounded,
  Group,
  StoreOutlined,
} from "@mui/icons-material";
import Menu from "./Menu/Menu";
import SearchPost from "./Search";
import MyProfile from "./Components/Profile";
import Messages from "./Components/Messages";
import Notifications from "./Components/Notifications";
import { useData } from "./DataContext";
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

const Header = ({ theme,colorMode }) => {
  const {tabValue, setTabValue, handleTabChange}=useData()
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
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tooltip title="Home">
            <Tab icon={<HomeRounded />} sx={{ ...homeBoxStyle }} />
          </Tooltip>
          <Tooltip title="Friends">
            <Tab icon={<PeopleRounded />} sx={homeBoxStyle} />
          </Tooltip>
          <Tooltip title="Groups">
            <Tab icon={<Diversity3OutlinedIcon />} sx={homeBoxStyle} />
          </Tooltip>
          <Tooltip title="Marketplace">
            <Tab icon={<StoreOutlined />} sx={homeBoxStyle} />
          </Tooltip>
        </Tabs>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
      <ClickAwayListener onClickAway={handleClickAwayMenu}>

        <Box sx={avatarBoxStyle}>
          <Menu open={open} setOpen={setOpen} setTabValue={setTabValue} />
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

export default Header;
