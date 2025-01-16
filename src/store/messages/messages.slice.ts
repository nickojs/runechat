import { createSlice } from "@reduxjs/toolkit";
import { MessageObject } from "../../types/socket";

export const initialState = {
  messages: [] as MessageObject[],
};

export type MessagesState = typeof initialState;

export const messagesSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    addMessage: (state, { payload }: { payload: MessageObject }) => {
      return {
        ...state,
        messages: [...state.messages, payload],
      };
    },
    clearMessages: () => {
      return { ...initialState };
    },
  },
});

export const { addMessage, clearMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
