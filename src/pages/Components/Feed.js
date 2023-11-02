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
  CardMedia,
} from "@mui/material";
import {MoreHoriz } from "@mui/icons-material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Popper from "@mui/material/Popper";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { useData } from "../DataContext";
import Timeago from "../TimeAgo/Timeago";
import ProfileHeader from "./ProfileHeader";

const Feed = () => {
  const navigate = useNavigate();
  function handlehome() {
    navigate("/home");
  }
  const { posts, handleLike, handleShare, setPosts, handleBookmark,logName } = useData();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, index) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const BoxStyle = { display: "flex", mt: 1, mb: 1 };
  const iconStyle = { mr: 1 };
  const postsData=posts.filter((post)=>post.name===logName)
  return (
    <Box>
      <Box onClick={handlehome}>
     <ProfileHeader />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center",mt:5 }}
      >
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
                subheader={<Timeago timestamp={post.time} />}
                action={
                  <Box>
                    <IconButton>
                      <MoreHoriz onClick={handleClick} />
                    </IconButton>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                      <Card
                        sx={{ p: 2, display: "flex", flexDirection: "column" }}
                      >
                        <Box
                          sx={BoxStyle}
                          onClick={() => handleBookmark(post.id)}
                        >
                        
                           <Typography>
                          {post.bookmarked
                          ? (
                            <BookmarkIcon
                              sx={{ cursor: "pointer"}}
                            color="primary"
                            ></BookmarkIcon>
                          ) : (
                            <BookmarkBorderIcon
                              sx={{ cursor: "pointer" }}
                              color="action"
                            ></BookmarkBorderIcon>
                          )}
                        </Typography>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                color: "action",
                              }}
                            >
                              Save post
                            </Typography>
                            <Typography sx={{ fontSize: "10px" }}>
                              Add this to your saved items.
                            </Typography>
                          </Box>
                        </Box>
                        <Divider />
                        <Box sx={BoxStyle}>
                          <NotificationsNoneOutlinedIcon sx={iconStyle} />
                          <Box>
                            <Typography
                              sx={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Turn on notifications for this post
                            </Typography>
                          </Box>
                        </Box>

                        <Divider />
                        <Box
                          sx={BoxStyle}
                          onClick={() => handleDelete(post.id)}
                        >
                          <DisabledByDefaultOutlinedIcon sx={iconStyle} />
                          <Box>
                            <Typography
                              sx={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Hide post
                            </Typography>
                            <Typography sx={{ fontSize: "10px" }}>
                              See fewer posts like this.
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={BoxStyle}
                          onClick={() => handleDelete(post.id)}
                        >
                          <QueryBuilderOutlinedIcon sx={iconStyle} />
                          <Box>
                            <Typography
                              sx={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Snooze for 30 days
                            </Typography>
                            <Typography sx={{ fontSize: "10px" }}>
                              Temporarily stop seeing posts.
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={BoxStyle}
                          onClick={() => handleDelete(post.id)}
                        >
                          <PersonOffIcon sx={iconStyle} />
                          <Box>
                            <Typography
                              sx={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Unfollow
                            </Typography>
                            <Typography sx={{ fontSize: "10px" }}>
                              Add this to your saved items.
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={BoxStyle}
                          onClick={() => handleDelete(post.id)}
                        >
                          <ReportGmailerrorredIcon sx={iconStyle} />
                          <Box>
                            <Typography
                              sx={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Report post
                            </Typography>
                            <Typography sx={{ fontSize: "10px" }}>
                              We won't let who reported this.
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={BoxStyle}
                          onClick={() => handleDelete(post.id)}
                        >
                          <DisabledByDefaultOutlinedIcon sx={iconStyle} />
                          <Box>
                            <Typography
                              sx={{ fontSize: "12px", fontWeight: "bold" }}
                            >
                              Block profile
                            </Typography>
                            <Typography sx={{ fontSize: "10px" }}>
                              You wont't be able to see or contact each other.
                            </Typography>
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
               
                <CardMedia  component="img" src={post.image} />
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
        {/* <Post /> */}
      </Box>
    </Box>
  );
};

export default Feed;
