import { Avatar, Box, Button, Drawer, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../redux/auth/AuthSlice";
import AccountMenu from "./AccountMenu";
const DrawerList = ({ item }) => (







  <Box
    sx={{
      width: 250,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      paddingBlock: "2rem",
      backgroundColor: "black",
      height: "100%",
    }}
  >
    {item.map((page, index) => (
      <Link key={index} to={page === "Home" ? "/" : page}>
        <Button
          key={page}
          sx={{
            fontSize: "0.9rem",

            display: "block",
            color: "white",
          }}
        >
          {page}
        </Button>
      </Link>
    ))}
  </Box>
);

function NavBar() {
  const pages = ["Home", "About", "Services", "Contact", "Jobs",'Offers'];
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => () => {
    setOpen(!open);
  };
  const selectuser = useSelector(selectLoggedInUser);
  return (
    <div style={{ display: "flex", backgroundColor: "black" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "primary.main",

          flexGrow: 1,
        }}
        variant="h5"
      >
        <Avatar
          sx={{ width: { xs: 70, md: 100 }, height: 24 }}
          variant="square"
          src="/logo.png"
        />
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
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {pages.map((page, index) => (
            <Link key={index} to={`${page === "Home" ? "/" : page}`}>
              <Button
                key={page}
                sx={{
                  fontSize: "0.7rem",
                  color: "black",
                  display: "block",
                }}
              >
                {page}
              </Button>
            </Link>
          ))}
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
          {selectuser ? (
            <Stack
              direction={"row"}

              alignItems={'center'}
              spacing={0.5}
              sx={{ display: {  md: "flex" } }}
            >
            




  <AccountMenu user={selectuser}/>
        
            </Stack>
          ) : (
            <Stack
              direction={"row"}
              spacing={0.5}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Link to="/Login">
                <Button variant="outlined" color="secondary">
                  Login
                </Button>
              </Link>
              <Link to="Regester">
                <Button variant="contained" color="secondary">
                  Regester
                </Button>
              </Link>
            </Stack>
          )}
        {  !selectuser &&      <Stack
              direction={"row"}
              spacing={0.5}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Link to="/Login">
                <Button variant="outlined" color="secondary">
                  Login
                </Button>
              </Link>
              <Link to="Regester">
                <Button variant="contained" color="secondary">
                  Regester
                </Button>
              </Link>
            </Stack>}
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ display: { md: "none" } }} />
          </Button>
        </Box>
      </Box>
      
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList item={pages} />
      </Drawer>
    </div>
  );
}

export default NavBar;

