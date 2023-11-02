import {
  Card,
  CardMedia,
  Fade,
  IconButton,
  Popper,
  Tooltip,
} from "@mui/material";
import React from "react";
import Menuicon from "../images/dots-menu.png";
import MenuOptions from "./MenuOptions";
import Friend from "../images/friend.png";
import Memories from "../images/memories.png";
import Saved from "../images/save.png";
import Groups from "../images/groups (1).png";
import Marketplace from "../images/market.png";
import Feeds from "../images/feed.png";
import Event from "../images/calendar.png";
import AdsManager from "../images/bar-graph.png";
import {Box, Typography } from "@mui/material";
import Create from "../images/create.png";
import MenuCreate from "./MenuCreate";
import Group from "../images/groups (2).png";
import Story from "../images/open-book.png";
import Reel from "../images/video.png";
import Page from "../images/facebook-page.png";
import Ad from "../images/megaphone.png";
import Events from "../images/calendars.png";
import Market from "../images/shopping-bag.png";
import SearchPost from "../Search";

const Menu = ({open,setOpen}) => {
  // const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <div>
      {/* <Typography onClick={handleClick1}>ghhhjuhuhiuhuh</Typography> */}
      <IconButton onClick={handleClick} >
        <Tooltip title="Menu">
          <CardMedia
            component="img"
            image={Menuicon}
            sx={{ height: 20, width: 20 }}
            alt="Message logo"
          />
        </Tooltip>
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={2}>
            <Card
              sx={{
                border: "1px solid white",
                p: 2,
                bgcolor: "background.paper",
                backgroundColor: "whitesmoke",
                borderRadius: 2,
                overflowY: "scroll",
                height: 400,
              }}
            >
              <Typography>Menu</Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    width: 300,
                    p: 2,
                  }}
                >
                  <SearchPost />
                  <Typography
                    variant="h6"
                    marginLeft="20px"
                    fontSize="14px"
                    fontWeight="bold"
                  >
                    Social
                  </Typography>
                  <Box>
                    <MenuOptions
                      src={Event}
                      title="Events"
                      description="Organize or find events and other things to do online and nearby."
                    />
                    <MenuOptions
                      src={Friend}
                      title="Friends"
                      description="Search for friends or people you may know."
                    />
                    <MenuOptions
                      src={Groups}
                      title="Groups"
                      description="Connect with people who share your interests."
                    />
                    <MenuOptions
                      src={Feeds}
                      title="Feeds"
                      description="See your most resent posts from your friends, groups, Pages and more."
                    />
                    <MenuOptions
                      src={Marketplace}
                      title="Marketplace"
                      description="Buy and sell in your community."
                    />
                    <MenuOptions
                      src={Memories}
                      title="Memories"
                      description="Browse ypur okd photos, videos and posts in your facebook."
                    />
                    <MenuOptions
                      src={Saved}
                      title="Saved"
                      description="Find the posts,videos that you are saved foe later."
                    />
                    <MenuOptions
                      src={AdsManager}
                      title="Ads Manager"
                      description="Create,manage and track the performance of your ads."
                    />
                    <MenuOptions
                      src={Marketplace}
                      title="Marketplace"
                      description="Donate and raise money for charities and personal causes."
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 1,
                    width: 140,
                    p: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    marginLeft="20px"
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    Create
                  </Typography>

                  <MenuCreate src={Create} title="Post" />
                  <MenuCreate src={Story} title="Story" />
                  <MenuCreate src={Reel} title="Reel" />
                  <MenuCreate src={Page} title="Page" />
                  <MenuCreate src={Ad} title="Ad" />
                  <MenuCreate src={Group} title="Group" />
                  <MenuCreate src={Events} title="Event" />
                  <MenuCreate src={Market} title="Marketplace Listing" />
                </Box>
              </Box>
            </Card>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default Menu;
