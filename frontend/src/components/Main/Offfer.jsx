import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Offfer() {

  return (
    <Box sx={{ paddingBlock: "3rem", backgroundColor: "primary.main" }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid display="flex" alignItems="center" item xs={12} md={6}>
            <Box sx={{ textAlign: "start" }}>
              <Typography
                color="white"
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  fontSize: { xs: "1.5rem", md: "2rem" },

                  alignItems: "center",
                }}
                component={"h1"}
              >
                million of jobs , find <br /> the one that suit .
              </Typography>
              <Typography
                color="white"
                variant="body1"
                sx={{
                  display: "flex",
                  fontSize: { xs: "0.4rem", md: "0.7rem" },
                  alignItems: "center",
                }}
                component={"p"}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                culpa, maiores totam doloremque distinctio autem? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. In culpa, maiores
                totam doloremque distinctio autem?
              </Typography>

              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={3}
                p={1}
                sx={{
                  marginBlockEnd: "1.5rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <DoneIcon
                    color="secondary"
                    sx={{ marginInlineEnd: "1rem" }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: { xs: "0.7rem", md: "1rem" },
                    }}
                    variant=""
                  >
                    250 Lorem ipsum dolor sit amet.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <DoneIcon
                    color="secondary"
                    sx={{ marginInlineEnd: "1rem" }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: { xs: "0.7rem", md: "1rem" },
                    }}
                    variant=""
                  >
                    Lorem 20 ipsum dolor sit amet.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <DoneIcon
                    color="secondary"
                    sx={{ marginInlineEnd: "1rem" }}
                  />
                  <Typography
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: { xs: "0.7rem", md: "1rem" },
                    }}
                    variant=""
                  >
                    Lorem ipsum do.
                  </Typography>
                </Box>
              </Stack>
              <Button
                size="mdall"
                color="secondary"
                variant="contained"
                endIcon={
                  <ArrowOutwardIcon
                    sx={{
                      fontSize: { xs: "0.6rem", md: "0.8rem" },
                    }}
                  />
                }
                sx={{
                  fontSize: { xs: "0.4rem", md: "0.8rem" },
                }}
              >
                post Jobs
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: "1rem",
                height: { xs: "20rem", md: "30rem" },
                backgroundColor: "red",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="youPhotooffer.jpg"
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
      </Container>
    </Box>
  );
}

export default Offfer;
