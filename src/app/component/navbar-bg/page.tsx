"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ImageListItem, Link, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import '@fortawesome/fontawesome-free/css/all.css'

const drawerWidth = 240;
const navItems = [
  { label: "Home", link: "https://crunchy-bite.vercel.app" },
  { 
    label: (
      <span key="snacks">
        Our Snacks{" "}
        <i className="fas fa-angle-down" style={{ marginRight: "15px" }}></i>
      </span>
    ), 
    subItems: [
      { label: "Fried Chicken", link: "https://crunchy-bite.vercel.app/?index=0" },
      { label: "Pizza", link: "https://crunchy-bite.vercel.app/?index=1" },
      { label: "Barbecue", link: "https://crunchy-bite.vercel.app/?index=2" },
      { label: "White Cheddar", link: "https://crunchy-bite.vercel.app/?index=3" },
      { label: "Chilli & Lemon", link: "https://crunchy-bite.vercel.app/?index=4" },
      { label: "Shish Kebab", link: "https://crunchy-bite.vercel.app/?index=5" },
      { label: "Paprika", link: "https://crunchy-bite.vercel.app/?index=6" },
    ],
  },
  { label: "About", link: "https://crunchy-bite.vercel.app/about" },
  { label: "Testimonial", link: "https://crunchy-bite.vercel.app/testimonial" },
  { label: "Blog", link: "https://crunchy-bite.vercel.app/blog" },
  { label: "Contact Us", link: "https://crunchy-bite.vercel.app/contact" },
];
const navItemsMobile = [
  "Home",
  <span key="snacks">
    Our Snacks{" "}
    <i className="fas fa-angle-down mr:6" style={{ marginRight: "15px" }}></i>
  </span>,
  ,
  "About",
  "Testimonial",
  "Blog",
  "Contact Us",
];
export default function NavbarBG() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const { push } = useRouter();
  const handleNavigationMobile = (item) => {
    console.log(item);
    if (item === "Home") {
      push("/");
    }
    if (item === "About") {
      push("/about");
    }
    if (item === "Contact Us") {
      push("/contact");
    }
    if (item === "Blog") {
      push("/blog");
    }
    if (item === "Testimonial") {
      push("/testimonial");
    }
  };
  const handleNavigation = (item) => {
    console.log(item);

    if (item.link) {
      push(item.link); // Assuming `push` is your navigation function
    }

    // if (item === "Home") {
    //   push("/");
    // }
    // if (item === "About") {
    //   push("/about");
    // }
    // if (item === "Contact Us") {
    //   push("/contact");
    // }
    // if (item === "Blog") {
    //   push("/blog");
    // }
    // if (item === "Testimonial") {
    //   push("/testimonial");
    // }
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(true);
  };
  const handleDrawerToggleclose = () => {
    setMobileOpen(false);
  };
  const handlenavItems = (item) => {
    if (item === "Home") {
      console.log("Home");
    }
  };
  const [openMenu, setOpenMenu] = React.useState(null);

  const handleClick = (event,label) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(label);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
    setAnchorEl(null); // Close the dropdown
  };
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 3,
          alignItems: "center",
        }}
      >
        <Box onClick={() => push("/")} sx={{ cursor: "pointer" }}>
          <img src="/images/CrunchyBite-logo.png" loading="lazy" alt="crunchy bite"/>
        </Box>
        <Box onClick={handleDrawerToggleclose} sx={{ fontSize: "20px" }}>
          <i className="fas fa-times"></i>
        </Box>
      </Box>
      <List>
        {navItemsMobile.map((item) => (
          <ListItem key={item} disablePadding>
            {typeof item === "object" ? (
              <Box sx={{ display: { xs: "flex", sm: "none" } }}>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    textTransform: "inherits",
                    paddingRight: "10px",
                  }}
                  onClick={handleMenuOpen}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  sx={{ display: { xs: "flex", sm: "none" } }}
                >
                  <MenuItem
                    onClick={() => {
                      push(`/?index=0`);
                      handleMenuClose();
                      handleDrawerToggleclose();
                    }}
                  >
                    Fried Chicken
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      push(`/?index=1`);
                      handleMenuClose();
                      handleDrawerToggleclose();
                    }}
                  >
                    Pizza
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      push(`/?index=2`);
                      handleMenuClose();
                      handleDrawerToggleclose();
                    }}
                  >
                    Barbecue
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      push(`/?index=3`);
                      handleMenuClose();
                      handleDrawerToggleclose();
                    }}
                  >
                    White Cheddar
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      push(`/?index=4`);
                      handleMenuClose();
                      handleDrawerToggleclose();
                    }}
                  >
                    Chilli & Lemon
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      push(`/?index=5`);
                      handleMenuClose();
                      handleDrawerToggleclose();
                    }}
                  >
                    Shish Kebab
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      push(`/?index=6`);
                      handleMenuClose();
                      handleDrawerToggleclose();
                    }}
                  >
                    Paprika
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <ListItemButton
                sx={{
                  textAlign: "start",
                  textTransform: "inherits",
                  paddingRight: "10px",
                }}
                onClick={() => handleNavigationMobile(item)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "red" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: {xs:'transparent',md:"#000000"},boxShadow:{xs:'none'}}}
      >
        <Toolbar
          sx={{
            width: "90%",
            margin: "auto",
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box onClick={() => push("/")} sx={{ cursor: "pointer" }}>
            <img src="/images/CrunchyBite-logo.png" loading="lazy" alt/>
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "20px",
              display: { xs: "flex", md: "none" },
            }}
            onClick={handleDrawerToggle}
          >
            <i className="fas fa-bars "></i>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Box>
      {navItems.map((item, index) => (
        <Box
          key={index}
          style={{ display: "inline-block" }}
          onMouseLeave={handleClose}
        >
          {item.subItems ? (
            <Box
              onMouseEnter={(event) => handleClick(event, item.label)}
              style={{ position: 'relative' }}
              component={Link}
            >
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"  
                onClick={(event) => handleClick(event, item.label)}
                sx={{ color: { xs: "black", md: "white" } }}
                style={{
                  textTransform: "inherit",
                  fontSize: "18px",
                  fontFamily: "Mali",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl) && openMenu === item.label}
                onClose={handleClose}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <MenuItem

                    key={subIndex}
                    onClick={() => handleNavigation(subItem)}
                  >
                    {subItem.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button
              onClick={() => handleNavigation(item)}
              sx={{
                color: { xs: "black", md: "white" },
                paddingRight: "40px",
                textTransform: "inherit",
                fontSize: "18px",
                fontFamily: "Mali",
              }}
              href={item.link}
            >
              {item.label}
            </Button>
          )}
        </Box>
      ))}
    </Box>

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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
