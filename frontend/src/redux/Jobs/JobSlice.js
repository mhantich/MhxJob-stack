import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "./jobsApi";
const initialState = {
  getjobStatus: "idle",
  getJObError: null,
  jobs: null,
};

export const getJobsAsync = createAsyncThunk(
  "job/getJobsAsync",
  async (cred) => {
    const res = await getJobs();
    return res;
  }
)
const JobSlice = createSlice({
  name: "JobSlice",
  initialState: initialState,
  reducers: {
    resetJobStatus: (state) => {
      state.getjobStatus = "idle";
    },
    clearJObError: (state) => {
      state.getJObError = null;
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
      .addCase(getJobsAsync.pending, (state) => {
        state.getjobStatus = "pending";
      })
      .addCase(getJobsAsync.fulfilled, (state, action) => {
        state.getjobStatus = "fulfilled";
        state.jobs = action.payload;
      })
      .addCase(getJobsAsync.rejected, (state, action) => {
        state.getjobStatus = "rejected";
        state.getJObError = action.error;
      });
  },
});
export const selectJobs = (state) => state.JobSlice.jobs;
export const selectgetjobStatus = (state) => state.JobSlice.getjobStatus;
export const selectjobError = (state) => state.JobSlice.getjobError;
export default JobSlice.reducer;
