import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@emotion/react";
import "./App.css";

import theme from "./theme";
import { RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import { Rts } from "./Routess";
import { getCatisAsync } from "./redux/cati/CatiSlice";
import { useEffect } from "react";
import { checkAuthAsync, selectLoggedInUser } from "./redux/auth/AuthSlice";

function App() {
  const distaptch = useDispatch();
  useEffect(() => {
    distaptch(getCatisAsync());
  }, [distaptch]);
const user = useSelector(selectLoggedInUser)
  useEffect(() => {
    if(!user)distaptch(checkAuthAsync());
   
  }, [distaptch,user]);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <RouterProvider router={Rts} />
    </ThemeProvider>
  );
}

export default App;
