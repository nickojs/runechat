import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const messagesStore = (state: RootState) => state.messagesReducer;

export const allMessagesSelector = createSelector(messagesStore, (store) => {
  return store.messages;
});
