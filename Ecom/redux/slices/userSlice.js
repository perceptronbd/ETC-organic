import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isSignedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
});

export const { setUser, setIsSignedIn } = userSlice.actions;

export const selectUser = (state) => state.user;

export const selectIsSignedIn = (state) => state.user.isSignedIn;

export default userSlice.reducer;
