import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

function TopBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        p: 1,
      }}
    >
      <Stack
        direction={'row'}
        spacing={0.5}
        alignItems={'center'}
      >
        <Stack
         direction={'row'}
         spacing={0.5}
         alignItems={'center'}
        >
          <HomeIcon sx={{ fontSize: { xs:'0.4rem',md:"0.7rem"} }} />

          <Typography sx={{ fontSize: { xs:'0.4rem',md:"0.7rem"} }} variant="body1">
            morocco, agadir city
          </Typography>
        </Stack>

        <Typography sx={{ fontSize: { xs:'0.3rem',md:"0.7rem"} }} variant="body1">
          +212 6 66 66 66 66
        </Typography>
      </Stack>




      <Stack    direction={'row'}
        spacing={0.5} >
        <GitHubIcon sx={{ fontSize: { xs:'0.4rem',md:"0.7rem"} }} />
        <FacebookIcon sx={{ fontSize: { xs:'0.4rem',md:"0.7rem"} }} />
        <XIcon sx={{ fontSize: { xs:'0.4rem',md:"0.7rem"} }} />
        <InstagramIcon sx={{ fontSize: { xs:'0.4rem',md:"0.7rem"} }} />
      </Stack>
    </Box>
  );
}

export default TopBar;
