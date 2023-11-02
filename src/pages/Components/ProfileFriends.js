import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Grid,
} from "@mui/material";
import { useData } from "../DataContext";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import Header from '../Header'
const PostFriends = () => {
    const navigate=useNavigate()
  const {users,setUsers,friendList,setFriendList,tabValue, setTabValue, handleTabChange,} = useData();
 
  
  const  handledelete= (postId) => {
    const updatedPosts = friendList.filter((post) => post.id !== postId);
    setFriendList(updatedPosts);
  };

function handlehome(){
 navigate("/home")
}

  return (
    <>
    <Box >
    <Box onClick={handlehome} sx={{mr:140}}>
      <Header />
    </Box>
    <Header />
        </Box>
        <Box sx={{ p: 10 }}>
        
        <Grid container spacing={2} gap="50px">
          {friendList.length>0 ? (
              friendList.map((user) => (
                  <Card key={user.id} sx={{ marginBottom: 2, width: 200, height: 260 }}>
                    <CardMedia
                      component="img"
                      image={user.image}
                      sx={{ height: 170, width: 200 }}
                    />
                    <CardContent sx={{ p: 2 }}>
                      <Typography>{user.name}</Typography>
                     
                      <Button
                      onClick={(e)=>handledelete(user.id)}
                        variant="contained"
                        sx={{
                       
                       
                          width: 170,
                          fontSize: 12,
                        }}
                      >
                      Remove
                      </Button>
                    </CardContent>
                  </Card>
                ))
  
          ):(
              <Box sx={{ml:50,mt:20}}>
              <Typography sx={{fontWeight:"bold",color:"#0165E1",mb:3}}>No friends to show</Typography>
              
  
            
              </Box>
          )
          
          
          
          }
        </Grid>
      </Box>
    </>
   
  );
};

export default PostFriends;
