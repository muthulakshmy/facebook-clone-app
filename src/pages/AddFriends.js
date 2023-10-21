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
  const userData = useData();
  return (
    <Box sx={{ p: 10 }}>
      <Grid container spacing={2} gap="50px">
        {userData.users.map((user) => (
          <Card key={user.id} sx={{ marginBottom: 2, width: 200, height: 300 }}>
            <CardMedia
              component="img"
              image={user.image}
              sx={{ height: 170, width: 200 }}
            />
            <CardContent sx={{ p: 2 }}>
              <Typography>{user.name}</Typography>
              <Button
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
