import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createCatis, deleteCatis, getCatis, singleCatis } from "./catiApi";

const initialState = {
  getCatiStatus: "idle",
  getCatiError: null,
  deleteCatiStatus: "idle",
  deleteCatiError: null,
  createCatiStatus: "idle",
  createCatiError: null,
  editCatiStatus: "idle",
  editCatiError: null,
  Catis: null,
  createdCati: null,
  singleCati: null,
};






export const getCatisAsync = createAsyncThunk(
  "Cati/getCatisAsync",
  async () => {
  
      const data = await getCatis();
      return data;

  }
);


export const createCatisAsync = createAsyncThunk(
  "Cati/createCatisAsync",
  async (cred) => {
    const res = await createCatis(cred);
   
    return res;
  }
);
export const singleCatiAsync = createAsyncThunk(
  "Cati/singleCatiAsync",
  async (cred) => {
    const res = await singleCatis(cred);
   
    return res;
  }
);
export const deleteCatisAsync = createAsyncThunk(
  "Cati/deleteCatisAsync",
  async (cred) => {
    const res = await deleteCatis(cred);
   
    return res;
  }
);

const CatiSlice = createSlice({
  name: "CatiSlice",
  initialState: initialState,
  reducers: {
    resetCatiStatus: (state) => {
      state.getCatiStatus = "idle";
    },
    clearCatiError: (state) => {
      state.getCatiError = null;
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
      .addCase(getCatisAsync.pending, (state) => {
        state.getCatiStatus = "pending";
      })
      .addCase(getCatisAsync.fulfilled, (state, action) => {
        state.getCatiStatus = "fulfilled";
        state.Catis = action.payload;
      })
      .addCase(getCatisAsync.rejected, (state, action) => {
       
        state.getCatiStatus = "rejected";
        state.getCatiError = action.error;
      })

      .addCase(createCatisAsync.pending, (state) => {
        state.createCatiStatus = "pending";
      })
      .addCase(createCatisAsync.fulfilled, (state, action) => {
        state.createCatiStatus = "fulfilled";
        state.createdCati = action.payload;
      })
      .addCase(createCatisAsync.rejected, (state, action) => {
        state.createCatiStatus = "rejected";
     
        state.createCatiError = action.error; // Set the error object in the state
      })
      .addCase(singleCatiAsync.pending, (state) => {
        state.editCatiStatus = "pending";
      })
      .addCase(singleCatiAsync.fulfilled, (state, action) => {
        state.editCatiStatus = "fulfilled";
        state.singleCati = action.payload;
      })
      .addCase(singleCatiAsync.rejected, (state, action) => {
        state.editCatiStatus = "rejected";
      
        state.editCatiError = action.error; // Set the error object in the state
      });
  },
});

export const selectCatis = (state) => state.CatiSlice.Catis;

export const selectgetCatiStatus = (state) => state.CatiSlice.getCatiStatus;
export const selectCatiError = (state) => state.CatiSlice.getCatiError;

// export const selectLoginStatus = (state) => state.CatiSlice.loginStatus;
// export const selectLoginError = (state) => state.CatiSlice.loginError;

// exporting reducers
export const {
    resetCatiStatus,
    resetCatiErrors,
} = CatiSlice.actions;

export default CatiSlice.reducer;
