import {
    Card,
    CardMedia,
    Fade,
    IconButton,
    Popper,
    Tooltip,
  } from "@mui/material";
  import React from "react";
  import {Box, Typography } from "@mui/material";
  import MessageIcon from "../images/chat.png";
  import SearchPost from "../Search";
  
  const Messages = ({open,setOpen}) => {
    // const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((previousOpen) => !previousOpen);
    };
    const handleClick1 = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(false);
    };
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;
    return (
      <div>
        {/* <Typography onClick={handleClick1}>ghhhjuhuhiuhuh</Typography> */}
        <IconButton onClick={handleClick} >
          <Tooltip title="Messages">
            <CardMedia
              component="img"
              image={MessageIcon}
              sx={{ height: 20, width: 20 }}
              alt="Message logo"
            />
          </Tooltip>
        </IconButton>
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={2}>
               <Card sx={{p:3,borderRadius:3,width:300,}}>
                  
                  <Typography variant='h6' sx={{fontWeight:"bold",mb:1}}>Chats</Typography>
                  <SearchPost />
                  <Typography sx={{textAlign:"center" ,mt:1}}>No messages Found</Typography>
                  
               </Card>   
            </Fade>
          )}
        </Popper>
      </div>
    );
  };
  
  export default Messages;
