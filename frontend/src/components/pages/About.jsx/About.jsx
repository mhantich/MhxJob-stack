import { Box, Container, Grid, Hidden, Stack, Typography } from "@mui/material";
import React from "react";
import Masonry from "@mui/lab/Masonry";

function About() {
  const dataImg = [
    "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5686082/pexels-photo-5686082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7675014/pexels-photo-7675014.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <>
      <Box
        sx={{
          marginBlockEnd: "3rem",
          height: { xs: "auto", md: "30rem" },
          overflow: "hidden",
          color: "white",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1rem", md: "2rem" }, fontWeight: "bold" }}
            variant="h4"
          >
            About Us
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
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", md: "1.8rem" },
                  fontWeight: "bold",
                  color: "secondary.main",
                }}
                variant="h4"
              >
                OUR ABOUT US
              </Typography>

              <Typography
                sx={{ fontSize: { xs: "0.7rem", md: "1.8rem" } }}
                variant="p"
              >
                We Provides Best Job Solution.
              </Typography>

              <Typography
                sx={{ fontSize: { xs: "0.5rem", md: "0.8rem" } }}
                variant="p"
              >
                Lorem ips ssumenda! Quae enim sit porro eveniet illum unde quam
                debitis ipsam beatae maxime! Officiis numquam eligendi optio
                unde.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              {dataImg.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    height: `${5 * index}rem`,
                    position: "relative",
                    overflow: "Hidden",
                    display: "flex",
                  }}
                >
                  <img src={item} alt="" />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default About;
