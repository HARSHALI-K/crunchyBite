import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Button, Grid } from '@mui/material';


const navItems = ['Home', 'Our Products','Media','About','Contact Us'];
const navlinks = ['Privacy Policy', 'Disclaimer','@ Crunchy Bite - All rights reserved',];


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

 

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 , }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{backgroundColor:"#191919"}}
          
        >
           <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',fontFamily:"Quicksand" }}>
  <Grid item md={4}>
    {navItems.map((item) => (
      <Button key={item} sx={{ color: '#ffff', paddingRight: "10px", textTransform: "inherit", fontSize: '14px', }}>
        {item}
      </Button>
    ))}
  </Grid>
  <Grid item md={4} sx={{ textAlign: "center" }}>
    <div className="social-icons" style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="#">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </Grid>
  <Grid item md={4}>
    {navlinks.map((item) => (
      <Button key={item} sx={{ color: '#ffff', paddingRight: "10px", textTransform: "inherit", fontSize: '14px', fontFamily:"Quicksand"}}>
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
