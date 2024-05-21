import * as React from "react";

import Container from "@mui/material/Container";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import { Box } from "@mui/material";

function ResponsiveAppBar() {
  return (
    <>
    <Box sx={{ backgroundColor: 'primary.main', color: 'white',  }}>
      <Container>
        <TopBar />
      </Container>
      </Box>
      <NavBar />
      </>
  );
}
export default ResponsiveAppBar;
