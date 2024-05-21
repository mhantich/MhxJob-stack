import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createBooking,  getBooking } from "./bookingpi";

const initialState = {
  getBookingStatus: "idle",
  getBookingError: null,
  deleteBookingStatus: "idle",
  deleteBookingError: null,
  createBookingStatus: "idle",
  createBookingError: null,
  editBookingStatus: "idle",
  editBookingError: null,
  Bookings: null,
  createdBooking: null,
  singleBooking: null,
};

export const getBookingsAsync = createAsyncThunk(
  "Booking/getBookingsAsync",
  async (cred) => {
    const res = await getBooking();
    return res;
  }
);

export const createBookingsAsync = createAsyncThunk(
  "Booking/createBookingsAsync",
  async (cred) => {
    const res = await createBooking(cred);
    return res;
  }
);


const BookingSlice = createSlice({
  name: "BookingSlice",
  initialState: initialState,
  reducers: {
    resetBookingStatus: (state) => {
      state.getBookingStatus = "idle";
    },
    clearBookingError: (state) => {
      state.getBookingError = null;
    },
    resetLoginStatus: (state) => {
      state.loginStatus = "idle";
    },
    clearLoginError: (state) => {
      state.loginError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingsAsync.pending, (state) => {
        state.getBookingStatus = "pending";
      })
      .addCase(getBookingsAsync.fulfilled, (state, action) => {
        state.getBookingStatus = "fulfilled";
        state.Bookings = action.payload;
      })
      .addCase(getBookingsAsync.rejected, (state, action) => {
        state.getBookingStatus = "rejected";
        state.getBookingError = action.error;
      })

      .addCase(createBookingsAsync.pending, (state) => {
        state.createBookingStatus = "pending";
      })
      .addCase(createBookingsAsync.fulfilled, (state, action) => {
        state.createBookingStatus = "fulfilled";
        state.createdBooking = action.payload;
      })
      .addCase(createBookingsAsync.rejected, (state, action) => {
        state.createBookingStatus = "rejected";
       
        state.createBookingError = action.error; // Set the error object in the state
      })
 
  },
});

export const selectBookings = (state) => state.BookingSlice.Bookings;

export const selectgetBookingStatus = (state) => state.BookingSlice.getBookingStatus;
export const selectBookingError = (state) => state.BookingSlice.getBookingError;

// export const selectLoginStatus = (state) => state.BookingSlice.loginStatus;
// export const selectLoginError = (state) => state.BookingSlice.loginError;

// exporting reducers
export const {
    resetBookingStatus,
    resetBookingErrors,
} = BookingSlice.actions;

export default BookingSlice.reducer;
