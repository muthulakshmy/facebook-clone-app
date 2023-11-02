import React from "react";
import Sidebaroptions from "./Sidebaroptions";
import Friend from "../images/friend.png";
import Memories from "../images/memories.png";
import Saved from "../images/save.png";
import Groups from "../images/groups (1).png";
import Video from "../images/video-player.png";
import Marketplace from "../images/market.png";
import Feeds from "../images/feed.png";
import Event from "../images/calendar.png";
import AdsManager from "../images/bar-graph.png";
import Fundraisers from "../images/heart.png";
import { Avatar, Box, Typography } from "@mui/material";
import { useData } from "../DataContext";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setTabValue }) => {
  const dataContext = useData();
  const navigate=useNavigate()
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
  const d=dataContext.posts.filter((v)=>v.name==dataContext.logName)
const avatarStyle={ height: 25, width: 25 }
function handleAvatar(){
  navigate("/profile")
}
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        overflow: "hidden",
        height: 500,
        width: 250,
        mt: 6,
        "&:hover": {
          overflowY: "scroll",
        },
      }}
    >
      <Box
        sx={{
          padding: "1px 15px",
          top: 0,
          mt: 2,
          mb: 2,
          display: "flex",
          "&:hover": {
            backgroundColor: "rgb(211 211 211/31%)",
            cursor: "pointer",
          },
        }}
        onClick={handleAvatar}
      >
        {/* <Avatar
        src={d[0].avatar}
          // {...stringAvatar(`${dataContext.logName}`)}
          sx={{ height: 25, width: 25 }}
        /> */}
      
        {
          d.length > 0 ? (  <Avatar
            alt={dataContext.logName}
            src={d[0].avatar}
            sx={avatarStyle}
          />):(<Avatar
            alt={dataContext.logName}
            // src={d[0].avatar}
            {...stringAvatar(`${dataContext.logName}`)}
            sx={avatarStyle}
          />)
        }
     
        
        <Typography
          variant="h6"
          sx={{ fontSize: "14px", fontWeight: "bold", ml: "20px" }}
        >
          {dataContext.logName}
        </Typography>
      </Box>
      <Sidebaroptions src={Friend} title="Friends" setTabValue={setTabValue} />
      <Sidebaroptions src={Memories} title="Memories" />
      <Sidebaroptions src={Saved} title="Saved" />
      <Sidebaroptions src={Groups} title="Groups" setTabValue={setTabValue} />
      <Sidebaroptions src={Video} title="Video" />
      <Sidebaroptions
        src={Marketplace}
        title="Marketplace"
        setTabValue={setTabValue}
      />
      <Sidebaroptions src={Feeds} title="Feeds" />
      <Sidebaroptions src={Event} title="Events" />
      <Sidebaroptions src={AdsManager} title="Ads Manager" />
      <Sidebaroptions src={Fundraisers} title="Fundraisers" />
    </Box>
  );
};

export default Sidebar;
