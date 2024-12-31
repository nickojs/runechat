import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./auth/auth.slice";
import watchAuthSagaRequests from "./auth/auth.saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const sagas = [watchAuthSagaRequests];

const reducers = combineReducers({
  authReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagas.forEach((saga) => sagaMiddleware.run(saga));

export type RootState = ReturnType<typeof reducers>;
