"use client";
import { Box, Button, CircularProgress, Grid, IconButton, Snackbar, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NavbarBG from "../component/navbar-bg/page";
import FixedBottomNavigation from "../component/footer/page";
import RHFInput from "../component/RHFInput";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "../component/navbar/page";

const Contact = () => {
  const validationSchema = yup.object().shape({
    mobile_no: yup.string().required('Mobile number is required.').matches(/^[0-9]{10}$/, 'Invalid mobile number.'),
    email_id: yup.string().required('Email ID is required.').matches(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/, 'Invalid email ID.'),
    full_name: yup.string().required('Name is required.'),
});

const defaultValues= {
    email_id: '',
    mobile_no: '',
    message: '',
    full_name: '',
};

const { control, handleSubmit, watch, formState: { errors }, setValue, setError,reset } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
});
const value = watch();
const [open, setOpen] = useState(false);
const [loading, setLoading] = useState(false);

const onSubmit = async (data) => {
  setLoading(true);
  try {
    let url='https://ski-api.praananutrition.com/api/contactUs'
    const response = await axios.post(url, data);
    if(response.status === 200){
      setOpen(true);
      setLoading(false);
      setTimeout(()=>{
        setOpen(false)
      },3000)
    }
    reset()
    return response.data;
  } catch (error) {
    throw error;
  }
};

  return (
    <>
        <Box sx={{backgroundColor:'#00C1B5',  height: '90vh',position:"absolute",left:0,right:0,top:0,bottom:0}}>
        <NavbarBG />

          {/* <svg style={{height:"95vh",width:"100%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,128L20,133.3C40,139,80,149,120,128C160,107,200,53,240,74.7C280,96,320,192,360,213.3C400,235,440,181,480,160C520,139,560,149,600,128C640,107,680,53,720,69.3C760,85,800,171,840,181.3C880,192,920,128,960,96C1000,64,1040,64,1080,74.7C1120,85,1160,107,1200,112C1240,117,1280,107,1320,90.7C1360,75,1400,53,1420,42.7L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg> */}
          {/* <Box
          sx={{display:{xs:'none',md:"flex"} ,position: "absolute", top: "0px", left: "0px", right: "0px" }}
        >
          <motion.img
            style={{ width: "100%",}}
            src="/images/bg-white.png"
            alt=""

            animate={{
              y: [-15, 0, -15],
              transition: { duration: 3.1, repeat: Infinity },
            }}
          />
        </Box> */}
        <Box
          sx={{display:{xs:'flex',md:"none"}, position: "absolute", top: "0px", left: "0px", right: "0px" }}
        >
          <motion.img
            style={{ width: "100%",}}
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
          }}>
       <Box  >
       <Grid
  container
  className='contact'
  sx={{
    height: { xs: '70vh', md: 'auto' },
    overflow: 'auto',
    width:{xs:"95%",md:'80%'},
    borderRadius:'20px',
    background: "#99f1eb87 ",
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: 3,
    display: 'flex',
    justifyContent: 'center', 
  }}
>
  <Grid xs={12} item>
    <Box sx={{ textAlign: "center", }}>
      <img src="/contact-content.png" alt="" className="contact-content" style={{ textAlign: 'center' }} />
    </Box>
    <Typography sx={{ fontFamily: "Mali", fontSize: { xs: '14px', md: '18px' }, color: "black", textAlign: "center", fontWeight: 'bold',pb:2 }}>Get in Touch - We're Here to Hear Your Crunchy Bites Stories!"</Typography>
  </Grid>
  <Grid
    item
    xs={12}
    sm={6}
    sx={{ textAlign: 'center' }}
  >
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container  sx={{ display: "flex", justifyContent: "center", padding: 0, margin: 0 }}>
        <Grid item xs={12}>
          <RHFInput control={control} sx={{  mb: { xs: 1, md: 1 } }} fullWidth name="full_name" placeholder='Enter Full Name' />
        </Grid>
        <Grid item xs={12} md={6}>
          <RHFInput control={control} sx={{  mb: { xs: 1, md: 1 } }} fullWidth name="email_id" placeholder='Email ID' />
        </Grid>
        <Grid item xs={12} md={6}>
          <RHFInput control={control} sx={{  mb: { xs: 1, md: 1 } }} fullWidth name="mobile_no" placeholder='Mobile Number' />
        </Grid>
        <Grid item xs={12}>
          <RHFInput control={control} sx={{  mb: { xs: 1, md: 1 } }} fullWidth name="message" placeholder='Message' multiline rows={4} />
        </Grid>
        <Grid item xs={12}>
          <Button
            type='submit'
            sx={{
              width: '100%',
              backgroundColor: '#FEC92F',
              color: 'white',
              p: 2,
              '&:hover': {
                backgroundColor: '#FEC92F',
              }
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
          </Button>
        </Grid>
      </Grid>
    </form>
  </Grid>
  <Grid item md={6} sx={{display:{xs:'none',md:'block'}}}>
<img src="/bus.png" alt="" />
  </Grid>
</Grid>


       </Box>
        </Box>
        <FixedBottomNavigation />

      <Snackbar
  open={open}
  autoHideDuration={3000}
  message="Message sent successfully"
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right'
  }}
/>

    </>
  );
};

export default Contact;
