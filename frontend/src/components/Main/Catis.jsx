import {
  Avatar,
  Box,
  Button,
  Container,
  Fab,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import React from "react";
import { useSelector } from "react-redux";

import { selectCatis } from "../../redux/cati/CatiSlice";
import { Link } from "react-router-dom";

function Catis() {

  const cati = useSelector(selectCatis)
  return (
    <Box p={2}>
      <Container>
        {/* text title  */}
        <Stack spacing={1} sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem" } }}
            variant="h4"
          >
            company we helped grow
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "0.4rem",
                md: "0.6rem",
                textTransform: "capitalize",
              },
            }}
            variant="body2"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            iusto, recusandae perferendis quisquam sapiente voluptates,
            <br /> tenetur quae tempora voluptatibus odit cum distinctio
            consequuntur consequatur reprehenderit.
          </Typography>
        </Stack>

        {/* helped */}

        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
          flexWrap={"wrap"}
          sx={{ borderRadius: "1rem", padding: "1rem" }}
        >
          <Box
            sx={{
              paddingBlock: "1rem",
            }}
          >
            <img src="/brands/brand-1.svg" alt="" />
          </Box>{" "}
          <Box
            sx={{
              paddingBlock: "1rem",
            }}
          >
            <img src="/brands/brand-2.svg" alt="" />
          </Box>
          <Box
            sx={{
              paddingBlock: "1rem",
            }}
          >
            <img src="/brands/brand-3.svg" alt="" />
          </Box>{" "}
          <Box
            sx={{
              paddingBlock: "1rem",
            }}
          >
            <img src="/brands/brand-4.svg" alt="" />
          </Box>{" "}
          <Box
            sx={{
              paddingBlock: "1rem",
            }}
          >
            <img src="/brands/brand-5.svg" alt="" />
          </Box>
        </Stack>
        {/* cati cards explor */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 5,
              paddingBlockStart: "5rem",
              paddingBlockEnd: "3rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
                variant="h3"
              >
                Explore by Category
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.4rem",
                    md: "0.6rem",
                    textTransform: "capitalize",
                  },
                }}
                variant="body2"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Necessitatibus, ipsam deleniti. Voluptatem excepturi facere,
                <br /> esse labore non nulla doloremque!
              </Typography>
            </Box>
            <Button
             sx={{  fontSize:{xs:"0.5rem",md:"1rem"}}} 
              variant="contained"
            >
              More Category
            </Button>
          </Box>
          {/* cati cards  */}
          <Box>
            <Grid
              justifyContent="center"
              alignItems="center"
              container
              spacing={2}
            >
              {cati?.slice(0,6).map((item) => (
                <Grid key={item._id} sx={{ textAlign: "center" }} item xs={6} md={2}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "1rem",
                      "&:hover": {
                        backgroundColor: "secondary.main",
                        transition: "all 0.6s ease-in-out",
                        color: "white",
                        transform: "scale(1.1)",
                      },
                    }}
                    p={1}
                  >
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
                      <Avatar   sx={{ width: 50, height: 50 }} src={item.photo}/>
                    </Fab>

                    <Typography sx={{fontSize:{xs:'0.8rem'}}}  mt="1rem" variant="h6">
                      {item.name}
                    </Typography>
                    <Button
                      sx={{
                        fontSize:{xs:"0.4rem",md:"0.8rem"},
                        backgroundColor: "white",
                        color: "black",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                      size="small"
                      variant="contained"
                      endIcon={<ArrowOutwardIcon sx={{ textTransform:'capitalize', fontSize:{xs:"0.5rem",md:"0.8rem"},}} color="secondary" />}
                    >
                      <Link to='/Jobs'>
                      <p style={{color:'black',textDecoration:'none'}}>See All </p>
                      </Link>
                   
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        {/* cati image  */}
        <Box
          mt="2rem"
          sx={{
            borderRadius: "1rem",
            overflow: "hidden",
            color: "white",

            backgroundImage:
              "url('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          <Box
            sx={{
              backgroundColor: "primary.secondary",
              textAlign: "center",
              paddingBlock: "5rem",
            }}
          >
            <Typography sx={{ fontSize:{xs:'1rem',md:'2rem'},fontWeight: "bold" }} variant="h4">
              more than <br /> 1m people engaged
            </Typography>
            <Typography
              sx={{ fontSize: {xs:"0.4rem",md:'0.7rem' }}}
              mb="1rem"
              variant="subtitle1"
              component="p"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              impedit aspernatur, <br />
              temporibus laborum quibusdam optio
            </Typography>
            <Button
              size="mdall"
              color="secondary"
              variant="contained"
              endIcon={<ArrowOutwardIcon   sx={{
                fontSize:{xs:"0.6rem",md:"0.8rem"},
               
              }} />}
              sx={{
                fontSize:{xs:"0.4rem",md:"0.8rem"},
               
              }}
            >
              post Jobs
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Catis;
