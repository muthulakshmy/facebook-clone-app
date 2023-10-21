import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Popper from "@mui/material/Popper";
import { useData } from "./DataContext";
import { MoreHoriz } from "@mui/icons-material";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import PersonOffIcon from '@mui/icons-material/PersonOff';
const HomePage = () => {
  const { posts, handleDelete, handleLike, handleShare, handleBookmark } =
    useData();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const BoxStyle ={display:"flex",mt:1,mb:1}
  const iconStyle={mr:1}
  return (
    <Box>
      {posts &&
        posts.map((post) => (
          <Box key={post.id} sx={{ mb: 2, width: 550, mt: 2, borderRadius: 3 }}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    src={post.avatar}
                    sx={{ border: "2px solid #17A9FD" }}
                    alt="Avatar"
                  />
                }
                title={post.name}
                subheader={post.time}
                action={
                  <Box>
                    <IconButton>
                      <MoreHoriz onClick={handleClick} />
                    </IconButton>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                      <Card
                        sx={{ p: 2,display:"flex",flexDirection:"column"}}
                      >
                         <Box sx={BoxStyle} onClick={() => handleBookmark(post.id)}>
                         <BookmarkBorderIcon 
                      color={post.bookmarked ? "primary" : "action"}
                    />
                               <Box>
                                <Typography sx={{fontSize:"12px",fontWeight:"bold",color:"action"}}>Save post</Typography>
                                <Typography sx={{fontSize:"10px"}}>Add this to your saved items.</Typography>
                               </Box>
                              
                         </Box>
                         <Divider />
                         <Box sx={BoxStyle}>
                               <NotificationsNoneOutlinedIcon sx={iconStyle}  />
                               <Box>
                                <Typography sx={{fontSize:"12px",fontWeight:"bold"}}>Turn on notifications for this post</Typography>
                               </Box>
                         </Box>
                       
                         <Divider />
                         <Box sx={BoxStyle} onClick={() => handleDelete(post.id)}>
                         <DisabledByDefaultOutlinedIcon  sx={iconStyle} />

                               <Box>
                                <Typography sx={{fontSize:"12px",fontWeight:"bold"}}>Hide post</Typography>
                                <Typography sx={{fontSize:"10px"}}>See fewer posts like this.</Typography>
                               </Box>
                         </Box>
                         <Box sx={BoxStyle} onClick={() => handleDelete(post.id)}>
                              <QueryBuilderOutlinedIcon sx={iconStyle}  />
                               <Box>
                                <Typography sx={{fontSize:"12px",fontWeight:"bold"}}>Snooze for 30 days</Typography>
                                <Typography sx={{fontSize:"10px"}}>Temporarily stop seeing posts.</Typography>
                               </Box>
                         </Box>
                         <Box sx={BoxStyle} onClick={() => handleDelete(post.id)}>
                             <PersonOffIcon sx={iconStyle}  />
                               <Box>
                                <Typography sx={{fontSize:"12px",fontWeight:"bold"}}>Unfollow</Typography>
                                <Typography sx={{fontSize:"10px"}}>Add this to your saved items.</Typography>
                               </Box>
                         </Box>
                         <Box sx={BoxStyle} onClick={() => handleDelete(post.id)}>
                               <ReportGmailerrorredIcon sx={iconStyle}  />
                               <Box>
                                <Typography sx={{fontSize:"12px",fontWeight:"bold"}}>Report post</Typography>
                                <Typography sx={{fontSize:"10px"}}>We won't let who reported this.</Typography>
                               </Box>
                         </Box>
                         <Box sx={BoxStyle} onClick={() => handleDelete(post.id)}>
                               <DisabledByDefaultOutlinedIcon  sx={iconStyle} />
                               <Box>
                                <Typography sx={{fontSize:"12px",fontWeight:"bold"}}>Block profile</Typography>
                                <Typography sx={{fontSize:"10px"}}>You wont't be able to see or contact each other.</Typography>
                               </Box>
                         </Box>
                      </Card>
                    </Popper>
                    <IconButton onClick={() => handleDelete(post.id)}>
                      <Typography>X</Typography>
                    </IconButton>
                  </Box>
                }
              />
              <Divider />
              <CardContent>
                <Typography variant="body1" sx={{ marginTop: "10px" }}>
                  {post.content}
                </Typography>
                {post.image && (
                  <img
                    src={URL.createObjectURL(post.image)}
                    alt="Post"
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                )}
              </CardContent>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton onClick={() => handleLike(post.id)}>
                    <ThumbUpAltIcon color={post.liked ? "primary" : "action"} />
                  </IconButton>
                  <Typography variant="body2">{post.likes}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton onClick={() => handleShare(post.id)}>
                    <ShareIcon />
                  </IconButton>
                 
                </Box>
              </Box>
            </Card>
          </Box>
        ))}
    </Box>
  );
};

export default HomePage;
