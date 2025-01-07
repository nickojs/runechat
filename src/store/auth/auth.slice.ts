import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginRoutine } from "./auth.saga";
import { AuthLoginResponse } from "../../api/api";

const initialState = {
  userId: "",
  authToken: "",
  username: "",
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(loginRoutine.TRIGGER, (state) => {
      state.isLoading = true;
    });

    addCase(
      loginRoutine.SUCCESS,
      (state, { payload }: PayloadAction<AuthLoginResponse>) => {
        state.isLoading = false;
        state.authToken = payload.user.authToken;
        state.userId = payload.user.id;
        state.username = payload.user.username;
      }
    );
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
