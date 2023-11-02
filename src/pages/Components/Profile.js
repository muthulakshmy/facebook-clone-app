import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import AvatarProfile from "../images/avatarprofile.jpg";
import {
  Avatar,
  Card,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
// import { Typography } from "antd";
import { useData } from "../DataContext";
import MenuCreate from "../Menu/MenuCreate";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Profile from "./ProfileSetting";
import ProfileSetting from "./ProfileSetting";
import HelpIcon from "@mui/icons-material/Help";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import AnnouncementRoundedIcon from "@mui/icons-material/AnnouncementRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Navigate, useNavigate } from "react-router-dom";
import { ThreeMpOutlined } from "@mui/icons-material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function MyProfile({ anchorEl, setAnchorEl, theme, colorMode }) {
  const dataContext = useData();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

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
  function handleLogout() {
    dataContext.logout();
  }
  function handleProfile() {
    navigate("/profile");
  }
  const d = dataContext.posts.filter((v) => v.name == dataContext.logName);
  // console.log(d, "ddddddddddddddd");
  const [anchorElMode, setAnchorElMode] = React.useState(false);

  const handleClickMode = (event) => {
    // setAnchorEl(false)

    setAnchorElMode(anchorElMode ? null : event.currentTarget);
  };

  const openMode = Boolean(anchorEl);
  const idMode = open ? "simple-popper" : undefined;

  const cardStyle = {
    p: 2,
    bgcolor: "background.paper",
    mt: 1,
    mr: 1,
    width: 300,
    boxShadow: "0.5px 0.5px 0.5px 0.5px gray",
  };
  return (
    <div>
      <Box onClick={handleClick}>
        <Tooltip title="Profile">
         
          {d.length > 0 ? (
            <Avatar
              alt={dataContext.logName}
              src={d[0].avatar}
              sx={{ height: 35, width: 35 }}
            />
          ) : (
            <Avatar
              alt={dataContext.logName}
              {...stringAvatar(`${dataContext.logName}`)}
              sx={{ height: 35, width: 35 }}
            />
          )}
        </Tooltip>
      </Box>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Card sx={cardStyle}>
          <Box>
            <Card sx={{ p: 1, mb: 1, boxShadow: "0.5px 0.5px 0.5px 0.5px gray" }}>
              <Box sx={{ display: "flex" }} onClick={handleProfile}>
           
                {d.length > 0 ? (
                  <Avatar
                    alt={dataContext.logName}
                    src={d[0].avatar}
                    sx={{ height: 40, width: 40, mb: 1 }}
                  />
                ) : (
                  <Avatar
                    alt={dataContext.logName}
                    {...stringAvatar(`${dataContext.logName}`)}
                    sx={{ height: 40, width: 40, mb: 1 }}
                  />
                )}
                <Typography variant="h6" sx={{ ml: 1 }}>
                  {dataContext.logName}
                </Typography>
              </Box>
              <Divider />
              <Typography
                variant="h6"
                sx={{ color: "blue", fontSize: "14px", cursor: "pointer" }}
              >
                See all profiles
              </Typography>
            </Card>
          </Box>
          <ProfileSetting
            reate
            src={<SettingsRoundedIcon />}
            title="Settings & Privacy"
          />
          <ProfileSetting reate src={<HelpIcon />} title="Help & Support" />
          <Box onClick={colorMode}>
          <ProfileSetting
              reate
              src={theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              title={theme==="dark" ? "Dark mode" :"Light mode"}
            />
          </Box>
          
           
          

          <ProfileSetting
            reate
            src={<AnnouncementRoundedIcon />}
            title="Give Feedback"
          />
          <Box onClick={handleLogout}>
            <ProfileSetting reate src={<LogoutRoundedIcon />} title="Log out" />
          </Box>
        </Card>
      </Popper>
    </div>
  );
}
