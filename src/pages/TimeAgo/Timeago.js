import React from 'react'
import { parseISO,formatDistanceToNow } from 'date-fns'
import { Typography } from 'antd'
import { Box } from '@mui/material'
const Timeago = ({timestamp}) => {
    let timeAgo=''
    if(timestamp){
        const date=parseISO(timestamp)
        const timePeriod=formatDistanceToNow(date)
        timeAgo=`${timePeriod} ago`
    }
  return (
    <Box title={timestamp}>
        <Typography >{timeAgo}</Typography>
      
    </Box>
  )
}

export default Timeago
