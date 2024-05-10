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
const navItems = ['Home', 'Our Snacks','About','Contact Us'];
export default function Navbar() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const {push}= useRouter()

const handleNavigation = (item)=>{
  if(item ==='Home'){
    push('/')
  }
  if(item ==='About'){
    push('/about')
  }
  if(item ==='Contact Us'){
    push('/contact')
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
    // Implement your logic when an item is clicked
    setAnchorEl(null); // Close the dropdown
  };
  const drawer = (
    <Box  sx={{ textAlign: 'center' }}>
       <Box sx={{display:'flex',justifyContent:'space-between',p:3,alignItems:'center'}}> <img
                      src="/images/CrunchyBite-logo.png"
                      loading="lazy"
                      style={{width:'30%'}}
                      
                    />
                    <Box onClick={handleDrawerToggleclose} sx={{fontSize:"20px"}}>
                    <i className="fas fa-times"></i>

                    </Box>

                    </Box>
      <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          {item === 'Our Snacks' ? (
            <div>
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
              >
                <MenuItem onClick={() => push(`?index=1`)}>Fried Chicken</MenuItem>
                <MenuItem onClick={()=> push(`?index=2`)}>Pizza</MenuItem>
                <MenuItem onClick={()=> push(`?index=3`)}>Barbecue</MenuItem>
                <MenuItem onClick={()=> push(`?index=4`)}>White Cheddar</MenuItem>
                <MenuItem onClick={()=> push(`?index=5`)}>Chilli & Lemon</MenuItem>
                <MenuItem onClick={()=> push(`?index=6`)}>Shish Kebab</MenuItem> 
                <MenuItem onClick={()=> push(`?index=7`)}>Paprika</MenuItem>              
                </Menu>
            </div>
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
      <AppBar component="nav" sx={{backgroundColor:'white',}}>

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
            component="Box"
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
                      src="/images/CrunchyBite-logo.png"
                      loading="lazy"
                      
                    />
                    <Box sx={{color:'black',fontSize:"20px",display:{xs:'flex',md:'none'} }}  onClick={handleDrawerToggle}>                  
                    <i className="fas fa-bars "></i>
                          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
        <div key={item} style={{ display: 'inline-block' }}>
          {item === 'Our Snacks' ? (
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{
                  color: 'black',
                  textTransform: 'inherit',
                  fontSize: '18px',
                  fontFamily: 'Mali',
                  paddingRight:'10px'
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
                  <MenuItem onClick={()=>  push(`?index=1`)}>Fried Chicken</MenuItem>
                <MenuItem onClick={()=>  push(`?index=2`)}>Pizza</MenuItem>
                <MenuItem onClick={()=>  push(`?index=3`)}>Barbecue</MenuItem>
                <MenuItem onClick={()=> push(`?index=4`)}>White Cheddar</MenuItem>
                <MenuItem onClick={()=>  push(`?index=5`)}>Chilli & Lemon</MenuItem>
                <MenuItem onClick={()=>  push(`?index=6`)}>Shish Kebab</MenuItem> 
                <MenuItem onClick={()=>  push(`?index=7`)}>Paprika</MenuItem>    
              </Menu>
            </div>
          ) : (
            <Button
            onClick={()=>handleNavigation(item)}
            sx={{ color: 'black',paddingRight:"40px",textTransform:"inherit",fontSize:'18px',fontFamily:"Mali" }}
            >
              {item}
            </Button>
          )}
        </div>
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
