"use client";
import { Box, Button, Grid, IconButton, Snackbar, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NavbarBG from "../component/navbar-bg/page";
import FixedBottomNavigation from "../component/footer/page";
import RHFInput from "../component/RHFInput/page";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

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

const onSubmit = async (data) => {
  try {
    let url='https://ski-api.praananutrition.com/api/contactUs'
    const response = await axios.post(url, data);
    if(response.status === 200){
      setOpen(true);
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
      <Box sx={{ backgroundColor: "black", height: "auto" }}>
        <NavbarBG />
        <Box sx={{ zIndex: "999", width: "100%" }}>
          <motion.img
            style={{ width: "100%" }}
            src="/bg-contact.png"
            alt=""
            animate={{
              y: [-15, 0, -15],
              transition: { duration: 3.1, repeat: Infinity },
            }}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            height: "auto",ml:12,mr:12,
            display: { xs: "none", md: "flex" },
          }}
        >
          <Grid container spacing={2} sx={{
                background: "#ffffff4f",
                borderRadius: "20px",
                p: 6,
                position: "absolute",
                top: "-650px",
                left: "0px",
                right: "0px",
                textAlign: "center",
                margin: "auto",
              }}>
                <Grid xs={12} item>
                <img src="/contact-content.png" alt=""  style={{width:"30%"}}/>
                <Typography sx={{fontFamily:"Mali",fontSize:'20px',color:"black",textAlign:"center",fontWeight:'bold'}}>Get in Touch - We're Here to Hear Your Crunchy Bites Stories!"</Typography></Grid>
           <Grid
              item
              xs={6}
              
            >
                         <form onSubmit={handleSubmit(onSubmit)}>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                <RHFInput control={control} sx={{  mb: 1 ,mt:1 }} fullWidth name="full_name" placeholder='Enter Full Name'  />

                </Grid>
                <Grid item xs={6}>
                <RHFInput control={control} sx={{  mb: 1 ,mt:1 }} fullWidth name="email_id" placeholder='Email ID'  />

                </Grid> 
                <Grid item xs={6}>
                <RHFInput control={control} sx={{  mb: 1 ,mt:1 }} fullWidth name="mobile_no" placeholder='Mobile Number'  />

                </Grid> 
                <Grid item xs={12}>
                <RHFInput control={control} sx={{  mb: 1 ,mt:1 }} fullWidth name="message" placeholder='Message'  multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                <Button 
  type='submit' 
  sx={{
    width: '100%',
    backgroundColor: '#FEC92F',
    color: 'white',
    p:2,
    '&:hover': {
      backgroundColor: '#FEC92F', // Keep the same background color on hover
    }
  }}
>
  Submit
</Button>
                </Grid>
              </Grid>
              </form>

            </Grid>
              
            <Grid item
              xs={6}>
              <img src="/bus.png" alt="" />
            </Grid>
          </Grid>
          
        </Box>
        <Box sx={{ height:"auto",display:{xs:'flex',md:"none"},justifyContent:"center"}}>
          <Grid container spacing={2} sx={{display:'flex',justifyContent:"center",margin:"auto", background: "#ffffff4f",
                borderRadius: "20px",
                p: 2,
             
                textAlign: "center",
                }}>
          <Grid xs={12} item>
                <img src="/contact-content.png" alt=""  style={{width:"60%"}}/>
                <Typography sx={{fontFamily:"Mali",fontSize:'18px',color:"black",textAlign:"center",fontWeight:'bold',color:"white"}}>Get in Touch - We're Here to Hear Your Crunchy Bites Stories!"</Typography></Grid>
           <Grid
              item
              xs={12}
              
            >
                         <form onSubmit={handleSubmit(onSubmit)}>

              <Grid container spacing={2} sx={{display:"flex",justifyContent:"center",paddingLeft:"0px" }}>
                <Grid item xs={12}>
                <RHFInput control={control} sx={{  mb: 1 ,mt:1 }} fullWidth name="full_name" placeholder='Enter Full Name'  />

                </Grid>
                <Grid item xs={12}>
                <RHFInput control={control} sx={{  mb: 1 ,mt:1 }} fullWidth name="email_id" placeholder='Email ID'  />

                </Grid> 
                <Grid item xs={12}>
                <RHFInput control={control} sx={{  mb: 1 ,mt:1 }} fullWidth name="mobile_no" placeholder='Mobile Number'  />

                </Grid> 
                <Grid item xs={12}>
                <RHFInput control={control} sx={{  mb: 1 ,mt:1 }} fullWidth name="message" placeholder='Message'  multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                <Button 
  type='submit' 
  sx={{
    width: '100%',
    backgroundColor: '#FEC92F',
    color: 'white',
    p:2,
    '&:hover': {
      backgroundColor: '#FEC92F', // Keep the same background color on hover
    }
  }}
>
  Submit
</Button>
                </Grid>
              </Grid>
              </form>

            </Grid>
              
            <Grid item
              xs={10} >
              <img src="/bus.png" alt=""  style={{width:"100%"}}/>
            </Grid>
          </Grid>
             
          </Box>
        <FixedBottomNavigation />
      </Box>
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
