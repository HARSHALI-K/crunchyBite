"use client";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import NavbarBG from "../component/navbar-bg/page";
import FixedBottomNavigation from "../component/footer/page";
import Navbar from "../component/navbar/page";

const About = () => {
  return (
    <>
      {/* <Box sx={{backgroundColor:'black',height:'auto', }}>
        <NavbarBG/>
          <Box sx={{zIndex:'999',width:'100%'}}
         
        >
          <motion.img
      style={{ width: "100%", }}
      src="/bg-white.png"
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
        </Box> */}
      <Box
        sx={{
          backgroundColor: "#5D42FF",
          height: "90vh",
          positiom: "relative",
        }}
      >
        <Navbar />

        {/* <svg style={{height:"95vh",width:"100%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,128L20,133.3C40,139,80,149,120,128C160,107,200,53,240,74.7C280,96,320,192,360,213.3C400,235,440,181,480,160C520,139,560,149,600,128C640,107,680,53,720,69.3C760,85,800,171,840,181.3C880,192,920,128,960,96C1000,64,1040,64,1080,74.7C1120,85,1160,107,1200,112C1240,117,1280,107,1320,90.7C1360,75,1400,53,1420,42.7L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg> */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
          }}
        >
          <motion.img
            style={{ width: "100%" }}
            src="/images/bg-white.png"
            alt=""
            animate={{
              y: [-15, 0, -15],
              transition: { duration: 3.1, repeat: Infinity },
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
          }}
        >
          <motion.img
            style={{ width: "100%" }}
            src="/images/bg-mobile.png"
            alt=""
            animate={{
              y: [-15, 0, -15],
              transition: { duration: 3.1, repeat: Infinity },
            }}
          />
        </Box>
      </Box>{" "}
      <Box
        sx={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          right: "0px",
          backgroundImage: `url("/images/bg-pizza.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "60vh", 
        }}
      >
        <Box >
          <Grid
            container
            className="contact"
            sx={{
              p: { xs: 1, md: 4 },
              pb: 8,display:'flex',justifyContent: 'center',
            }}
          >
            <Grid
              sx={{background:{ xs:'#1f1e249e',md:"#5d42ff9e"},  p: { xs: 4, md: 8 } ,height:{xs:'70vh',md:'auto'},overflow: 'auto'}}
              item
              xs={12} md={8}
            >
              <Box sx={{mb:2}}>
              <img
                src="/about-content.png"
                alt=""
                className="about-width"
                style={{ textAlign: "center",display:'flex',margin:'auto', }}
              />
              </Box>

              <Box >
                <Box sx={{  display: { xs: "none", md: "flex" },}}>
                <motion.img
                  style={{
                    position: "absolute",
                    left: "58px",
                    top: "-38px",
                    width: "20%",
                  }}
                  src="/images/pizza-icon.png"
                  alt=""
                  animate={{
                    x: [-30, 0, -30], // Moves the image horizontally
                    y: [-25, 0, -25], // Moves the image vertically
                    transition: { duration: 4.1, repeat: Infinity },
                  }}
                />

                <motion.img
                  style={{
                    position: "absolute",
                    right: "73px",
                    bottom: "-18px",
                    transform: "translate(50%, 50%)",
                  }}
                  src="/images/chiddar2.png"
                  alt=""
                  animate={{
                    x: [30, 0, 30], 
                    y: [25, 0, 25], 
                    transition: { duration: 4.1, repeat: Infinity },
                  }}
                />
                </Box>
                <Typography
                  sx={{
                    color: "white",
                    textAlign: "center",
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  {" "}
                  “ Crunchy Bites snacks are my go-to choice for satisfying my
                  cravings! Whether it's their zesty BBQ flavor or their classic
                  sea salt, each bite is packed with crunch and deliciousness! “
                  “ Crunchy Bites snacks are my go-to choice for satisfying my
                  cravings! Whether it's their zesty BBQ flavor or their classic
                  sea salt, each bite is packed with crunch and deliciousness! “
                  “ Crunchy Bites snacks are my go-to choice for satisfying my
                  cravings! Whether it's their zesty BBQ flavor or their classic
                  sea salt, each bite is packed with crunch and deliciousness! “
                  “ Crunchy Bites snacks are my go-to choice for satisfying my
                  cravings! Whether it's their zesty BBQ flavor or their classic
                  sea salt, each bite is packed with crunch and deliciousness! “
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    textAlign: "center",
                    mt: 4,
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  “ Crunchy Bites snacks are my go-to choice for satisfying my
                  cravings! Whether it's their zesty BBQ flavor or their classic
                  sea salt, each bite is packed with crunch and deliciousness! “
                  “ Crunchy Bites snacks are my go-to choice for satisfying my
                  cravings!{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <FixedBottomNavigation />
    </>
  );
};

export default About;
