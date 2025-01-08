import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAccRoutine, loginRoutine } from "./auth.saga";
import { AuthLoginResponse, CreateAccResponse } from "../../api/api";

enum MessageType {
  SUCCESS = "success",
  ERROR = "error",
}

const initialState = {
  userId: "",
  authToken: "",
  username: "",
  isLoading: false,
  message: "",
  messageType: "",
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
    // @MARK: Login
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

    // @MARK: Create Account
    addCase(createAccRoutine.TRIGGER, (state) => {
      state.isLoading = true;
    });

    addCase(
      createAccRoutine.SUCCESS,
      (state, { payload }: PayloadAction<CreateAccResponse>) => {
        state.isLoading = false;
        state.message = payload.message;
        state.messageType = MessageType.SUCCESS;
      }
    );

    addCase(
      createAccRoutine.FAILURE,
      (state, { payload }: PayloadAction<CreateAccResponse>) => {
        state.isLoading = false;
        state.message = payload.message;
        state.messageType = MessageType.ERROR;
      }
    );
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
