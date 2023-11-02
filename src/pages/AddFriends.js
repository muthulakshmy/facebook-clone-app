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
import { useData } from "./DataContext";
const AddFriends = () => {
  const {users,setUsers,friendList,setFriendList} = useData();
 
  
  const  handledelete= (postId) => {
    const updatedPosts = users.filter((post) => post.id !== postId);
    setUsers(updatedPosts);
  };
const handleList=(user)=>{
  setFriendList([...friendList,user])
  
  console.log("frine",friendList)
  const updatedPosts = users.filter((post) => post.id !== user.id);
    setUsers(updatedPosts);
}
  return (
    <Box sx={{ p: 10 }}>
      <Grid container spacing={2} gap="50px">
        {users.map((user) => (
          <Card key={user.id} sx={{ marginBottom: 2, width: 200, height: 300 }}>
            <CardMedia
              component="img"
              image={user.image}
              sx={{ height: 170, width: 200 }}
            />
            <CardContent sx={{ p: 2 }}>
              <Typography>{user.name}</Typography>
              <Button
              onClick={(e)=>handleList(user)}
                variant="contained"
                sx={{
                  backgroundColor: "#4267B2",
                  color: "white",
                  width: 170,
                  fontSize: 12,
                  mb: 1,
                }}
              >
                Confirm
              </Button>
              <Button
              onClick={(e)=>handledelete(user.id)}
                variant="contained"
                sx={{
                  backgroundColor: "lightgray",
                  color: "black",
                  width: 170,
                  fontSize: 12,
                }}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default AddFriends;
