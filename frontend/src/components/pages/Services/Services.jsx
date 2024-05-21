import {  Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

function Services() {
  return (
    <>
      <Box
        sx={{
          marginBlockEnd: "3rem",
          height: { xs: "auto", md: "30rem" },
          overflow: "hidden",
          color: "white",
          backgroundSize: "cover",
          backgroundPositionY: "center",
          backgroundImage:
            "url('https://images.pexels.com/photos/3863830/pexels-photo-3863830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <Box
          sx={{
            //   backgroundColor: "primary.secondary",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingBlock: "5rem",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1rem", md: "2rem" }, fontWeight: "bold" }}
            variant="h4"
          >
            Services
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.4rem", md: "0.7rem" } }}
            mb="1rem"
            variant="subtitle1"
            component="p"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            impedit aspernatur, <br />
            temporibus laborum quibusdam optio
          </Typography>
        </Box>
      </Box>
      <Container sx={{ marginBlockEnd: "5rem" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid display="flex" alignItems="center" item xs={12} md={4}>
          <Card sx={{ padding: "1rem" }}>
            <CardMedia
        sx={{ height: 200 }}
        image="https://images.pexels.com/photos/7429472/pexels-photo-7429472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="green iguana"
      />
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                  
                    variant="h6"
                    sx={{ fontWeight: "bold",  fontSize: { xs: "0.6rem", md: "0.9rem" }, }}
                    component="div"
                  >
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography  sx={{fontSize: { xs: "0.6rem", md: "0.8rem" } }} variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
             
                </Box>
                
              </Stack>
            </Card>
          </Grid>
       
          <Grid display="flex" alignItems="center" item xs={12} md={4}>
          <Card sx={{ padding: "1rem" }}>
            <CardMedia
        sx={{ height: 200 }}
        image="https://images.pexels.com/photos/7429472/pexels-photo-7429472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="green iguana"
      />
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                  
                    variant="h6"
                    sx={{ fontWeight: "bold",  fontSize: { xs: "0.6rem", md: "0.9rem" }, }}
                    component="div"
                  >
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography  sx={{fontSize: { xs: "0.6rem", md: "0.8rem" } }} variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
             
                </Box>
                
              </Stack>
            </Card>
          </Grid>
       
          <Grid display="flex" alignItems="center" item xs={12} md={4}>
            <Card sx={{ padding: "1rem" }}>
            <CardMedia
        sx={{ height: 200 }}
        image="https://images.pexels.com/photos/7429472/pexels-photo-7429472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="green iguana"
      />
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                  
                    variant="h6"
                    sx={{ fontWeight: "bold",  fontSize: { xs: "0.6rem", md: "0.9rem" }, }}
                    component="div"
                  >
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography  sx={{fontSize: { xs: "0.6rem", md: "0.8rem" } }} variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
             
                </Box>
                
              </Stack>
            </Card>
          </Grid>
       
        </Grid>
      </Container>
    </>
  );
}

export default Services;
