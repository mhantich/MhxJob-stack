import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Grid } from "@mui/material";

import NavbarDash from "./header/Navbar";
import DashSidebar from "./Sidebar/DashSidebar";

function Dashlayput() {
  return (
    <Box >
      <NavbarDash />

      <Grid container >
        <Grid item xs={12} md={3} lg={2}>
          <DashSidebar />
        </Grid> 
        <Grid  item   
          xs={12}
          md={9}
          lg={10}
          sx={{overflowX:'hidden'}}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashlayput;
