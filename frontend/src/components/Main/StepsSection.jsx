import React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
function StepsSection() {
  const steps = [
    {
      step: 1,
      title: "Register",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque",
    },
    {
      step: 2,
      title: "Search",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque",
    },
    {
      step: 3,
      title: "Apply",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque",
    },
    {
      step: 4,
      title: "Get Hired",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque",
    },
  ];
  return (
    <Box sx={{ marginBlock: "5rem" }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                flexDirection: "Column",
                gap: 2,
                justifyContent: "center",
                height: "100%",
                paddingInline:'1rem'
              }}
            >
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize:{xs:"1.5rem",md:"3rem"},
                    fontWeight: "bold",
                    color: "black",
               
                  }}
                >
                  getting started <br /> easy is way
                </Typography>
                <Typography
                  variant="h1"
                  color="secondary"
                  sx={{
                    fontSize:{xs:"1.5rem",md:"3rem"},
                    fontWeight: "bold",
                  }}
                >
                  4 steps
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    fontSize:{xs:"0.5rem",md:"0.8rem"},
                   
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adip
                  Lorem ipsum dolor sit amet consectetur adip
                  Lorem ipsum dolor sit amet consect
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid
              justifyContent="center"
              alignItems="center"
              container
              rowSpacing={2}
            >
              {steps.map((item, index) => (
                <Grid item xs={6} md={6} key={index}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "1rem",
                      paddingBlock: "1rem",
                      paddingInline: "1rem",
                      width: "90%",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        transition: "all 0.6s ease-in-out",
                        color: "white",
                        rotate: "-4deg",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "secondary.main",
                        borderRadius: "0.5rem",
                        width: "fit-content",
                      }}
                    >
                      <Typography sx={{ color: "white", fontSize:{xs:"0.6rem",md:"0.8rem"}, }} p={1} variant="body">
                        step {item.step}
                      </Typography>
                    </Box>
                    <Typography  sx={{ fontSize:{xs:"0.75rem",md:"1.2rem"}, }} mt="1rem" variant="h6">
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.5rem", marginBlockEnd: "0.5rem" }}
                      variant="h6"
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default StepsSection;
