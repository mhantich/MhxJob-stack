import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Fab,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import React from "react";

function FindJob() {
  const data = [
    {
      img: "https://source.unsplash.com/random",
      title: "very quick",
      descption: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "very quick",
      descption: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      img: "https://source.unsplash.com/random",
      title: "very quick",
      descption: "Lorem ipsum dolor sit amet consectetur ",
    },
  ];
  return (
    <Box sx={{ paddingBlock: "3rem" }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContentl: "center",
                alignItems: "end",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  height: { xs: "350px", md: "500px" },
                  width: { xs: "300px", md: "419px" },

                  position: "relative",
                  overflow: "hidden",
                  margin: "auto",
                }}
              >
                <img
                  src="/profile-image.png"
                  alt="hero"
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    right: "0%",
                    left: "0%",
                    bottom: "9%",
                    top: "0%",
                  }}
                />
              </Box>

              <Paper
                sx={{
                  position: "absolute",
                  top: "10%",
                  right: "0%",
                  transform: "translate(-50%,-50%)",
                  textAlign: "center",
                  padding: "0.4rem",
                  backgroundColor: "secondary.main",
                }}
              >
                <Typography
                  color="white"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: { xs: "0.6rem", md: "0.8rem" },
                  }}
                  component={"h6"}
                >
                  <UploadFileIcon
                    sx={{
                      marginInlineEnd: "0.3rem",
                      fontSize: { xs: "0.6rem", md: "0.8rem" },
                    }}
                  />{" "}
                  upload resum
                </Typography>
              </Paper>
              <Paper
                sx={{
                  position: "absolute",
                  buttom: "10%",
                  left: "30%",
                  transform: "translate(-50%,-50%)",
                  textAlign: "center",
                  padding: "0.5rem",
                }}
              >
                <AvatarGroup
                  renderSurplus={(surplus) => (
                    <Box sx={{ color: "blue" }}>+</Box>
                  )}
                  total={4251}
                >
                  <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 30, height: 30 }}
                    src="https://source.unsplash.com/random"
                  />
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Travis Howard"
                    src="https://source.unsplash.com/random"
                  />
                  <Avatar
                    alt="Agnes Walker"
                    sx={{ width: 30, height: 30 }}
                    src="https://source.unsplash.com/random"
                  />
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="Trevor Henderson"
                    src="https://source.unsplash.com/random"
                  />
                </AvatarGroup>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.6rem", md: "0.8rem" },
                  }}
                  component={"h6"}
                >
                  3k+ mambers done
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ marginBlockStart: "4rem" }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  new jobs & random
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                  variant="h4"
                >
                  jobs 900+{" "}
                  <Typography
                    variant="body2"
                    color={"secondary"}
                    sx={{
                      display: "inline",
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: "bold",
                    }}
                  >
                    browser jobs
                  </Typography>
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.5rem", md: "0.8rem" },
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  dolorum excepturi, laudantium dolor doloremque quis harum
                  repudiandae sint fuga ab quo autem, mai
                </Typography>
              </Box>
              <Box>
                {data.map((item, index) => (
                  <Stack
                    key={index}
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    p={1}
                    m={1}
                    sx={{
                      backgroundColor: "secondary.success",
                      width: "fit-content",
                      margin:{xs:"auto",md:'1rem'}
                    }}
                  >
                    <Box>
                      <Avatar
                        sx={{
                          height: { xs: "40", md: "70px" },
                          width: { xs: "40px", md: "70px" },
                          marginInlineEnd: "0.7rem",
                        }}
                        variant="square"
                        src={item.img}
                      ></Avatar>
                    </Box>

                    <Box sx={{ textAlign: "start" }}>
                      <Typography
                        color={"secondary"}
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "0.7rem", md: "0.9rem" },
                        }}
                        variant="body2"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "0.5rem", md: "0.8rem" },
                        }}
                        variant="h6"
                      >
                        {item.descption}
                      </Typography>
                    </Box>

                    <ArrowOutwardIcon
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "0.7rem", md: "0.9rem" },
                      }}
                    />
                  </Stack>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ paddingBlock: "3rem", textAlign: "center" }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem" } }}
            variant="h4"
          >
            jobs 900+{" "}
            <Typography
              variant="body2"
              color={"secondary"}
              sx={{
                display: "inline",
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "bold",
              }}
            >
              browser jobs
            </Typography>
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.5rem", md: "0.8rem" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            dolorum excepturi, laudantium dolor doloremque quis harum
            repudiandae sint fuga ab quo autem, mai
          </Typography>
        </Box>

        <Box sx={{ padding: "1rem", textAlign: "center" }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={7}
          >
            <Box>
              <Fab
                sx={{
                  backgroundColor: "secondary.secondary",
                  "&:hover": {
                    backgroundColor: "white",
                    transition: "all 0.3s ease-in-out",
                  },
                  color: "black",
                  boxShadow: "none",
                }}
                aria-label="add"
              >
                <AddReactionIcon color="secondary" />
              </Fab>

              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.6rem", md: "0.8rem" },
                }}
                variant="h4"
              >
                50M
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.4rem", md: "0.8rem" },
                }}
                variant="p"
              >
                Lorem ipsum dolor
              </Typography>
            </Box>
            <Box>
              <Fab
                sx={{
                  backgroundColor: "secondary.secondary",
                  "&:hover": {
                    backgroundColor: "white",
                    transition: "all 0.3s ease-in-out",
                  },
                  color: "black",
                  boxShadow: "none",
                }}
                aria-label="add"
              >
                <VolunteerActivismIcon color="secondary" />
              </Fab>

              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.6em", md: "0.8rem" },
                }}
                variant="h4"
              >
                20,550
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.4rem", md: "0.8rem" },
                }}
                variant="p"
              >
                Lorem ipsum dolor
              </Typography>
            </Box>
            <Box>
              <Fab
                sx={{
                  backgroundColor: "secondary.secondary",
                  "&:hover": {
                    backgroundColor: "white",
                    transition: "all 0.3s ease-in-out",
                  },
                  color: "black",
                  boxShadow: "none",
                }}
                aria-label="add"
              >
                <DataSaverOnIcon color="secondary" />
              </Fab>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.6rem", md: "0.8rem" },
                }}
              >
                250M+
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.4rem", md: "0.8rem" },
                }}
              >
                Lorem ipsum dolor
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default FindJob;
