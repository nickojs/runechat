import { PayloadAction } from "@reduxjs/toolkit";
import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";
import { AnyAction } from "redux-saga";
import { createRoutine } from "redux-saga-routines";

import { login } from "../../api/endpoints";
import { LoginData } from "../../components/auth/login";
import { AuthLoginResponse } from "../../api/api";
import storageHelper from "../../helpers/storage";

// routines
export const loginRoutine = createRoutine("AUTH/LOGIN");

// sagas
function* loginSaga(
  action: PayloadAction<LoginData>
): Generator<
  CallEffect<AuthLoginResponse> | PutEffect<AnyAction>,
  void,
  AuthLoginResponse
> {
  try {
    const data: AuthLoginResponse = yield call(login, action.payload);
    const token = data.user.authToken;
    storageHelper.auth.set(token);
    yield put(loginRoutine.success(data));
  } catch (err) {
    yield put(loginRoutine.failure(err));
  }
}

function* watchAuthSagaRequests() {
  yield takeEvery(loginRoutine.TRIGGER, loginSaga);
}

export default watchAuthSagaRequests;
