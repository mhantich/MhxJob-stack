import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SearchIcon from "@mui/icons-material/Search";

function Hero() {
  return (
    <Box
      sx={{
       
        backgroundImage: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
      }}
    >
      <Container>
        <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <Grid sx={{marginBlockStart:'5rem'}}  item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                flexDirection: "Column",
                gap: 2,
                justifyContent: "center",
                height: "100%",
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
                  find the world <br /> biggest job portal
                </Typography>
                <Typography
                  variant="h1"
                  color="secondary"
                  sx={{
                    fontSize:{xs:"1.5rem",md:"3rem"},
                    fontWeight: "bold",
                  }}
                >
                  platform
                </Typography>
              </Box>
              <Typography variant="p" sx={{ fontSize:{xs:"0.7rem",md:"1rem",textTransform:'none', } }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex at
                quaerat autem,it amet consectetur adipisicing elit. Ex at
              </Typography>

              <Box sx={{ display: "flex", gap: 2}}>
                <Button sx={{  fontSize:{xs:"0.5rem",md:"1rem"}}} variant="contained" size="small"  color="secondary">
                  Get Access
                </Button>
                <Button sx={{  fontSize:{xs:"0.5rem",md:"1rem"}}} variant="contained" endIcon={<PlayArrowIcon />}>
                  watch
                </Button>
              </Box>

              <TextField
                color="secondary"
                id="input-with-icon-textfield"
                label="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ alignItems: "end",display:{xs:'none',md:'flex'} }}>
              <img
                src="/r-img2.png"
                alt="hero"
                style={{
                  height: "600px",
                  maxWidth: "100%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
