import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../lib/store";

interface User {
  accessToken: string;
  issuedAt: string;
}

// User Interface
interface AuthenticationState {
  user: User;
  loggedIn: boolean;
}

const initialState: AuthenticationState = {
  user: {
    accessToken: "",
    issuedAt: "",
  },
  loggedIn: false,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loggedIn = !state.loggedIn;
    },
    logout: (state) => {
      state.user.accessToken = "";
      state.user.issuedAt = "";
      state.loggedIn = false;
    },
  },
});

export const { loginSuccess, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
