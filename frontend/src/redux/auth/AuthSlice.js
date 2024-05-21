import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, signup , checkAuth, logout} from "./AuthApi";

const initialState = {
  status: "idle",
  errors: null,
  signupStatus: "idle",
  signupError: null,
  loginStatus: "idle",
  loginError: null,
  loggedInUser: null,
  successMessage: null,
  userssError: null,
  userssStatus: null,
};

export const signupAsync = createAsyncThunk(
  "auth/signupAsync",
  async (cred) => {
    const res = await signup(cred);
    return res;
  }
);

export const loginAsync = createAsyncThunk("auth/loginAsync", async (cred) => {
  const res = await login(cred);
  return res;
});

export const checkAuthAsync=createAsyncThunk('auth/checkAuthAsync',async()=>{
  const res=await checkAuth()
  return res
})


export const logoutAsync=createAsyncThunk("auth/logoutAsync",async()=>{
  const res=await logout()
  return res
})

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    clearAuthSuccessMessage: (state) => {
      state.successMessage = null;
    },
    clearAuthErrors: (state) => {
      state.errors = null;
    },
    resetSignupStatus: (state) => {
      state.signupStatus = "idle";
    },
    clearSignupError: (state) => {
      state.signupError = null;
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
    .addCase(checkAuthAsync.pending,(state)=>{
      state.status='pending'
  })
  .addCase(checkAuthAsync.fulfilled,(state,action)=>{
      state.status='fullfilled'
      state.loggedInUser=action.payload
      state.isAuthChecked=true
  })
  .addCase(checkAuthAsync.rejected,(state,action)=>{
      state.status='rejected'
      state.errors=action.error
      state.isAuthChecked=true
  })
      .addCase(signupAsync.pending, (state) => {
        state.signupStatus = "pending";
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.signupStatus = "fulfilled";

      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.signupStatus = "rejected";
        state.signupError = action.error;
      })

      
      .addCase(loginAsync.pending, (state) => {
        state.loginStatus = "pending";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loginStatus = "fulfilled";
        state.status='fullfilled'
        state.loggedInUser = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        
        state.loginStatus = "rejected";
        
        state.loginError = action.error; // Set the error object in the state
    })
    
    .addCase(logoutAsync.pending,(state)=>{
      state.status='pending'
  })
  .addCase(logoutAsync.fulfilled,(state)=>{
      state.status='fullfilled'
      state.loggedInUser=null
  })
  .addCase(logoutAsync.rejected,(state,action)=>{
      state.status='rejected'
      state.errors=action.error
  })
  },
});

// exporting selectors
export const selectAuthStatus = (state) => state.authSlice.status;
export const selectAuthErrors = (state) => state.authSlice.errors;
export const selectLoggedInUser = (state) => state.authSlice.loggedInUser;
export const selectAuthSuccessMessage = (state) =>
  state.authSlice.successMessage;

export const selectSignupStatus = (state) => state.authSlice.signupStatus;
export const selectSignupError = (state) => state.authSlice.signupError;

export const selectLoginStatus = (state) => state.authSlice.loginStatus;
export const selectLoginError = (state) => state.authSlice.loginError;



export const selectalluserss = (state) => state.authSlice.alluserss;
export const selectallusersssERR = (state) => state.authSlice.userssError;
export const selectalluserssSts = (state) => state.authSlice.userssStatus;


// exporting reducers
export const {
  clearAuthSuccessMessage,
  clearAuthErrors,
  resetSignupStatus,
  clearSignupError,
  resetLoginStatus,
  clearLoginError,
} = authSlice.actions;

export default authSlice.reducer;
