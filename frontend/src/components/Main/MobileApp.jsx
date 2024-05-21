import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
function MobileApp() {
  return (
    <Box >
      <Container>
        <Box
          mt="2rem"
       
          sx={{
            borderRadius: "1rem",
            overflow: "hidden",
            color: "white",
            backgroundColor: "primary.main",
          }}
        >

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          >
            <Grid
              display="flex"
              alignItems="center"
              justifyContent="center"
              item
              xs={12}
              md={6}
            >
              <Box p={2}>
                <Typography sx={{ fontWeight: "bold",fontSize: { xs: "0.9rem", md: "1.6rem" } }} variant="h4">
                  more than <br /> 1m people engaged
                </Typography>
                <Typography
                 sx={{ fontSize: { xs: "0.5rem"} }}
                  mb="1rem"
                  variant="subtitle1"

                  component="p"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  impedit aspernatur, <br />
                  temporibus laborum quibusdam optio
                </Typography>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button
                  sx={{ fontSize:{xs:"0.4rem",md:"0.8rem"},}}
                    startIcon={<AppleIcon />}
                    size="small"
                    color="secondary"
                    variant="contained"
                  >
                    ios app
                  </Button>

                  <Button
                    sx={{
                      backgroundColor: "white",
                      fontSize:{xs:"0.4rem",md:"0.8rem"},
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
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "20rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="mobile.png"
                  alt=""
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Maintain aspect ratio and cover the container
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default MobileApp;
