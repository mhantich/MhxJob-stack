import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Container,
  Stack,
} from "@mui/material";

import "react-datepicker/dist/react-datepicker.css";
import {
  selectSingleofferess,
  singleofferesAsync,
} from "../../../redux/offerce/offeresSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { createBookingsAsync } from "../../../redux/booking/bookingSlice";
import { toast } from "react-toastify";
import { selectLoggedInUser } from "../../../redux/auth/AuthSlice";
function JobDietlie() {
  const job = useSelector(selectSingleofferess);
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle date change
  const handleDateChange = (newDate) => {
    if (!newDate) return toast.error(`Please select a future date`); 
    if (newDate < new Date()) return toast.error(`Please select a future date`); 
    setSelectedDate(newDate);

  
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleofferesAsync(id));
  }, [id,dispatch]);
 
  const currentUser = useSelector(selectLoggedInUser);

const navigator =useNavigate()
  const handleBooking = () => {
    if (currentUser === null) return navigator("/Login");
    if (selectedDate === null) return toast.error(`Please select a date`);
    dispatch(
      createBookingsAsync({
        date: selectedDate,
        workOfferId: id,
        userId: currentUser?._id,
      })
    );
  };

  return (
    <Container>
      <Grid sx={{ marginBlock: "2rem" }} container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: "10rem", md: "20rem" },
              backgroundColor: "red",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={job?.photo}
              alt=""
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Stack spacing={1}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {job?.name}
              </Typography>
              <Typography sx={{ fontSize: "0.7rem" }} color="primary">
                experience: {job?.experience} years
              </Typography>
            </Stack>
            <Typography variant="h6" color="primary">
              {job?.city}
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontSize: "0.7rem" }}
              color="primary"
            >
              {job?.salary}$/hour
            </Typography>

            <Button
              onClick={handleBooking}
              sx={{ width: "100%" }}
              color="secondary"
              variant="outlined"
            >
              book now
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              className="container"
              orientation="landscape"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default JobDietlie;
