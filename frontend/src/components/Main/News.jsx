import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PaidIcon from "@mui/icons-material/Paid";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Divider from "@mui/material/Divider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { selectofferess } from "../../redux/offerce/offeresSlice";
import { useSelector } from "react-redux";

function News() {
  const offers = useSelector(selectofferess);

  return (
    <Box
      
      sx={{
        backgroundColor: "secondary.secondary",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          new jobs & random
        </Typography>
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
    
        <Box sx={{ paddingBlock: "5rem" }}>
          <Grid
            justifyContent="center"
            alignItems="center"
            container
            spacing={{ xs: 1, md: 2 }}
         
          >
            {offers?.slice(0,6).map((item) => (
              <Grid key={item._id} xs={12} md={5} p={1}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: "flex", paddingBlockStart: "1rem" }}>
                      <Box>
                        <Avatar
                          sx={{
                            width: {xs:'50',md:'100'},
                            height: {xs:'50',md:'100'},
                            marginInlineEnd: "0.7rem",
                          }}
                          variant="square"
                          // src={item.img}
                        ></Avatar>
                      </Box>
                      <Box sx={{  textAlign: "start" }}>
                        <Typography
                          color={"secondary"}
                          sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "0.6rem", md: "0.8rem" }
                          }}
                          variant="body2"
                        >
                          {item.country}
                        </Typography>
                        <Typography    sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "0.6rem", md: "0.8rem" }
                          }}variant="h6">{item.name}</Typography>
                        <Stack
                            direction={'row'}
                            spacing={1}
                        >
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: { xs: "0.6rem", md: "0.8rem" }
                            }}
                            variant="body2"
                          >
                            <FmdGoodIcon  sx={{ marginInlineEnd:'0.3rem'   , fontSize: { xs: "0.6rem", md: "0.8rem" }}} />
                            {item.city}
                          </Typography>
                       
                           
                            <Typography key={item}  sx={{   marginInlineEnd:'0.3rem' ,fontSize: { xs: "0.6rem", md: "0.8rem" }}}>
                              <CalendarMonthIcon sx={{   marginInlineEnd:'0.3rem' ,fontSize: { xs: "0.6rem", md: "0.8rem" }}} />
                              {item.createdAt}
                            </Typography>
                      
                      
                         
                        </Stack>
                        {item.categories.map((item) => (  
                            <Typography key={item}  sx={{   marginInlineEnd:'0.3rem' ,fontSize: { xs: "0.6rem", md: "0.8rem" }}}>
                                  {item.name}
                            </Typography>
                            ))}
                      </Box>
                    </Box>
         
                  </CardContent>

                  <Divider variant="middle" />
                  <Box
                    p={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <PaidIcon sx={{ fontSize: "1rem", marginRight: "5px" }} />
                      {item.salary}$
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <PaidIcon sx={{ fontSize: "1rem", marginRight: "5px" }} />
                      {item.hoursWork}h
                    </Typography>
              
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>


          <Button
              size="mdall"
              color="primary"
              variant="contained"

              endIcon={<ArrowOutwardIcon   sx={{
                fontSize:{xs:"0.6rem",md:"0.8rem"},
               
              }} />}
              sx={{
                fontSize:{xs:"0.4rem",md:"0.8rem"},
               marginBlockStart:'1rem'
              }}
            >
              post a job
            </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default News;
