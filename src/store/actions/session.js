import { createAction, createActionTypes } from './shared';

// Store partition key.
const KEY = 'SESSION';

const SessionAction =
{

    Key: KEY,

    Types: createActionTypes(KEY, {
        GET_USERS: 'GET_USERS',
        FETCH_USERS: 'FETCH_USERS',
        FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
        FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',

        LOGIN: 'LOGIN',
        LOGIN_SUCCESS: 'LOGIN_SUCCESS',
        LOGIN_ERROR: 'LOGIN_ERROR',
        LOGOUT: 'LOGOUT',

        GET_QUESTION: 'GET_QUESTION',
        FETCH_QUESTION: 'FETCH_QUESTION',
        FETCH_QUESTION_SUCCESS: 'FETCH_QUESTION_SUCCESS',
        FETCH_QUESTION_ERROR: 'FETCH_QUESTION_ERROR',

        FETCH_QUESTION_ANSWER: 'FETCH_QUESTION_ANSWER',
        FETCH_QUESTION_ANSWER_SUCCESS: 'FETCH_QUESTION_ANSWER_SUCCESS',
        FETCH_QUESTION_ANSWER_ERROR: 'FETCH_QUESTION_ANSWER_ERROR',
    }),

    Cookies: createActionTypes(KEY, {
        CREDENTIALS: 'CREDENTIALS'
    }),


    Action: (type, payload) => createAction(SessionAction.Key, type, payload)
};

export default Object.freeze(SessionAction);
