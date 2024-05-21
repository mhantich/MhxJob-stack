import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createBookings, getBookings  } from "./BookingApi";

const initialState = {
  getBookingStatus: "idle",
  getBookingError: null,
  createBookingStatus: "idle",
  createBookingError: null,
  Bookings: null,

};


export const createBookingsAsync = createAsyncThunk("Booking/createBookingsAsync",
  async (cred) => {
    const res = await createBookings(cred);
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
    resetcreateBookingStatus: (state) => {
      state.createBookingStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder

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

export const selectgetBookingStatus = (state) => state.BookingSlice.createBookingStatus;
export const selectBookingError = (state) => state.BookingSlice.getBookingError;


// exporting reducers
export const {
    resetBookingStatus,
    resetBookingErrors,
    resetcreateBookingStatus
} = BookingSlice.actions;

export default BookingSlice.reducer;
