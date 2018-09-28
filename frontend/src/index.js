import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import bookReducer from "./reducers/books";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(bookReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(bookReducer),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
