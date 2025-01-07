import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const authStore = (state: RootState) => state.authReducer;

export const usernameSelector = createSelector(authStore, (store) => {
  return store.username;
});

export const tokenSelector = createSelector(authStore, (store) => {
  return store.authToken;
});

export const isAuthLoadingSelector = createSelector(
  authStore,
  (store) => store.isLoading
);
