import {
  Box,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Contact() {
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
            "url('https://images.pexels.com/photos/5467588/pexels-photo-5467588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
            Contact Us
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
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", md: "1rem" },
                  fontWeight: "bold",
                }}
                variant="h4"
              >
                Contact Us
              </Typography>

              <Typography
                sx={{ fontSize: { xs: "0.5rem", md: "0.8rem" } }}
                variant="p"
              >
                Lorem ipsum, isicing elit. Saepe oloribus assumenda! Quae enim
                sit porro eveniet illum unde quam debitis ipsam beatae maxime!
                Officiis numquam eligendi optio unde.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", md: "1rem" },
                  fontWeight: "bold",
                }}
                variant="h4"
              >
                dealy supports
              </Typography>

              <Typography
                sx={{ fontSize: { xs: "0.5rem", md: "0.8rem" } }}
                variant="p"
              >
                Lorem ips ssumenda! Quae enim sit porro eveniet illum unde quam
                debitis ipsam beatae maxime! Officiis numquam eligendi optio
                unde.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", md: "1rem" },
                  fontWeight: "bold",
                }}
                variant="h4"
              >
                time management
              </Typography>

              <Typography
                sx={{ fontSize: { xs: "0.5rem", md: "0.8rem" } }}
                variant="p"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elitoptio
                unde.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  marginBlock: "1rem",
                }}
              >
                <TextField
                  color="secondary"
                  id="input-with-icon-textfield"
                  label="name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  color="secondary"
                  id="input-with-icon-textfield"
                  label="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <TextField
                color="secondary"
                id="input-with-icon-textfield"
                label="message"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  marginBlock: "1rem",
                }}
              >
                <TextField
                  color="secondary"
                  id="input-with-icon-textfield"
                  label="country"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  color="secondary"
                  id="input-with-icon-textfield"
                  label="city"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Contact;
