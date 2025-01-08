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

import { createAcc, login } from "../../api/endpoints";
import { LoginData } from "../../components/auth/login";
import { AuthLoginResponse, CreateAccResponse } from "../../api/api";
import storageHelper from "../../helpers/storage";

// routines
export const loginRoutine = createRoutine("AUTH/LOGIN");
export const createAccRoutine = createRoutine("AUTH/CREATE_ACCOUNT");

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

function* createAccSaga(
  action: PayloadAction<LoginData>
): Generator<
  CallEffect<CreateAccResponse> | PutEffect<AnyAction>,
  void,
  CreateAccResponse
> {
  try {
    const data: CreateAccResponse = yield call(createAcc, action.payload);
    yield put(createAccRoutine.success(data));
  } catch (err) {
    console.log(err);
    yield put(createAccRoutine.failure(err));
  }
}

function* watchAuthSagaRequests() {
  yield takeEvery(loginRoutine.TRIGGER, loginSaga);
  yield takeEvery(createAccRoutine.TRIGGER, createAccSaga);
}

export default watchAuthSagaRequests;
