import { delay, put, takeEvery, takeLatest, takeLeading, call } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment, incrementByAmountSaga, incrementByAmountSagaSuccess } from './counterSlice';

export function* log(action: PayloadAction) {
  console.log('Log actions: ', action);
}

export function* myDelay(time: number) {
  yield delay(time);
}

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Handle Saga: ', action);

  yield call(myDelay, 1000);

  console.log('Waiting done');

  yield put(incrementByAmountSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('Start log sata');
  //   yield takeEvery('*', log);
  yield takeLatest(incrementByAmountSaga.type, handleIncrementSaga);
}
