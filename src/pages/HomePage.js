import React from 'react'
import CreatePost from './CreatePost'
import StoryReel from './StoryReel'
import { Box } from '@mui/material'
import RightSidebar from './RightSidebar'
import Post from './Post'
import Sidebar from './Sidebar/Sidebar'

const HomePage = () => {
  return (
    <Box sx={{display:"flex"}}>
      <Box>
    <Sidebar />

        </Box>
    <Box sx={{flex:1,padding:"30px 150px",display:"flex",flexDirection:"column",maxWidth:"600px",mt:"50px"}}>
      <StoryReel />
      <CreatePost />
      <Post />
      {/* <Feed /> */}
    </Box>
    <Box>
    <RightSidebar />

    </Box>
    </Box>
  )
}

export default HomePage
