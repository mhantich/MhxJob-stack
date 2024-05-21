import { Avatar, Box, Button, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search"
import { selectLoggedInUser } from "../../../redux/auth/AuthSlice";


function NavBar() {

  
  const selectuser = useSelector(selectLoggedInUser);
  return (
    <div style={{ display: "flex", backgroundColor: "#093A3E" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "primary.main",
        color:'white',
          flexGrow: 1,
        }}
        variant="h5"
      >
       <h3>Dash</h3>
      </Box>

      <Box
        sx={{
          flexGrow: 2,
          paddingInlineStart: "2rem",
          display: "flex",
          backgroundColor: "white",
          justifyContent: { xs: "end", md: "space-between" },
          borderTopLeftRadius: "15px",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex",padding:'0.5rem' }, alignItems: "center" }}>
        <TextField
                color="secondary"
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
        </Box>
        <Box
          sx={{
            display: "flex",
            p: 1,
            gap: 1,
            // paddingRight: "4rem",
            alignItems: "center",
          }}
        >
       
            <Stack
              direction={"row"}

              alignItems={'center'}
              spacing={0.5}
              sx={{ display: { xs: "flex", md: "flex" } }}
            >
              
           

  <Typography sx={{fontSize:"0.9rem"}} variant="h6" >{selectuser.name}</Typography>
  <Avatar
  alt="Remy Sharp"
  src={selectuser.profilePhoto}
  sx={{ width: 38, height: 38 }}
/>
              <Button sx={{display:{md:'none'}}} variant="contained" color="secondary">
                logout
              </Button>
            </Stack>
          
        </Box>
      </Box>
  
    </div>
  );
}

export default NavBar;
