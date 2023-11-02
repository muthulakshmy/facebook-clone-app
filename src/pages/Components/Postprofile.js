import React from "react";
import CreatePost from "../CreatePost";
import Posted from "./Posted";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const Postprofile = () => {
  const navigate=useNavigate()
const handlehome=()=>{
  navigate("/home")
}
  return (
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      > 
      <Box onClick={handlehome} sx={{mr:140}}>
      <Header />
    </Box>
        <CreatePost />
        <Posted />
      </Box>
  );
  
};

export default Postprofile;
