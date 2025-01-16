import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import watchAuthSagaRequests from "./auth/auth.saga";
import authReducer from "./auth/auth.slice";
import messagesReducer from "./messages/messages.slice";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const sagas = [watchAuthSagaRequests];

export const reducers = combineReducers({
  authReducer,
  messagesReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagas.forEach((saga) => sagaMiddleware.run(saga));

export type RootState = ReturnType<typeof reducers>;
