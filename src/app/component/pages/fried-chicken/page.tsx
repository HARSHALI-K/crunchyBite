"use client";

import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const FriedChicken = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "black", overflow: "hidden" }}>
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
            alt="fried chicken crunchy bite"
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
            alt="fried chicken crunchy bite"
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
          backgroundImage: `url("/images/bg-brown.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "60vh", // or adjust the height as needed
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} sm={6} className="sticker">
            <motion.img
              className="sticker-width"
              src="/images/fried-sticker.png"
              alt="fried chicken crunchy bite"
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <Box className="content">
              <motion.img
                className="content-width"
                src="/images/fried-content.png"
                alt="fried chicken crunchy bite"
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </Box>
            <Box sx={{ position: "absolute", right: "0px", bottom: "-270px" }}>
              <motion.img
                className="ring-width"
                src="/images/chicken3.png"
                alt="fried chicken crunchy bite"
                animate={{
                  y: [-10, 0, -10],
                  transition: { duration: 3.1, repeat: Infinity },
                }}
              />
            </Box>
            <Box
              sx={{ position: "absolute", left: "-141px", bottom: "-131px" }}
            >
              <motion.img
                className="ring-width"
                src="/images/chiken5.png"
                alt="fried chicken crunchy bite"
                animate={{
                  y: [-10, 0, -10],
                  transition: { duration: 2.1, repeat: Infinity },
                }}
              />
            </Box>
            <Box sx={{ position: "absolute", left: "9px", bottom: "-30px" }}>
              <motion.img
                className="ring-width"
                src="/images/ring1.png"
                alt="fried chicken crunchy bite"
                animate={{
                  y: [-10, 0, -10],
                  transition: { duration: 2.1, repeat: Infinity },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className="pouch">
            <motion.img
              className="pouch-width"
              src="/images/FriedChicken.png"
              alt="fried chicken crunchy bite"
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            <Box sx={{ position: "relative" }}>
              <Box
                sx={{ position: "absolute", right: "-50px", bottom: "341px" }}
              >
                <motion.img
                  style={{ width: "100%" }}
                  src="/images/ring1.png"
                  alt="fried chicken crunchy bite"
                  animate={{
                    y: [-10, 0, -10],
                    transition: { duration: 2.1, repeat: Infinity },
                  }}
                />
              </Box>
              <Box
                sx={{ position: "absolute", right: "-360px", bottom: "-30px" }}
              >
                <motion.img
                  style={{ width: "70%" }}
                  src="/images/ring3.png"
                  alt="fried chicken crunchy bite"
                  animate={{
                    y: [-10, 0, -10],
                    transition: { duration: 2.1, repeat: Infinity },
                  }}
                />
              </Box>
              <Box
                sx={{ position: "absolute", left: "-10%", bottom: "-90%" }}
              >
                   <motion.img 
  style={{width:"100%",transform: 'translate(50%, 50%)',  }} 
  src="/images/chicken_logo.png" 
  alt="fried chicken crunchy bite" 
  animate={{
    x: [10, 0, 10], 
    y: [15, 0, 15], 
    transition: { duration: 4.1, repeat: Infinity },
  }}
/>
              </Box>
              <Box sx={{ position: "absolute", right: "0px", bottom: "200px" }}>
                <motion.img
                  style={{ width: "100%" }}
                  src="/images/ring2.png"
                  alt="fried chicken crunchy bite"
                  animate={{
                    y: [-10, 0, -10],
                    transition: { duration: 2.1, repeat: Infinity },
                  }}
                />
              </Box>
              <Box
                sx={{ position: "absolute", left: "-195px", bottom: "94px" }}
              >
                <motion.img
                  className="ring-width"
                  src="/images/ring6.png"
                  alt="fried chicken crunchy bite"
                  animate={{
                    y: [-10, 0, -10],
                    transition: { duration: 2.1, repeat: Infinity },
                  }}
                />
              </Box>
              <Box
                sx={{ position: "absolute", left: "-135px", bottom: "404px" }}
              >
                <motion.img
                  className="ring-width"
                  src="/images/ring6.png"
                  alt="fried chicken crunchy bite"
                  animate={{
                    y: [-10, 0, -10],
                    transition: { duration: 2.1, repeat: Infinity },
                  }}
                />
              </Box>
              <Box
                sx={{ position: "absolute", right: "-195px", bottom: "10px" }}
              >
                <motion.img
                  style={{ width: "100%" }}
                  src="/images/chicken1.png"
                  alt="fried chicken crunchy bite"
                  animate={{
                    y: [-10, 0, -10],
                    transition: { duration: 2.1, repeat: Infinity },
                  }}
                />
              </Box>
              <Box
                sx={{ position: "absolute", left: "-170px", bottom: "70px" }}
              >
                <motion.img
                  style={{ width: "100%" }}
                  src="/images/chicken2.png"
                  alt="fried chicken crunchy bite"
                  animate={{
                    y: [-10, 0, -10],
                    transition: { duration: 2.1, repeat: Infinity },
                  }}
                />
              </Box>
              {/* <Box
                sx={{ position: "absolute", left: "-51px", bottom: "-40px" }}
              >
                <motion.img
                  className="ring-width"
                  src="/images/ring5.png"
                  alt=""
                  animate={{
                    y: [-10, 0, -10],
                    transition: { duration: 2.1, repeat: Infinity },
                  }}
                />
              </Box> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FriedChicken;
