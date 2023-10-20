import {
  Avatar,
  Box,
  CardMedia,
  IconButton,Tab,Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Facebooklogo from "./images/facebook.svg";
import Menuicon from "./images/dots-menu.png";
import MessageIcon from "./images/chat.png";
import NotificationIcon from "./images/bell-ring.png";
import AvatarProfile from './images/avatarprofile.jpg'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import { Search, HomeRounded, PeopleRounded, Group, StoreOutlined } from "@mui/icons-material";
import { AutoComplete } from "antd";

const homeBoxStyle ={p:"5px 40px",cursor:"pointer",color:"gray" ,'&:hover': {
    color:"#2381fa",
    backgroundColor:"whitesmoke",
    borderRadius:2
  },}

const avatarBoxStyle ={p:"2px 5px",cursor:"pointer"}

const Header = ({tabValue,setTabValue,handleTabChange}) => {
   
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        height: 32,
        p:1,
        boxShadow: "0px 0px 3px #ccc",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CardMedia
          component="img"
          image={Facebooklogo}
          sx={{ height: 30, width: 30, mr: 1, ml: 1 }}
          alt="Group logo"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "whitesmoke",
            borderRadius: 5,
            p: "0px 10px",
            height: "40px",
          }}
        >
          <Search sx={{cursor:"pointer"}} />
          <AutoComplete
            //   options={options}
            style={{
              width: 200,
              height:"20px"
            }}
            placeholder="Search Facebook"
            //   onSearch={(text) => setOptions(getPanelValue(text))}
            //   onSelect={globalThis.console.log}
            bordered={false}
            size="small"
          />
        </Box>
      </Box>

      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>

        {/*
         <Box sx={homeBoxStyle}>
        

     
          <HomeRounded />
        </Box>
        <Box sx={homeBoxStyle}>
          <PeopleRounded />
        </Box>
        <Box sx={homeBoxStyle}>
          <Diversity3OutlinedIcon />
        </Box> */}
        <Tabs value={tabValue} onChange={handleTabChange} centered>
        {/* <Box sx={homeBoxStyle}> */}
        <Tooltip title="Home">
        
        <Tab icon={<HomeRounded />} sx={{...homeBoxStyle}} />
        
</Tooltip>
<Tooltip title="Friends">

        <Tab  icon={<PeopleRounded />} sx={homeBoxStyle} />
        </Tooltip>
        <Tooltip title="Groups">

        <Tab  icon={ <Diversity3OutlinedIcon />} sx={homeBoxStyle} />
        </Tooltip>
        <Tooltip title="Marketplace">

        <Tab  icon={ <StoreOutlined />} sx={homeBoxStyle} />

     </Tooltip>
        {/* </Box> */}
      </Tabs>
     
      </Box>
     
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Box sx={avatarBoxStyle}>
          <IconButton>
            <Tooltip title="Menu">
            <CardMedia
              component="img"
              image={Menuicon}
              sx={{ height: 20, width: 20 }}
              alt="Message logo"
            />
            </Tooltip>
           
          </IconButton>
        </Box>
        <Box sx={avatarBoxStyle}>
          <IconButton>
          <Tooltip title="Messenger">

            <CardMedia
              component="img"
              image={MessageIcon}
              sx={{ height: 20, width: 20 }}
              alt="Message logo"
            />
            </Tooltip>
          </IconButton>
        </Box>
        <Box sx={avatarBoxStyle}>
          <IconButton>
          <Tooltip title="Notifications">
            
            <CardMedia
              component="img"
              image={NotificationIcon}
              sx={{ height: 20, width: 20 }}
              alt="facebook logo"
            />
            </Tooltip>
          </IconButton>
        </Box>
        
        <Box sx={avatarBoxStyle}>
        <Tooltip title="Profile">
          
      <Avatar alt="Zayn M" src={AvatarProfile} sx={{height:30,width:30}} />
          </Tooltip>
        </Box>
      </Box>

      
    </Box>
  );
};

export default Header;
