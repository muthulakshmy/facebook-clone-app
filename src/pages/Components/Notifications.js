import Notification from "../images/bell-ring.png";
import {
  Card,
  CardMedia,
  Fade,
  IconButton,
  Popper,
  Tab,
  Tabs,
  Tooltip,
} from "@mui/material";
import React from "react";
import {Typography } from "@mui/material";

const Notifications = ({ open, setOpen }) => {
  // const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <div>
      {/* <Typography onClick={handleClick1}>ghhhjuhuhiuhuh</Typography> */}
      <IconButton onClick={handleClick}>
        <Tooltip title="Messages">
          <CardMedia
            component="img"
            image={Notification}
            sx={{ height: 20, width: 20 }}
            alt="Message logo"
          />
        </Tooltip>
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={2}>
            <Card sx={{ p: 3, borderRadius: 3, width: 300 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Notifications
                </Typography>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon tabs example"
              >
                <Tab label="read" aria-label="phone" />
                <Tab label="unread" aria-label="favorite" />
                
              </Tabs>

              <Typography sx={{ textAlign: "center", mt: 1 }}>
                No messages Found
              </Typography>
            </Card>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default Notifications;
