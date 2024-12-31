import { PayloadAction } from "@reduxjs/toolkit";
import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from "redux-saga/effects";
import { createRoutine } from "redux-saga-routines";

import { login } from "../../api/endpoints";
import { LoginData } from "../../components/auth/login";
import { AnyAction } from "redux-saga";
import { AuthLoginResponse } from "../../api/api";

// routines
export const loginRoutine = createRoutine("AUTH/LOGIN");

// sagas
function* loginSaga(
  action: PayloadAction<LoginData>
): Generator<
  CallEffect<AuthLoginResponse> | PutEffect<AnyAction>,
  void,
  LoginData
> {
  try {
    const data = yield call(login, action.payload);
    yield put(loginRoutine.success(data));
  } catch (err) {
    yield put(loginRoutine.failure(err));
  }
}

function* watchAuthSagaRequests() {
  yield takeEvery(loginRoutine.TRIGGER, loginSaga);
}

export default watchAuthSagaRequests;
