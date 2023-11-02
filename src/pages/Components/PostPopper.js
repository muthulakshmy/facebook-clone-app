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
} from "@mui/material";
// import { useData } from "./DataContext";/
import { MoreHoriz } from "@mui/icons-material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Popper from "@mui/material/Popper";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { useData } from "../DataContext";
const PostPopper = ({ post }) => {
  const { posts, handleLike, handleShare, setPosts, handleBookmark, logName } =
    useData();

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const BoxStyle = { display: "flex", mt: 1, mb: 1 };
  const iconStyle = { mr: 1 };

  return (
    <div>
      <Card
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={BoxStyle} onClick={() => handleBookmark(post.id)}>
          <Typography>
            {post.bookmarked ? (
              <BookmarkIcon
                sx={{ cursor: "pointer" }}
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
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
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
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
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
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
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
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
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
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
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
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              Block profile
            </Typography>
            <Typography sx={{ fontSize: "10px" }}>
              You wont't be able to see or contact each other.
            </Typography>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default PostPopper;
