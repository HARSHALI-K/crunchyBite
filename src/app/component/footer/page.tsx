"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import '@fortawesome/fontawesome-free/css/all.css'

const navItems = ["Home", "Our Snacks", "About",'Testimonial' ,"Contact Us"];
const navlinks = [
  "Privacy Policy",
  "Disclaimer",
  "@ Crunchy Bite - All rights reserved",
];


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
 const {push} =useRouter();
  const handleNavigation = (item)=>{
    console.log(item)
    if(item ==='Home'){
      push('/')
    }
    if(item ==='About'){
      push('/about')
    }
    if(item ==='Contact Us'){
      push('/contact')
    }
    if(item ==='Testimonial'){
      push('/testimonial')
    }
  }


  return (
    <Box sx={{  }} ref={ref}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ backgroundColor: "#191919" ,}}
          className="footer-height"
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: {md:"space-between",xs:'center'},
              alignItems: "center",
              fontFamily: "Mali",
            }}
          >
            <Grid item md={4} sx={{display:{xs:"none",md:'flex'}}}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={()=>handleNavigation(item)}
                  sx={{
                    color: "#ffff",
                    paddingRight: "10px",
                    textTransform: "inherit",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Grid>
            <Grid item  md={4} sx={{ textAlign: "center",paddingTop:"0px" ,display:{xs:"none",md:'flex'},justifyContent:'center' ,order:{xs:'2',md:'2'}}}>
              <Box
                className="social-icons"
                style={{ display: "flex", justifyContent: "center",color:'white' }}
              >
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f" style={{color:'white'}}></i>
                </a>

                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" style={{color:'white'}}></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram" style={{color:'white'}}></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in" style={{color:'white'}}></i>
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{textAlign: "center",order:{xs:'1',md:'3'}}}>
              {navlinks.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#ffff",
                    paddingRight: {xs:"2px",md:'10px'},
                    textTransform: "inherit",
                    fontSize: {xs:'12px',md:"12px",xl:'14px'},
                    fontFamily: "Mali", cursor:'pointer',
                  }} 
                >
                  {item}
                </Button>
              ))}
            </Grid>
          </Grid>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
