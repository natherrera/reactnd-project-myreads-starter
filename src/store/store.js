import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import middleware from './middleware';

/* Creates Saga middleware factory. */
const saga = createSagaMiddleware();

/* Creates the store with reducers and Saga middleware. */
export default createStore(reducers, applyMiddleware(saga));

/* Runs Saga root middleware. */
saga.run(middleware);
