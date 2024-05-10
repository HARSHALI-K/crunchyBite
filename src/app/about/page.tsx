
"use client"
import { Box, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import NavbarBG from '../component/navbar-bg/page'
import FixedBottomNavigation from '../component/footer/page'

const About = () => {
  return (
    <>
  <Box sx={{backgroundColor:'black',height:'auto', }}>
        <NavbarBG/>
          <Box sx={{zIndex:'999',width:'100%'}}
         
        >
          <motion.img
      style={{ width: "100%", }}
      src="/about-blue.png"
            alt=""

            animate={{
              y: [-15, 0, -15],
              transition: { duration: 3.1, repeat: Infinity },
            }}
          />
        </Box>
        <Box sx={{position:'relative', height:"18vh",display:{xs:'none',md:"flex"}}}>
          <Grid container spacing={2} sx={{}}>
            <Grid
              item
              xs={10}
              sm={8}
              sx={{background:'#ffffff4f',borderRadius:"20px",p:6,  position:'absolute',
              top:'-650px',
              left:'0px',
              right:'0px',textAlign:'center',margin:'auto'}}
            >
             <Box > 
             <motion.img 
  style={{ position: 'absolute', left: '-66px', top: '-38px',width:"20%" }} 
  src="/images/pizza-icon.png" 
  alt="" 
  animate={{
    x: [-30, 0, -30], // Moves the image horizontally
    y: [-25, 0, -25], // Moves the image vertically
    transition: { duration: 4.1, repeat: Infinity },
  }}
/>

            <img src="/about-content.png" alt=""  style={{width:"30%"}}/>
            <motion.img 
  style={{ position: 'absolute', right: '-160px', bottom: '-18px',width:"20%",transform: 'translate(50%, 50%)',  }} 
  src="/images/chiddar2.png" 
  alt="" 
  animate={{
    x: [30, 0, 30], // Moves the image horizontally
    y: [25, 0, 25], // Moves the image vertically
    transition: { duration: 4.1, repeat: Infinity },
  }}
/>
                <Typography sx={{color:'white',textAlign:'center',fontSize: { xs: '12px', md: "16px" },}}> “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “ “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “  “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “  “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “
              </Typography>
              <Typography sx={{color:'white',textAlign:'center',mt:4,fontSize: { xs: '12px', md: "16px" },}}>“ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “ “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! </Typography>
             </Box>
             
            </Grid>
          
          </Grid>
          <img style={{ position:'absolute',
              bottom:'0px',
              left:'0px',
              right:'0px',width:"100%"}} src="/about.pouch.png" alt=""  />
             
          </Box>
          <Box sx={{ height:"auto",display:{xs:'flex',md:"none"},justifyContent:"center"}}>
          <Grid container spacing={2} sx={{display:'flex',justifyContent:"center",margin:"auto"}}>
            <Grid
              item
              xs={10}
              sx={{background:'#ffffff4f',borderRadius:"20px",p:2,  textAlign:'center',position:'relative'}}
            >
             <Box > 
           
             <motion.img 
  style={{ position: 'absolute', top: '-70px', right:"10px",width:"30%",transform: 'translate(50%, 50%)',  }} 
  src="/images/chiddar2.png" 
  alt="" 
  animate={{
    x: [30, 0, 30], // Moves the image horizontally
    y: [25, 0, 25], // Moves the image vertically
    transition: { duration: 4.1, repeat: Infinity },
  }}
/>
             <img src="/about-content.png" alt=""  style={{width:"30%"}}/>

                <Typography sx={{color:'white',textAlign:'center',fontSize: { xs: '12px', md: "16px" },}}> “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “ “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “  “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “  “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “
              </Typography>
              <Typography sx={{color:'white',textAlign:'center',mt:2,fontSize: { xs: '12px', md: "16px" },}}>“ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “ “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! </Typography>
             </Box>
             
            </Grid>
          <Grid  item
              xs={12} sx={{marginBottom:"80px",}}>
              
          <img style={{ width:"100%",margin:"auto"}} src="/about.pouch.png" alt=""  />

          </Grid>
          </Grid>
             
          </Box>
          <FixedBottomNavigation/>
        </Box>
  
    </>
  )
}

export default About