import { Avatar, Box, Tab, Tabs, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useData } from "../DataContext";
import Community from "../Community";
import Marketplace from "../Marketplace";
import Postprofile from "./Postprofile";
import { useNavigate } from "react-router-dom";
import Likes from "./Likes";
import ProfileHeader from "./ProfileHeader";
import ProfileFriends from './ProfileFriends'
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
const Profilepage = () => {
  const dataContext = useData();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  function handlehome() {
    navigate("/home");
  }
  const d = dataContext.posts.filter((v) => v.name == dataContext.logName);
  const avatarStyle = {
    width: 170,
    height: 170,
    mt: -10,
    ml: 5,
    border: "5px solid white",
    fontSize: 100,
    fontWeight: "bold",
  };
  return (
    <>
      <Box onClick={handlehome}>
        <ProfileHeader  />
      </Box>

      <Box sx={{ mr: 20, ml: 20 }}>
        <Box>
          <Box
            sx={{
              backgroundColor: "#cccccc",
              width: 800,
              height: 300,
              backgroundImage: `url()`,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          ></Box>
          <Box sx={{ display: "flex" }}>
            {d.length > 0 ? (
              <Avatar
                alt={dataContext.logName}
                src={d[0].avatar}
                sx={avatarStyle}
              />
            ) : (
              <Avatar
                alt={dataContext.logName}
                {...stringAvatar(`${dataContext.logName}`)}
                sx={avatarStyle}
              />
            )}
            <Box sx={{display:"flex",flexDirection:"column",ml: 2, }}>
            <Typography sx={{  fontSize: 25, fontWeight: "bold",mt: 3, }}>
              {dataContext.logName}
            </Typography>
            {
              dataContext.friendList.length > 0 ? (


            <Typography>{dataContext.friendList.length} Friend </Typography>

              ):(" ")
            }
              </Box>
           
          </Box>
        </Box>
      </Box>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tooltip title="Home">
          <Tab icon="posts" sx={{ ...homeBoxStyle }} />
        </Tooltip>
        <Tooltip title="Likes">
          <Tab icon="Likes" sx={homeBoxStyle} />
        </Tooltip>
        <Tooltip title="Friends">
          <Tab icon="Friends" sx={homeBoxStyle} />
        </Tooltip>
        <Tooltip title="Groups">
          <Tab icon="Groups" sx={homeBoxStyle} />
        </Tooltip>
        <Tooltip title="Marketplace">
          <Tab icon="market place" sx={homeBoxStyle} />
        </Tooltip>
      </Tabs>
      <Box sx={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Box>
          {tabValue === 0 && <Postprofile />}
          {tabValue === 1 && <Likes />}
          {tabValue === 2 && <ProfileFriends />}
          {tabValue === 3 && <Community />}
          {tabValue === 4 && <Marketplace />}
        </Box>
      </Box>
    </>
  );
};

export default Profilepage;
