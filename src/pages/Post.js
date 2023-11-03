import React, { useState } from "react";
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
  ClickAwayListener,
  Tooltip,
} from "@mui/material";
import { useData } from "./DataContext";
import { MoreHoriz } from "@mui/icons-material";
import Popper from "@mui/material/Popper";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ShareIcon from "@mui/icons-material/Share";
import PostPopper from "./Components/PostPopper";
import Timeago from "./TimeAgo/Timeago";
const Post = () => {
  const { posts, handleLike, handleShare, setPosts, handleBookmark, logName } =
    useData();
  const [post, setPost] = useState();
  // const [open, setOpen] = React.useState(false);

  const [anchorEls, setAnchorEls] = React.useState(
    new Array(posts.length).fill(null)
  );
  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };


  function handleClick(event, index) {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = newAnchorEls[index] ? null : event.currentTarget;
    setAnchorEls(newAnchorEls);
  }
  function handleDdlclick(e, item) {
    e.preventDefault();
    if (post.find((value) => value.name !== item.name)) {
      setPost([...post, item]);
    } else {
      setPost([...post]);
    }
    console.log(post, "dfykutjh");
  }
  return (
    <Box>
      {posts &&
        posts.map((post, index) => {
          const anchorEl = anchorEls[index];
          return (
            <Box
              key={post.id}
              sx={{ mb: 2, width: 550, mt: 2, borderRadius: 3 }}
            >
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      src={post.avatar}
                      sx={{ border: "2px solid #17A9FD" }}
                      alt={logName}
                    />
                  }
                  title={post.name}
                  subheader={<Timeago timestamp={post.time} />}
                  action={
                    <Box onClick={(event) => handleClick(event, index)}>
                      <IconButton>
                        <Tooltip title="more options">
                          <MoreHoriz />
                        </Tooltip>
                      </IconButton>

                      <Popper
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        sx={{ width: 230, mb: 20 }}
                      >
                        <PostPopper post={post} />
                      </Popper>
                      <IconButton onClick={() => handleDelete(post.id)}>
                        <Typography>X</Typography>
                      </IconButton>
                    </Box>
                  }
                />
                <Divider />

                <CardContent>
                  <Typography variant="body1" sx={{ marginTen: "10px" }}>
                    {post.content}
                  </Typography>

                  <CardMedia component="img" src={post.image} />
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
                      <ThumbUpAltIcon
                        color={post.liked ? "primary" : "action"}
                      />
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
          );
        })}
    </Box>
  );
};

export default Post;
