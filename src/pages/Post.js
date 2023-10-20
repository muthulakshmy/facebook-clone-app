// import { MoreHorizRounded } from "@mui/icons-material";
// import { Box, Typography, CardMedia, Card } from "@mui/material";
// import React from "react";
// import { useData } from "./DataContext";

// const Post = () => {
//   const users = useData();
//   return (
//     <Box>
//       {users.add.map((value) => (
//         <Card sx={{mb:2,width: 550, mt: 2, borderRadius: 2}}>
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//             <Typography>{value.name}</Typography>
//             <MoreHorizRounded />
//           </Box>
//           <CardMedia component="img" image={value.image} alt={value.name} />
//         </Card>
//       ))}
      
//     </Box>
//   );
// };

// export default Post;
import React from 'react';
import { Box, Typography, Card, CardContent, CardHeader, Avatar, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useData } from './DataContext';

const HomePage = () => {
  const { posts, handleDelete, handleLike, handleShare, handleBookmark }=useData()
  return (
    <Box >
      {posts &&
        posts.map((post) => (
          <Box key={post.id} sx={{mb:2,width: 550, mt: 2, borderRadius: 3}}>
            <Card>
              <CardHeader
                avatar={<Avatar src={post.avatar} alt="Avatar" />}
                title={post.name}
                subheader={post.time}
                action={
                  <IconButton onClick={() => handleDelete(post.id)}>
                    <Typography>X</Typography>
                  </IconButton>
                }
              />
              <Divider />
              <CardContent>
                <Typography variant="body1" sx={{ marginTop: '10px' }}>
                  {post.content}
                </Typography>
                {post.image && (
                  <img
                    src={URL.createObjectURL(post.image)}
                    alt="Post"
                    style={{ width: '100%', marginTop: '10px' }}
                  />
                )}
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton onClick={() => handleLike(post.id)}>
                    <ThumbUpAltIcon color={post.liked ? 'primary' : 'action'} />
                  </IconButton>
                  <Typography variant="body2">{post.likes}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton onClick={() => handleShare(post.id)}>
                    <ShareIcon />
                  </IconButton>
                  <IconButton onClick={() => handleBookmark(post.id)}>
                    <BookmarkBorderIcon color={post.bookmarked ? 'primary' : 'action'} />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Box>
        ))}
    </Box>
  );
};

export default HomePage;

