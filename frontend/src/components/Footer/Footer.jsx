import React from "react";
import {
  Box,
  Container,
  Divider,
  Button,
  Grid,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
} from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import AppleIcon from "@mui/icons-material/Apple";
function Footer() {
  return (
    <Box sx={{ paddingBlock: "5rem", backgroundColor: "primary.main" }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          <Grid item xs={12} md={5}>
            <Stack
              spacing={2}
              p={2}
              sx={{ color: "white" }}
            >
              <Box>
              <Avatar  sx={{ width:{xs:70,md:100}, height: 24 }}  variant="square" src="/logo.png"/>

                <Typography
                  sx={{    fontSize: { xs: "0.5rem" }, marginBlock: "1rem" }}
                  variant="body2"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  iusto, recusandae perferendis quisquam sapiente voluptates,
                  <br /> tenetur quae tempora voluptatibus odit cum distinctio
                  consequuntur consequatur reprehenderit.
                </Typography>
              </Box>
              <Stack spacing={2}>
                <Typography sx={{ fontWeight: "bold" ,fontSize: { xs: "0.6rem", md: "0.8rem" }}} variant="h6">
                  Get our job app
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button
                    startIcon={<AppleIcon />}
                    size="small"
                    color="secondary"
                    variant="contained"
                    sx={{   fontSize: { xs: "0.4rem", md: "0.8rem" }}}
                  >
                    ios app
                  </Button>

                  <Button
                    sx={{
                      backgroundColor: "white",
                     fontSize: { xs: "0.4rem", md: "0.8rem"} ,
                      color: "black",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "black",
                      },
                    }}
                    startIcon={<AndroidIcon />}
                    size="small"
                    variant="contained"
                  >
                    android app
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Divider color='white' orientation="vertical" flexItem />

          <Grid item xs={12} md={6}>
          <Stack
              spacing={2}
              p={2}
              sx={{ color: "white" }}
              justifyContent={{ xs: "center", sm: "space-between" }}
              direction={{ xs: "column" }}
            >
          <Typography sx={{ fontWeight: "bold" ,color:'white',fontSize: { xs: "0.6rem"}}} variant="h6">
                  subscribe to our newsletter
                </Typography>
          <TextField
          sx={{width:'100%',backgroundColor:'white'}}
                color="secondary"
                id="input-with-icon-textfield"
                label="subscribe"
                variant="filled"
                
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <UnsubscribeIcon /> 
                    </InputAdornment>
                  ),
                }}
              />
                       </Stack>
          <Divider sx={{display:{xs:'none',md:'inline'}}} color='white' flexItem />
          <Stack
              spacing={2}
              p={2}
              sx={{ color: "white" }}
              justifyContent={{ xs: "center", sm: "space-between" }}
              direction={{ xs: "column", sm: "row" }}
            >
              <Box>
                <Typography sx={{ fontWeight: "bold",fontSize: { xs: "0.6rem",md:'0.8rem'}} } variant="h6">
                  Useful Links
                </Typography>
                <Stack spacing={1}>
                  <Typography sx={{ fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">Home</Typography>
                  <Typography  sx={{ fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">About Us</Typography>
                  <Typography  sx={{ fontSize: { xs: "0.5rem",md:'0.7rem'}} }variant="body2">Contact Us</Typography>
                  <Typography sx={{ fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">Privacy Policy</Typography>
                  <Typography sx={{ fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">Terms & Conditions</Typography>
                </Stack>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold",fontSize: { xs: "0.6rem",md:'0.8rem'}} } variant="h6">
                  Useful Links
                </Typography>
                <Stack spacing={1}>
                  <Typography sx={{fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">Home</Typography>
                  <Typography  sx={{fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">About Us</Typography>
                  <Typography  sx={{fontSize: { xs: "0.5rem",md:'0.7rem'}} }variant="body2">Contact Us</Typography>
                  <Typography sx={{fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">Privacy Policy</Typography>
                  <Typography sx={{fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">Terms & Conditions</Typography>
                </Stack>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold",fontSize: { xs: "0.6rem",md:'0.8rem'}} } variant="h6">
                  Useful Links
                </Typography>
                <Stack spacing={1}>
                  <Typography sx={{ fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">Home</Typography>
                  <Typography  sx={{ fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">About Us</Typography>
                  <Typography  sx={{ fontSize: { xs: "0.5rem",md:'0.7rem'}} }variant="body2">Contact Us</Typography>
                  <Typography sx={{ fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">Privacy Policy</Typography>
                  <Typography sx={{ fontSize: { xs: "0.5rem",md:'0.7rem'}} } variant="body2">Terms & Conditions</Typography>
                </Stack>
              </Box>

              </Stack>

          </Grid>
        </Grid>
        <Divider color='white' flexItem />
  
      </Container>
      <Box sx={{marginBlockStart:'3rem'}}>
        <Typography sx={{ color:'white',display:'flex',justifyContent:'center',fontSize: { xs: "0.5rem",md:'0.7rem'}} } >
            created by mhantich
        </Typography>
   </Box>
    </Box>
  );
}

export default Footer;
