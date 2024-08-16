import { Box } from '@mui/material'
import React from 'react'

const Bite = () => {
  return (
    <>
    <Box sx={{height:"80vh",backgroundColor:"black",position:'relative'}}>
        <Box sx={{position:"absolute",top:'0px' ,left:'0px',right:'0px'}}><img src="/images/bg-white.png" alt="crunchy bite" /></Box>
        <Box sx={{position:"absolute",bottom:'0px' ,left:'0px',right:'0px'}}><img src="/images/bg-brown.png" alt="crunchy bite" /></Box>
        
        
    </Box>
    </>
  )
}

export default Bite