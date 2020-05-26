import Cookies from 'js-cookie';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SessionAction } from '../actions/';
import webClient from './../../services/webClient';


function* login(action)
{
    try
    {
        const {
            history
        } = action.payload;

        yield put(SessionAction.Action(SessionAction.Types.LOGIN_SUCCESS, action.payload.credentials));

        history.push('/main');
        Cookies.set(SessionAction.Cookies.CREDENTIALS, {
            credentials: action.payload.credentials
        });

    }
    catch (e)
    {
        yield put(SessionAction.Action(SessionAction.Types.LOGIN_ERROR, { errorMessage: e.message }));
    }
}

function* getUsers()
{
    yield put(SessionAction.Action(SessionAction.Types.FETCH_USERS));
}

function* fetchUsers()
{
    try
    {
        const response = yield call(webClient._getUsers);
        if ( response && response !== 'Error' && response !== null && response !== 'null' )
        {

            const users = response;
            yield put(SessionAction.Action(SessionAction.Types.FETCH_USERS_SUCCESS, { users }));
        }
        else
        {
            yield put(SessionAction.Action(SessionAction.Types.FETCH_USERS_ERROR, {
                errorMessage: 'No se pudo establecer la conexión con el servidor'
            }));
        }
    }
    catch (e)
    {
        yield put(SessionAction.Action(SessionAction.Types.FETCH_USERS_ERROR, { errorMessage: e.message }));
    }
}

function* getQuestion()
{
    yield put(SessionAction.Action(SessionAction.Types.FETCH_QUESTION));
}

function* fetchQuestion(action)
{
    const request = action.payload
    try {
        const response = yield (webClient._saveQuestion(request));

        if ( response && response !== 'Error' && response !== null && response !== 'null' )
        {
            yield put(SessionAction.Action(SessionAction.Types.FETCH_QUESTION_SUCCESS, { response }));
        }
        else
        {
            yield put(SessionAction.Action(SessionAction.Types.FETCH_QUESTION_ERROR, {
                errorMessage: 'No se pudo establecer la conexión con el servidor'
            }));

        }

    } catch (error) {
        yield put(SessionAction.Action(SessionAction.Types.FETCH_QUESTION_ERROR, {
            errorMessage: error.message
        }));
    }
}

function* fetchQuestionAnswer(action) {

    try {
        yield put(SessionAction.Action(SessionAction.Types.FETCH_QUESTION_ANSWER_SUCCESS,  action.payload ));
    } catch (error) {
        yield put(SessionAction.Action(SessionAction.Types.FETCH_QUESTION_ANSWER_ERROR, {
            errorMessage: error.message
        }));
    }
}

const logout = (action) =>
{
    action.payload.push('/main/login');
    Cookies.remove(SessionAction.Cookies.CREDENTIALS);
};

export default function* initSession()
{
    yield all(
        yield takeLatest(SessionAction.Types.GET_USERS, getUsers),
        yield takeLatest(SessionAction.Types.FETCH_USERS, fetchUsers),
        yield takeLatest(SessionAction.Types.GET_QUESTION, getQuestion),
        yield takeLatest(SessionAction.Types.FETCH_QUESTION, fetchQuestion),
        yield takeLatest(SessionAction.Types.FETCH_QUESTION_ANSWER, fetchQuestionAnswer),
        yield takeLatest(SessionAction.Types.LOGIN, login),
        yield takeLatest(SessionAction.Types.LOGOUT, logout)
    );
}
