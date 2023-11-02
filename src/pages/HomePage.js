import React from "react";
import CreatePost from "./CreatePost";
import StoryReel from "./StoryReel";
import { Box } from "@mui/material";
import RightSidebar from "./RightSidebar";
import Post from "./Post";
import Sidebar from "./Sidebar/Sidebar";
import { useData } from "./DataContext";

const HomePage = ({ bgcolor,color }) => {
  const {tabValue, setTabValue, handleTabChange,}=useData()
  return (
    <Box sx={{ display: "flex", backgroundColor:`${bgcolor}`,color:`${color}`  }}>
      <Box>
        <Sidebar
         
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          padding: "30px 60px",
          display: "flex",
          ml: 30,
          flexDirection: "column",
          maxWidth: "600px",
          mt: "50px",
        }}
      >
        <StoryReel />
        <CreatePost />
        <Post />
      </Box>
      <Box>
        <RightSidebar />
      </Box>
    </Box>
  );
};

export default HomePage;
