import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardHeader, Avatar, Divider, IconButton, CardMedia } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DeleteIcon from "@mui/icons-material/Delete";
import { useData } from "../DataContext";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Timeago from "../TimeAgo/Timeago";

const Saved = () => {
  const { posts, setPosts } = useData();
  const [bookmarkedPosts, setBookmarkedPosts] = useState(posts.filter((post) => post.bookmarked));
const navigate=useNavigate()
  const handleRemoveFromSaved = (id) => {
    setBookmarkedPosts((prevBookmarkedPosts) => prevBookmarkedPosts.filter((post) => post.id !== id));
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === id) {
          return { ...post, bookmarked: false };
        }
        return post;
      })
    );
  };
  function handlehome(){
    navigate("/home")
  }
  return (
    <Box sx={{mt:10}}>
       <Box onClick={handlehome}>
        <Header />
      </Box>
      
      {bookmarkedPosts.length ? (
        bookmarkedPosts.map((post) => (
          <Box key={post.id} sx={{ mb: 2, width: 550, mt: 2, borderRadius: 3,ml:37 }} >
            <Card>
              <CardHeader
                avatar={<Avatar src={post.avatar} alt="Avatar" />}
                title={post.name}
                subheader={<Timeago timestamp={post.time} />}
                action={
                  <IconButton onClick={() => handleRemoveFromSaved(post.id)}>
                    <BookmarkIcon sx={{color:"#17A9FD"}} />
                  </IconButton>
                }
              />
              <Divider />
              <CardContent>
                <Typography variant="body1" sx={{ marginTen: "10px" }}>
                  {post.content}
                </Typography>
                <CardMedia component="img" src={post.image} />
              </CardContent>
            </Card>
          </Box>
        ))
      ) : (
        <Typography variant="h6" sx={{textAlign:"center",mt:35}}>No bookmarked posts yet.</Typography>
      )}
    </Box>
  );
};

export default Saved;
