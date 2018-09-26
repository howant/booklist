import { takeEvery, all, call, put } from "redux-saga/effects";
import { bookSuccess } from "../actions";


export default function* rootSaga() {
  yield all([watchRequestBooks()]);
}

function* watchRequestBooks() {
  yield takeEvery("REQUEST_BOOKS", requestBooklist);
}

function* requestBooklist() {
  try {
    const response = yield call(fetch, 'https://my-json-server.typicode.com/howant/booklist/db');
    const responseBody = yield response.json();
    console.log(responseBody);
    yield put(bookSuccess(responseBody));
  } catch (e) {
    console.log("Request failed...");
    return;
  }
}
