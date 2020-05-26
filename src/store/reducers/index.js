import { combineReducers } from 'redux';
import { SessionAction } from '../actions';
import SessionReducer from './session';

/* Combine every reducers for store initialization. */
export default combineReducers({
    [SessionAction.Key]: SessionReducer,
});
