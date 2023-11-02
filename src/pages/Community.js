import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { Carousel } from "antd";
const Community = () => {

  const cardStyle={width:400,height:400,mr:40}
  return (
    <Box sx={{ p: 10 }}>
      <Box sx={{ml:40,width:300,backgroundColor:"gray"}}>
      <Carousel autoplay sx={{color:"red"}}>
      <Box sx={{ mb: 2, width: 550, mt: 2, borderRadius: 3 }}>
          <Card sx={cardStyle}>
            <CardHeader
              avatar={
                <Avatar
                src='https://wallpapers.com/images/hd/taylor-swift-pictures-y8wyxeogqlr4f164.jpg'
                  sx={{ border: "2px solid #17A9FD" }}
                  alt="Avatar"
                />
              }
              title="Taylor Swift"
            />
            <Divider />
            <CardContent>
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Forever is the sweetest con
              </Typography>

              <CardMedia
              component="img"
              src='https://w0.peakpx.com/wallpaper/591/1003/HD-wallpaper-romantic-place-love-place-romantic-thumbnail.jpg'
                alt="Post"
                sx={{ width: 250,height:250, marginTop: "10px" }}
              />
            </CardContent>
          </Card>
        </Box> <Box sx={{ mb: 2, width: 550, mt: 2, borderRadius: 3 }}>
          <Card sx={cardStyle}>
            <CardHeader
              avatar={
                <Avatar
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqn9zWUXJNvhg0Es1kwedoqiLPMgt2vKkPUw&usqp=CAU'
                  sx={{ border: "2px solid #17A9FD" }}
                  alt="Avatar"
                />
              }
              title="Avinash shyam"
            />
            <Divider />
            <CardContent>
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Forever is the sweetest con
              </Typography>

              <CardMedia
              component="img"
              src='https://i.pinimg.com/originals/0d/91/76/0d9176f10b71f4729d72a8841e1a7a41.jpg'
                alt="Post"
                sx={{ width: 250,height:250, marginTop: "10px" }}
              />
            </CardContent>
          </Card>
        </Box> <Box sx={{ mb: 2, width: 550, mt: 2, borderRadius: 3 }}>
          <Card sx={cardStyle}>
            <CardHeader
              avatar={
                <Avatar
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCBTg6d4MFvRfq7Iw1hH1hVP2_Q_D7LirKme0O6LxQ4szeXwa'
                  sx={{ border: "2px solid #17A9FD" }}
                  alt="Avatar"
                />
              }
              title="Hazel Lavinster"
            />
            <Divider />
            <CardContent>
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Forever is the sweetest con
              </Typography>

              <CardMedia
              component="img"
              src='https://i.pinimg.com/originals/10/48/93/104893acf8f3a8b047121d29dac2b1a1.png'
                alt="Post"
                sx={{ width: 250,height:250, marginTop: "10px" }}
              />
            </CardContent>
          </Card>
        </Box> <Box sx={{ mb: 2, width: 550, mt: 2, borderRadius: 3 }}>
          <Card sx={cardStyle}>
            <CardHeader
              avatar={
                <Avatar
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJQAvFmI1k6ACSdSF5CljQjbTkmXNlJ9wGg&usqp=CAU'
                  sx={{ border: "2px solid #17A9FD" }}
                  alt="Avatar"
                />
              }
              title="Josh Chay"
             
            />
            <Divider />
            <CardContent>
              <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Forever is the sweetest con
              </Typography>

              <CardMedia
              component="img"
              src='https://w0.peakpx.com/wallpaper/102/79/HD-wallpaper-beautiful-place-karen-story-lighthouse.jpg'
                alt="Post"
                sx={{ width: 250,height:250, marginTop: "10px" }}
              />
            </CardContent>
          </Card>
        </Box> 
        <Box sx={{ mb: 2, width: 550, mt: 2, borderRadius: 3 }}>
          <Card sx={cardStyle}>
            <CardHeader
              avatar={
                <Avatar
                src='https://i.pinimg.com/236x/78/a0/69/78a069ecabc0bf6b0e00d947a49025a9.jpg'
                  sx={{ border: "2px solid #17A9FD" }}
                  alt="Avatar"
                />
              }
              title="Rhys Larsen"
            />
            <Divider />
            <CardContent>
              <Typography variant="body1" sx={{ marginTop: "10px" ,width:200}}>
             I enjoy nights in Brixton Shoreditch in the afternoon
              </Typography>

              <CardMedia
              component="img"
              src='https://e0.pxfuel.com/wallpapers/197/688/desktop-wallpaper-best-places-to-visit-in-london-united-kingdom-uk-aesthetic.jpg'
                alt="Post"
                sx={{ width: 250,height:250, marginTop: "10px" }}
              />
            </CardContent>
          </Card>
        </Box>
      </Carousel>
      </Box>
     
    </Box>
  );
};

export default Community;
