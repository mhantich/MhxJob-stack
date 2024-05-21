import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
function Articles() {
  return (
    <Box sx={{ paddingBlock: "5rem" }}>
      <Container>
        <Box p={3} sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "1rem", md: "2rem" } }}
            variant="h4"
          >
            company we helped grow <br />
            company grow
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.4rem", md: "0.6rem" }, marginBlock: "1rem" }}
            variant="body2"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            iusto, recusandae perferendis quisquam sapiente voluptates,
            <br /> tenetur quae tempora voluptatibus odit cum distinctio
            consequuntur consequatur reprehenderit.
          </Typography>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "20rem",
                backgroundColor: "red",
                position: "relative",
              }}
            >
              <img
                src="articleImgs.jpg"
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

              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0.5}
                sx={{
                  position: "absolute",
                  bottom: { xs: "10%", md: "-10%" },
                  left: 0,
                  backgroundColor: "white",
                  padding: 1,
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={0.5}
                >
                  <Typography
                    color="secondary.main"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      marginBlockStart: "1rem",
                      fontSize: { xs: "0.5rem", md: "0.7rem" },
                    }}
                    variant="div"
                  >
                    <CalendarMonthIcon
                      sx={{
                        fontSize: "0.7rem",
                      }}
                    />
                    22 mas 2024
                  </Typography>
                  <Typography
                    color="secondary.main"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      marginBlockStart: "1rem",
                      fontSize: { xs: "0.5rem", md: "0.7rem" },
                    }}
                    variant="div"
                  >
                    <AccessAlarmIcon
                      sx={{
                        fontSize: "0.7rem",
                      }}
                    />{" "}
                    08 Min
                  </Typography>
                </Stack>
                <Box>
                  {" "}
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "0.6rem", md: "0.9rem" },
                    }}
                    variant="h5"
                  >
                    Lorem ipsum dolor sit.
                    <br />
                    ipsum dolor
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      marginBlockStart: "0.5rem",
                      fontSize: { xs: "0.4rem", md: "0.7rem" },
                    }}
                    variant="div"
                  >
                    explore more{" "}
                    <ArrowForwardIcon
                      sx={{ fontSize: { xs: "0.6rem", md: "0.9rem" } }}
                    />
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={1}
             
            >
              <Box>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems=" center"
                  spacing={1}
                >
                  <Box>
                    <Avatar
                      src="articleImgs.jpg"
                      sx={{
                        width: { xs: 60, md: 130 },
                        height: { xs: 60, md: 130 },
                      }}
                      variant="rounded"
                    />
                  </Box>
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={0.5}
                    >
                      <Typography
                        color="secondary.main"
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          marginBlockStart: "1rem",
                          fontSize: { xs: "0.5rem", md: "0.7rem" },
                        }}
                        variant="div"
                      >
                        <CalendarMonthIcon
                          sx={{
                            fontSize: { xs: "0.5rem", md: "0.7rem" },
                          }}
                        />{" "}
                        22 mas 2024
                      </Typography>
                      <Typography
                        color="secondary.main"
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          marginBlockStart: "1rem",
                          fontSize: { xs: "0.5rem", md: "0.7rem" },
                        }}
                        variant="div"
                      >
                        <AccessAlarmIcon
                          sx={{
                            fontSize: { xs: "0.5rem", md: "0.7rem" },
                          }}
                        />{" "}
                        08 Min
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "0.6rem", md: "0.9rem" },
                      }}
                      variant="h5"
                    >
                      Lorem ipsum dolor sit.
                      <br />
                      ipsum dolor
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        marginBlockStart: "0.3rem",
                        fontSize: { xs: "0.5rem", md: "0.7rem" }

                      }}
                      variant="div"
                    >
                      explore more <ArrowForwardIcon sx={{                      fontSize: { xs: "0.5rem", md: "0.7rem" }
}} />
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Divider variant="middle" />

              <Box>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems=" center"
                  spacing={1}
                >
                  <Box>
                    <Avatar
                      src="articleImgs.jpg"
                      sx={{
                        width: { xs: 60, md: 130 },
                        height: { xs: 60, md: 130 },
                      }}
                      variant="rounded"
                    />
                  </Box>
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={0.5}
                    >
                      <Typography
                        color="secondary.main"
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          marginBlockStart: "1rem",
                          fontSize: { xs: "0.5rem", md: "0.7rem" },
                        }}
                        variant="div"
                      >
                        <CalendarMonthIcon
                          sx={{
                            fontSize: { xs: "0.5rem", md: "0.7rem" },
                          }}
                        />{" "}
                        22 mas 2024
                      </Typography>
                      <Typography
                        color="secondary.main"
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          marginBlockStart: "1rem",
                          fontSize: { xs: "0.5rem", md: "0.7rem" },
                        }}
                        variant="div"
                      >
                        <AccessAlarmIcon
                          sx={{
                            fontSize: { xs: "0.5rem", md: "0.7rem" },
                          }}
                        />{" "}
                        08 Min
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "0.6rem", md: "0.9rem" },
                      }}
                      variant="h5"
                    >
                      Lorem ipsum dolor sit.
                      <br />
                      ipsum dolor
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        marginBlockStart: "0.3rem",
                        fontSize: { xs: "0.5rem", md: "0.7rem" }

                      }}
                      variant="div"
                    >
                      explore more <ArrowForwardIcon sx={{                      fontSize: { xs: "0.5rem", md: "0.7rem" }
}} />
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Divider variant="middle" />
              <Box>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems=" center"
                  spacing={1}
                >
                  <Box>
                    <Avatar
                      src="articleImgs.jpg"
                      sx={{
                        width: { xs: 60, md: 130 },
                        height: { xs: 60, md: 130 },
                      }}
                      variant="rounded"
                    />
                  </Box>
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={0.5}
                    >
                      <Typography
                        color="secondary.main"
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          marginBlockStart: "1rem",
                          fontSize: { xs: "0.5rem", md: "0.7rem" },
                        }}
                        variant="div"
                      >
                        <CalendarMonthIcon
                          sx={{
                            fontSize: { xs: "0.5rem", md: "0.7rem" },
                          }}
                        />{" "}
                        22 mas 2024
                      </Typography>
                      <Typography
                        color="secondary.main"
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          marginBlockStart: "1rem",
                          fontSize: { xs: "0.5rem", md: "0.7rem" },
                        }}
                        variant="div"
                      >
                        <AccessAlarmIcon
                          sx={{
                            fontSize: { xs: "0.5rem", md: "0.7rem" },
                          }}
                        />{" "}
                        08 Min
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "0.6rem", md: "0.9rem" },
                      }}
                      variant="h5"
                    >
                      Lorem ipsum dolor sit.
                      <br />
                      ipsum dolor
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        marginBlockStart: "0.3rem",
                        fontSize: { xs: "0.5rem", md: "0.7rem" }

                      }}
                      variant="div"
                    >
                      explore more <ArrowForwardIcon sx={{                      fontSize: { xs: "0.5rem", md: "0.7rem" }
}} />
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Divider variant="middle" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Articles;
