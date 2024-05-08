"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ImageListItem } from '@mui/material';



const drawerWidth = 240;
const navItems = ['Home', 'Our Snacks', 'Media','About','Contact Us'];
export default function Navbar() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center',textTransform: 'inherits', paddingRight:'10px' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ backgroundColor:'red',}}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:'transparent',boxShadow:'none'}}>

      <Toolbar sx={{ 
  width: "90%", 
  margin: 'auto', 
  paddingTop: "10px",
  display:'flex',
  justifyContent:"space-between"

}}>
 
          {/* <IconButton
            color="inherit" background-color:transparent;
  box-shadow: none;
}
            aria-label="open dra6er"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
mui          </IconButton> */}
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
             <ImageListItem >
                    <img
src="images/CrunchyBite_logo.png"                      loading="lazy"
                    />
                  </ImageListItem>
            <img src="images/CrunchyBite_logo.png" alt="" />
          </Typography> */}
       
                    <img
                      src="/images/crunchybite_logo.png"
                      loading="lazy"
                    />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black',paddingRight:"40px",textTransform:"inherit",fontSize:'18px',fontFamily:"Mali" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     
    </Box>
  );
}
