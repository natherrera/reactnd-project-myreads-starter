/* eslint-disable no-console */
import { select, takeEvery } from 'redux-saga/effects';

/**
 * Logger saga middleware.
 *
 * @export logger
 */
export default function* logger()
{
    yield takeEvery('*', function* logger(action)
    {
        // Retrieves current state.
        const state = yield select();

        console.group('Action:', action.key, action.type);
        console.log('Content:', action);
        console.log('State After:', state);
        console.groupEnd();
    });
}
