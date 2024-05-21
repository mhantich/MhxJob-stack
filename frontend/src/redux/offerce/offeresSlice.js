import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getofferess, singleofferess, wrokerOfferc } from "./offeresApi";
const initialState = {
  getofferesStatus: "idle",
  getofferesError: null,
  offeress: null,
  singleofferes: null,
  getsingleStatus: "idle",
  getsingleError: null,
  wrokerOfferss: null,
  getwrokerStatus: "idle",
  getwrokerError: null,
  userApp: null,
};

export const getofferessAsync = createAsyncThunk(
  "offeres/getofferessAsync",
  async (cred) => {
    const data = await getofferess(cred);
    return data;
  }
);
export const wrokerOffercasync = createAsyncThunk(
  "offeres/wrokerOffercasync",
  async (cred) => {
    const res = await wrokerOfferc(cred);

    return res;
  }
);
export const singleofferesAsync = createAsyncThunk(
  "offeres/singleofferesAsync",
  async (cred) => {
    const res = await singleofferess(cred);

    return res;
  }
);
const offeresSlice = createSlice({
  name: "offeresSlice",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getofferessAsync.pending, (state) => {
        state.getofferesStatus = "pending";
      })
      .addCase(getofferessAsync.fulfilled, (state, action) => {
        state.getofferesStatus = "fulfilled";
        state.offeress = action.payload;
      })
      .addCase(getofferessAsync.rejected, (state, action) => {
        state.getofferesStatus = "rejected";
        state.getofferesError = action.error;
      })

      .addCase(singleofferesAsync.pending, (state) => {
        state.getsingleStatus = "pending";
      })
      .addCase(singleofferesAsync.fulfilled, (state, action) => {
        state.getsingleStatus = "fulfilled";
        state.singleofferes = action.payload;
      })
      .addCase(singleofferesAsync.rejected, (state, action) => {
        state.getsingleStatus = "rejected";

        state.getsingleError = action.error; 
      })
      .addCase(wrokerOffercasync.pending, (state) => {
        state.getwrokerStatus = "pending";
      })
      .addCase(wrokerOffercasync.fulfilled, (state, action) => {
        state.getwrokerStatus = "fulfilled";
        state.wrokerOfferss = action.payload;
      })
      .addCase(wrokerOffercasync.rejected, (state, action) => {
        state.getwrokerStatus = "rejected";
        state.getwrokerError = action.error; 
      });
  },
});

export const selectofferess = (state) => state.offeresSlice.offeress;
export const selectSingleofferess = (state) => state.offeresSlice.singleofferes;
export const selectwrokerOfferss = (state) => state.offeresSlice.wrokerOfferss;
export const selectgetofferesStatus = (state) => state.offeresSlice.getofferesStatus;
export const selectofferesError = (state) => state.offeresSlice.getofferesError;
export default offeresSlice.reducer;
