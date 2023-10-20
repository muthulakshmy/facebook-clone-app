import { Box, CardMedia, Typography,Avatar } from '@mui/material'
import React from 'react'
import { useData } from './DataContext'
import { Search } from '@mui/icons-material'

const RightSidebar = () => {
  const contacts = useData()
  return (
    <Box sx={{position:"fixed",top:90,right:5}}>
    <Box sx={{display:"flex",justifyContent:"space-between",}}>
    <Typography sx={{fontSize:"16px",color:"gray",fontWeight:"bold"}}>Contacts</Typography>
      <Search sx={{color:"gray"}} />
      </Box>
    <Box sx={{height:450,top:0,overflow:"hidden",'&:hover':{
      overflowY:"scroll"
    }}}>
      
{
  contacts.users.map((contact) =>(
<Box
        sx={{
          display: "flex",
          padding: "1px 5px",
          alignItems: "items",
          mb: 3
          ,'&:hover': {
            backgroundColor:"rgb(211 211 211/31%)",
            
           cursor: 'pointer',
          },
        }}
      >
        <Avatar  src={contact.image}  />
        <Typography
          variant="h6"
          marginLeft="20px"
          fontSize="14px"
        >
          {contact.name}
        </Typography>
      </Box>



  ))
}

    </Box >
    </Box>
  )
}

export default RightSidebar
