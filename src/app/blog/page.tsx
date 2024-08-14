
"use client"
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import NavbarBG from '../component/navbar-bg/page'
import FixedBottomNavigation from '../component/footer/page'

const Blog = () => {
  return (
    <>
  <Box sx={{backgroundColor:'black',height:'auto', }}>
        <NavbarBG/>
        <Box sx={{ padding: 2,paddingTop:"120px" ,marginBottom:"20px"}}>
         <Grid container spacing={2}>
         <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="images/FriedChicken.png"
              alt="Introduction Image"
              style={{objectFit:'contain'}}
            />
            <CardContent>
              <Typography variant="h5" component="div">
              The Ultimate Crunchy Bite Test: Flavored Fried Chicken Done Right</Typography>
              <Typography variant="body2" color="text.secondary" style={{height:"240px"}}>
              Embark on a flavor-packed journey with our Crunchy Bite Test of the best-flavored fried chicken. In this blog, we explore the irresistible allure of a perfectly crunchy bite, where every crackling exterior gives way to tender, juicy meat inside. From the fiery kick of spicy chicken to the sweet embrace of honey BBQ, discover how different flavors and textures come together to create the ultimate fried chicken experience. Whether you're a fried chicken aficionado or just looking for the next big thing in flavor, this guide will tantalize your taste buds and satisfy your craving for that perfect crunch. Dive in and find out which chicken reigns supreme in our ultimate taste test!              </Typography>
            </CardContent>
          </Card>
         </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="images/paprika.png" 
              alt="Criteria Image"
              style={{objectFit:'contain'}}
            />
            <CardContent>
              <Typography variant="h5" component="div">
              The Ultimate Crunchy Bite: Discover the Paprika-Infused Crunchy Bite
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{height:"240px"}}>
              Dive into the world of flavor with our Crunchy Bite Test, where we highlight the paprika-infused crunchy bite. Paprika adds a vibrant color and a smoky, slightly sweet taste that enhances every crunchy bite. In this post, we examine how paprika transforms the classic crunchy bite into something truly special. From its impact on texture to its role in flavor enhancement, learn how paprika contributes to a perfect crunchy bite experience. Whether you're a seasoned spice lover or new to paprika, discover how this spice creates a standout crunchy bite that will leave you craving more. Join us in celebrating the unique and irresistible crunchy bite that only paprika can provide!              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="images/pizza.png"
              alt="Flavored Chicken Image"
              style={{objectFit:'contain'}}
            />
            <CardContent>
              <Typography variant="h5" component="div">
              The Perfect Crunchy Bite: Single-Flavor Pizza That Delivers
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{height:"240px"}}>
              Discover the ultimate crunchy bite with our in-depth look at single-flavor pizza that excels in texture and taste. In this blog, we spotlight how a single-flavor pizza can achieve a perfect crunchy bite, combining a crispy crust with a harmonious topping to deliver a mouthwatering experience. From the first bite, you'll experience the satisfying crunch that elevates each bite to new heights. Learn how the key elements—crust, seasoning, and toppings—come together to create a standout pizza with a crunchy bite that keeps you coming back for more. Whether you’re a pizza purist or just looking for the ultimate crunchy pizza experience, explore how focusing on a single flavor can result in a truly exceptional crunchy bite.              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="images/lemon.png" 
              alt="Top Contenders Image"
              style={{objectFit:'contain'}}
            />
            <CardContent>
              <Typography variant="h5" component="div">
              The Ultimate Crunchy Bite: Chili and Lemon Flavor Explosion
             </Typography>
              <Typography variant="body2" color="text.secondary" style={{height:"240px"}}>
              Experience the perfect crunchy bite with our deep dive into chili and lemon-flavored pizza. In this blog, we explore how the bold combination of chili and zesty lemon creates a standout crunchy bite that’s both tangy and spicy. Discover how the crispy crust, complemented by the fiery kick of chili and the refreshing zing of lemon, elevates every bite to a new level of flavor and crunch. We’ll guide you through the elements that contribute to the perfect crunchy bite, from the texture of the crust to the balance of spices. Whether you’re a fan of bold flavors or just in search of an unforgettable crunchy bite, find out how chili and lemon come together to deliver a pizza experience that’s sure to tantalize your taste buds. Join us as we savor the ultimate crunchy bite with this dynamic flavor combination!              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="images/SheeshKebab.png" 
              alt="Conclusion Image"
              style={{objectFit:'contain'}}
            />
            <CardContent>
              <Typography variant="h5" component="div">
              The Crunchy Bite Experience: Flavorful Shish & Kebab Delights
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{height:"240px"}}>
              Dive into the world of flavorful shish and kebab with our focus on achieving the perfect crunchy bite. In this blog, we explore how the art of grilling can create a tantalizing crunchy bite in every piece of shish and kebab. Discover how various flavors and marinades contribute to a crisp, satisfying exterior while maintaining juicy, tender meat inside. Whether it's the smokiness of a classic kebab or the spiced perfection of a shish skewer, learn how each flavor enhances the crunchy bite experience. From expertly seasoned meats to ideal grilling techniques, find out how to elevate your shish and kebab with a standout crunchy bite that makes every meal memorable.
            </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="images/barbeque.png" // Replace with the actual image URL
              alt="Call to Action Image"
              style={{objectFit:'contain'}}

            />
            <CardContent>
              <Typography variant="h5" component="div">
              The Perfect Crunchy Bite: Barbecue Flavor That Delivers</Typography>
              <Typography variant="body2" color="text.secondary" style={{height:"240px"}}>
              Experience the ultimate crunchy bite with our exploration of barbecue-flavored perfection. This blog highlights how the bold and smoky barbecue flavor enhances the crunchy bite of your favorite dishes. Discover how the combination of a perfectly crisp exterior and rich barbecue seasoning creates a mouthwatering crunchy bite that's both satisfying and irresistible. From the distinct taste of tangy barbecue sauce to the satisfying crunch, learn how this dynamic flavor profile makes every bite a flavorful and texturally delightful experience. Whether you’re a barbecue aficionado or simply in search of the perfect crunchy bite, dive into how barbecue flavor elevates the crunch factor to new heights!              
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="images/WhiteCheddar.png"
              alt="Call to Action Image"
              style={{objectFit:'contain'}}
            />
              <CardContent>
              <Typography variant="h5" component="div">
              The Ultimate Crunchy Bite: White Cheddar Flavor Revolution
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{height:"240px"}}>
              Dive into the world of flavor with our Crunchy Bite Test, focusing on the irresistible White Cheddar flavor. This blog explores how White Cheddar enhances the crunchy bite experience, combining its rich, creamy taste with a perfectly crispy texture. Discover how the sharp, savory notes of White Cheddar create a standout crunchy bite that is both satisfying and indulgent. We’ll examine how this flavor transforms the traditional crunchy bite, offering a unique twist that elevates each bite to new levels of deliciousness. Whether you’re a fan of bold cheeses or simply love a great crunchy bite, find out how White Cheddar makes every bite extraordinary. Join us in savoring the perfect balance of crunch and flavor with White Cheddar’s exceptional contribution to the crunchy bite experience!           
              </Typography>
              </CardContent>
              </Card>
        </Grid>
      </Grid>
    </Box>
          <FixedBottomNavigation/>
        </Box>
  
    </>
  )
}

export default Blog