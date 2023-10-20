import React from 'react'
import Sidebaroptions from './Sidebaroptions'
import Friend from '../images/friend.png'
import Memories from '../images/memories.png'
import Saved from '../images/save.png'
import Groups from '../images/groups (1).png'
import Video from '../images/video-player.png'
import Marketplace from '../images/market.png'
import Feeds from '../images/feed.png'
import Event from '../images/calendar.png'
import AdsManager from '../images/bar-graph.png'
import Fundraisers from '../images/heart.png'
import { Avatar, Box, Typography } from '@mui/material'
import AvatarProfile from '../images/avatarprofile.jpg'
const Sidebar = () => {
  
  return (
    <Box sx={{position:"sticky",top:0,}}>
      <Box sx={{padding:"1px 15px",position:"sticky",top:0,mt:2, mb:2,display:"flex",'&:hover': {
      backgroundColor:"rgb(211 211 211/31%)",
    
     cursor: 'pointer',
    },}}>
      <Avatar alt="Zayn M" src={AvatarProfile} sx={{height:25,width:25}} />
<Typography variant='h6' sx={{fontSize:"14px",fontWeight:"bold",ml:"20px"}}>Zayn M</Typography>

      </Box>
        <Sidebaroptions src={Friend} title="Friends"  />
        <Sidebaroptions src={Memories} title="Memories"  />
        <Sidebaroptions src={Saved} title="Saved"  />
        <Sidebaroptions src={Groups} title="Groups"  />
        <Sidebaroptions src={Video} title="Video"  />
        <Sidebaroptions src={Marketplace} title="Marketplace"  />
        <Sidebaroptions src={Feeds} title="Feeds"  />
        <Sidebaroptions src={Event} title="Events"  />
        <Sidebaroptions src={AdsManager} title="Ads Manager"  />
        <Sidebaroptions src={Fundraisers} title="Fundraisers"  />
        

        
        


        
        
      
    </Box>
  )
}

export default Sidebar
