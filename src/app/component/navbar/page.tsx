"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ImageListItem, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';



const drawerWidth = 240;
const navItems = ['Home',   <span key="snacks">Our Snacks <i className="fas fa-angle-down mr:6" style={{marginRight:'15px'}}></i></span>,
,'About','Testimonial','Contact Us'];
export default function Navbar() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const {push}= useRouter()

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
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(true);
  };
  const handleDrawerToggleclose = () => {
    setMobileOpen(false);
  };
  const handlenavItems = (item) =>{
    if(item === 'Home'){
console.log('Home')
    }
  
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
    setAnchorEl(null); // Close the dropdown
  };
  const drawer = (
    <Box  sx={{ textAlign: 'center' }}>
       <Box sx={{display:'flex',justifyContent:'space-between',p:3,alignItems:'center'}}>
       <Box onClick={()=> push('/')} sx={{cursor:'pointer',}}>
         <img
                      src="/images/CrunchyBite-logo.png"
                      loading="lazy"
                     
                    /></Box>
                    <Box onClick={handleDrawerToggleclose} sx={{fontSize:"20px"}}>
                    <i className="fas fa-times"></i>
                    </Box>
                    </Box>
      <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          {typeof item === 'object' ? (
            <Box sx={{display: { xs: 'flex', sm: 'none' }}}>
              <ListItemButton
                sx={{ textAlign: 'center', textTransform: 'inherits', paddingRight: '10px' }}
                onClick={handleMenuOpen}
              >
                <ListItemText primary={item} />
              </ListItemButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                sx={{display: { xs: 'flex', sm: 'none' }}}
              >
                <MenuItem onClick={() => {push(`?index=0`); handleMenuClose(); handleDrawerToggleclose()}}>Fried Chicken</MenuItem>
                <MenuItem onClick={()=> {push(`?index=1`); handleMenuClose(); handleDrawerToggleclose()}}>Pizza</MenuItem>
                <MenuItem onClick={()=> {push(`?index=2`); handleMenuClose(); handleDrawerToggleclose()}}>Barbecue</MenuItem>
                <MenuItem onClick={()=> {push(`?index=3`); handleMenuClose(); handleDrawerToggleclose()}}>White Cheddar</MenuItem>
                <MenuItem onClick={()=> {push(`?index=4`); handleMenuClose(); handleDrawerToggleclose()}}>Chilli & Lemon</MenuItem>
                <MenuItem onClick={()=> {push(`?index=5`); handleMenuClose(); handleDrawerToggleclose()}}>Shish Kebab</MenuItem> 
                <MenuItem onClick={()=>{push(`?index=6`); handleMenuClose(); handleDrawerToggleclose()}}>Paprika</MenuItem>              
                </Menu>
            </Box>
          ) : (
            <ListItemButton sx={{ textAlign: 'start', textTransform: 'inherits', paddingRight: '10px' }} onClick={()=>handleNavigation(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          )}
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
         <Box onClick={()=> push('/')} sx={{cursor:'pointer'}}>
                    <img
                      src="/images/CrunchyBite-logo.png"
                      loading="lazy"
                      
                    />
                    </Box>
                    <Box sx={{color:'black',fontSize:"20px",display:{xs:'flex',md:'none'} }}  onClick={handleDrawerToggle}>                  
                    <i className="fas fa-bars "></i>
                          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
        <Box key={item} style={{ display: 'inline-block' }}>
          {typeof item === 'object' ? (
            <Box>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{
                  color: 'black',
                  textTransform: 'inherit',
                  fontSize: '18px',
                  fontFamily: 'Mali',
                }}
              >
                {item}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                  <MenuItem onClick={()=>  {push(`?index=0`); handleClose()}}>Fried Chicken</MenuItem>
                <MenuItem onClick={()=>  {push(`?index=1`); handleClose()}}>Pizza</MenuItem>
                <MenuItem onClick={()=>  {push(`?index=2`); handleClose()}}>Barbecue</MenuItem>
                <MenuItem onClick={()=> {push(`?index=3`); handleClose()}}>White Cheddar</MenuItem>
                <MenuItem onClick={()=>  {push(`?index=4`); handleClose()}}>Chilli & Lemon</MenuItem>
                <MenuItem onClick={()=>  {push(`?index=5`); handleClose()}}>Shish Kebab</MenuItem> 
                <MenuItem onClick={()=>  {push(`?index=6`); handleClose()}}>Paprika</MenuItem>    
              </Menu>
            </Box>
          ) : (
            <Button
            onClick={()=>handleNavigation(item)}
            sx={{ color: 'black',paddingRight:"40px",textTransform:"inherit",fontSize:'18px',fontFamily:"Mali" }}
            >
              {item}
            </Button>
          )}
        </Box>
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
