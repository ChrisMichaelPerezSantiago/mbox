import { all } from 'redux-saga/effects';
import mediaSaga from './ducks/movies/sagas';

export default function* rootSaga() {
  yield all([
    mediaSaga(),
  ]);
}