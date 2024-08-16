
"use client"
import { Box, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import NavbarBG from '../component/navbar-bg/page'
import FixedBottomNavigation from '../component/footer/page'

const About = () => {
  return (
    <>
  <Box sx={{backgroundColor:'black',height:'auto', position:"absolute",left:0,right:0,top:0,bottom:0}}>
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
        
        <Box sx={{position:'relative',display:{xs:'none',md:"flex"}}} className='height-about'>
          <Grid container spacing={2} sx={{}}>
            <Grid
              item
              xs={10}
              sm={8}
              sx={{background:'#ffffff4f',borderRadius:"20px",p:6,  textAlign:'center',margin:'auto'}}
              className='top-about'
            >
             <Box > 
             <motion.img 
  style={{ position: 'absolute', left: '-66px', top: '-38px',width:"20%" }} 
  src="/images/pizza-icon.png" 
  alt="pizza crunchy bite" 
  animate={{
    x: [-30, 0, -30], // Moves the image horizontally
    y: [-25, 0, -25], // Moves the image vertically
    transition: { duration: 4.1, repeat: Infinity },
  }}
/>

            <img src="/about-content.png" alt="about crunchy bite"  style={{width:"30%"}}/>
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
               
<Typography sx={{color:'white',textAlign:'center',fontSize: { xs: '12px', md: "16px" },}}> Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness. Crunchy Bites snacks, marketed by THE SNACK BOAT GENERAL TRADING LLC, are known for their exceptional taste and quality.

Crunchy Bites are not just another snack; they are the crunch that stands out. Our crunchy products are freshly seasoned to perfection, ensuring that every bite delivers a burst of flavor and satisfaction. From the tangy zest of Barbecue to the rich taste of White Cheddar, Crunchy Bites has a flavor for every palate.

In addition to these classic flavors, Crunchy Bites also offers a variety of exciting options like Fried Chicken, Paprika, Pizza, Chilli and Lemon, and Shish & Kebab. Each flavor is crafted to deliver a unique and delicious snacking experience.
              </Typography>
              <Typography sx={{color:'white',textAlign:'center',mt:2,fontSize: { xs: '12px', md: "16px" },}}>Whether you're enjoying a movie night, packing a lunch, or just in need of a quick and tasty snack, Crunchy Bites is the perfect choice. Experience the delicious crunch that everyone is talking about!

Crunchy Bites are more than just a snack; they are a flavor adventure waiting to be enjoyed. Try all our exciting flavors today and discover your favorite!  </Typography>
             </Box>
             
            </Grid>
          
          </Grid>
          <img style={{ position:'absolute',
              bottom:'0px',
              left:'0px',
              right:'0px',width:"100%"}} src="/about.pouch.png" alt="about crunchy bite"  />
             
          </Box>
          <Box sx={{ height:"auto",display:{xs:'flex',md:"none"},justifyContent:"center",flexDirection:'column'}}>
          <Grid container  sx={{display:'flex',justifyContent:"center",margin:"auto"}}>
            <Grid
              item
              xs={10}
              sx={{background:'#ffffff4f',borderRadius:"20px",p:2,  textAlign:'center',position:'relative',marginTop:"-20%"}}
            >
             <Box > 
           
             <motion.img 
  style={{ position: 'absolute', top: '-9%', right:"10px",width:"23%",transform: 'translate(50%, 50%)',  }} 
  src="/images/chiddar2.png" 
  alt="" 
  animate={{
    x: [10, 0, 10], 
    y: [15, 0, 15], 
    transition: { duration: 4.1, repeat: Infinity },
  }}
/>
             <img src="/about-content.png" alt="about crunchy bite"  style={{width:"30%"}}/>

                <Typography sx={{color:'white',textAlign:'center',fontSize: { xs: '12px', md: "16px" },}}> Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness. Crunchy Bites snacks, marketed by THE SNACK BOAT GENERAL TRADING LLC, are known for their exceptional taste and quality.

Crunchy Bites are not just another snack; they are the crunch that stands out. Our crunchy products are freshly seasoned to perfection, ensuring that every bite delivers a burst of flavor and satisfaction. From the tangy zest of Barbecue to the rich taste of White Cheddar, Crunchy Bites has a flavor for every palate.

In addition to these classic flavors, Crunchy Bites also offers a variety of exciting options like Fried Chicken, Paprika, Pizza, Chilli and Lemon, and Shish & Kebab. Each flavor is crafted to deliver a unique and delicious snacking experience.
              </Typography>
              <Typography sx={{color:'white',textAlign:'center',mt:2,fontSize: { xs: '12px', md: "16px" },}}>Whether you're enjoying a movie night, packing a lunch, or just in need of a quick and tasty snack, Crunchy Bites is the perfect choice. Experience the delicious crunch that everyone is talking about!

Crunchy Bites are more than just a snack; they are a flavor adventure waiting to be enjoyed. Try all our exciting flavors today and discover your favorite!  </Typography>
             </Box>
             
            </Grid>
         <Grid item xs={12} sx={{backgroundColor:'black'}}>
                    <img style={{ width:"100%",margin:"auto",paddingBottom:'20%'}} src="/about.pouch.png" alt="about crunchy bite"  />

         </Grid>
          </Grid>

          </Box>
          <div className="floating-whatsapp-icon">
      <motion.a 
      href="https://wa.me/971521746423" 
      target="_blank" 
        rel="noopener noreferrer" 
        animate={{
          y: [-10, 0, -10],
          transition: { duration: 2.1, repeat: Infinity },
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#25d366",
          borderRadius: "50%",
          color: "white",
          textAlign: "center",
          fontSize: "30px",
          boxShadow: "2px 2px 3px #999",
        }}
      >
        <i className="fab fa-whatsapp" style={{color:'white'}}></i>
      </motion.a>
    </div>
          <FixedBottomNavigation/>
        </Box>
  
    </>
  )
}

export default About