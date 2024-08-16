"use client";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import NavbarBG from "../component/navbar-bg/page";
import FixedBottomNavigation from "../component/footer/page";
import Navbar from "../component/navbar/page";

const Testimonial = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#59A125 ",
          height: "90vh",
          position:"absolute",left:0,right:0,top:0,bottom:0
        }}
      >
        <NavbarBG />
        {/* <Box
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
        </Box> */}
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
            className="contact-testimonial"
            sx={{
              p: { xs: 1, md: 4 },
              height: { xs: 'auto', md: 'auto' },
              overflow: 'auto',
              width:"80%",
              borderRadius:'20px',
              background:{ xs:'#1f1e249e',md:"#c4fc9c5e "},
              marginRight: 'auto',
              marginLeft: 'auto',
              padding: 3,
              display: 'flex',
              justifyContent: 'center', // Centering horizontally and vertically
                      }}
          >
            <Grid
              item
              xs={12} md={8}
            >
              <Box sx={{mb:2,pt:2}}>
              <img
                src="/testimonial-content.png"
                alt="testimonial crunchy bite"
                className="testimonial-content"
                style={{ textAlign: "center",display:'flex',margin:'auto', }}
              />
              </Box>
              <Box >
                <Typography
                  sx={{
                    color: "white",
                    textAlign: "center",
                    fontSize: { xs: "14px", md: "20px" },
                    fontWeight:"bold",
                  }}
                >
                 “ Crunchy Bites snacks are my go-to choice for satisfying my cravings! Whether it's their zesty BBQ flavor or their classic sea salt, each bite is packed with crunch and deliciousness! “
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    textAlign: "center",
                    mt: 4,
                    fontSize: { xs: "15px", md: "18px" },
                    fontWeight: "bold"
                  }}
                >
                 Jennifer Martinez
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    textAlign: "center",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                   Product Designer                
                   </Typography>
                   {/* <Box sx={{mb:2}}>
                    <img src="/testimonial-img.png" alt="" className="testimonial-width"/>
                   </Box> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
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

      <FixedBottomNavigation />
    </>
  );
};

export default Testimonial;
