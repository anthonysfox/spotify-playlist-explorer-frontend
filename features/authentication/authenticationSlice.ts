import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  _id: string;
  fullName: string;
  email: string;
  providerId: string;
  providerType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface LoginResponse {
  user: User;
  accessToken: string;
  issuedAt: string;
}

interface AuthenticationState {
  user: User;
  accessToken: string;
  issuedAt: string;
  loggedIn: boolean;
}

const initialState: AuthenticationState = {
  user: {
    _id: "",
    fullName: "",
    email: "",
    providerId: "",
    providerType: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
  accessToken: "",
  issuedAt: "",
  loggedIn: false,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      const { user, accessToken, issuedAt } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.issuedAt = issuedAt;
      state.loggedIn = !state.loggedIn;
    },
    logout: (state) => {
      state.user = {
        _id: "",
        fullName: "",
        email: "",
        providerId: "",
        providerType: "",
        createdAt: "",
        updatedAt: "",
        __v: 0,
      };
      state.accessToken = "";
      state.issuedAt = "";
      state.loggedIn = false;
    },
  },
});

export const { loginSuccess, logout } = authenticationSlice.actions;

export const isLoggedIn = (state) => state.authentication.user.loggedIn;

export default authenticationSlice.reducer;
