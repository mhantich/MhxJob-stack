import React from "react";
import { Box, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

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
      <Link to="profile">
        <Button icons={<PersonIcon />}   active={pathname === "/dash/profile"   }>
          Profile
        </Button>
      </Link>

      <>
        <Link to="applecations">
          <Button icons={<WorkIcon />} active={pathname  === "/dash/applecations"}>
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
}} onClick={()=>{dispatch(logoutAsync())}} icons={<LogoutIcon />} >
          log out
        </Button>
      </Box>
    </Box>
  );
}
