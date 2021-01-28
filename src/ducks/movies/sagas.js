import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { movies } from 'popcorntime';
import { FAILURE, REQUEST, SUCCESS } from './types';

const fetchMovies = async () => {
  const options = {
    page: 1,
    sortby: 'seeds',
    genre: 'all',
    q: ''
  }
  const data = await movies(options);
  return Promise.all(data);
}

function* getMovies() {
  try {
    const data = yield call(fetchMovies);
    yield put({
      type: SUCCESS,
      data: data
    })
  } catch (error) {
    yield put({
      type: FAILURE,
      message: error.message
    })
  }
}

export default function* mediaSaga() {
  yield takeEvery(REQUEST, getMovies);
}