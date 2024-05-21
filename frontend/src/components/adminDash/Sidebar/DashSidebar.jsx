import React from "react";
import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from "@mui/icons-material/Work";

import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, } from "react-redux";
import { logoutAsync } from "../../../redux/auth/AuthSlice";

export default function DashSidebar() {
  const {pathname} = useLocation();

const dispatch = useDispatch()



  return (
    <Box
      sx={{
        width: { xs: "100%" },
        height: { md: "100dvh" },
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        overflow: "auto",

        gap: 3,
        backgroundColor: "white",
        padding: "1rem",
      }}
      className="w-full md:w-56"
    >
            <Link to="/">
        <Button startIcon={<HomeIcon />}    >
          home
        </Button>
      </Link>

      <Link to="profile">
        <Button startIcon={<PersonIcon />}   >
          Profile
        </Button>
      </Link>

      <>
        <Link to="applecations">
          <Button startIcon={<WorkIcon />} >
            your applecations
          </Button>

        </Link>

      </>

      {/* Sign Out Button */}
      <Box sx={{display:{xs:'none',md:'block'}}}>
        <Button  sx={{    flexGrow: 1,
      color: "black",
      width: "100%",
      display: "inline-flex", // Ensure the button remains inline without wrapping
      whiteSpace: "nowrap", // Prevent text from wrapping
      justifyContent: "start !important",
      textAlign: "start",
      border: "none   !important",
}} onClick={()=>{dispatch(logoutAsync())}} startIcon={<LogoutIcon />} >
          log out
        </Button>
      </Box>
    </Box>
  );
}
