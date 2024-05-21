import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import React from "react";

function Reviews() {
  return (
    <Box p={3}>
      <Container>
        {/* text title  */}
        <Box  sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bold",  fontSize: { xs: "1rem", md: "2rem" },}} variant="h4">
            company we helped grow <br />
            company 
          </Typography>
          <Typography sx={{ fontSize: "0.6em" ,marginBlock:'1rem'}}  variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            iusto, recusandae perferendis quisquam sapiente voluptates,
            <br /> tenetur quae tempora voluptatibus odit cum distinctio
            consequuntur consequatur reprehenderit.
          </Typography>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid display="flex" alignItems="center" item xs={12} md={4}>
            <Card sx={{ padding: "1rem" }}>
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
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                    sx={{ width: 35, height: 35, marginRight: "0.5rem" }}
                  />
                  <Typography  sx={{fontSize: { xs: "0.6rem", md: "0.8rem" } }}> 
                    <b>john doe</b>
                  </Typography>
                </Box>
                <FormatQuoteIcon />
              </Stack>
            </Card>
          </Grid>
       
          <Grid display="flex" alignItems="center" item xs={12} md={4}>
            <Card sx={{ padding: "1rem" }}>
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
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                    sx={{ width: 35, height: 35, marginRight: "0.5rem" }}
                  />
                  <Typography  sx={{fontSize: { xs: "0.6rem", md: "0.8rem" } }}> 
                    <b>john doe</b>
                  </Typography>
                </Box>
                <FormatQuoteIcon />
              </Stack>
            </Card>
          </Grid>
       
          <Grid display="flex" alignItems="center" item xs={12} md={4}>
            <Card sx={{ padding: "1rem" }}>
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
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                    sx={{ width: 35, height: 35, marginRight: "0.5rem" }}
                  />
                  <Typography  sx={{fontSize: { xs: "0.6rem", md: "0.8rem" } }}> 
                    <b>john doe</b>
                  </Typography>
                </Box>
                <FormatQuoteIcon />
              </Stack>
            </Card>
          </Grid>
       
        </Grid>
      </Container>
    </Box>
  );
}

export default Reviews;
