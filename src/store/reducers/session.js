import SessionAction from '../actions/session';
import {SessionDefaults} from './defaults';

function SessionReducer(state = SessionDefaults, action) {
    switch (action.type) {
        case SessionAction.Types.GET_USERS:
            return {
                ... state
            };

        case SessionAction.Types.FETCH_USERS:
            return {
                ... state,
                usersLoading: ! state.users || Object.keys(state.users).length === 0
            };

        case SessionAction.Types.FETCH_USERS_SUCCESS:
            delete state.errorMessage;

            return {
                ... state,
                users: action.payload.users,
                usersLoading: false
            };

        case SessionAction.Types.FETCH_USERS_ERROR:

            return {
                ... state,
                usersLoading: false,
                errorMessage: action.payload.errorMessage
            };

        case SessionAction.Types.GET_QUESTION:
            return {
                ... state
            };

        case SessionAction.Types.FETCH_QUESTION:
            return {
                ... state
            };

        case SessionAction.Types.FETCH_QUESTION_SUCCESS:

            {
                debugger;
                const {author, id, idName} = action.payload.response;
                const stateAux = state ?? {};
                const stateAuthor = stateAux.users[idName] ?? {};
                console.log(stateAuthor.questions);
                debugger;
                return {
                    ... stateAux,
                    users: {
                        ... stateAux.users,
                        [author]: {
                            ... stateAuthor,
                            questions: [
                                ... stateAuthor.questions,
                                id,
                            ]
                        }
                    },
                    questions: {
                        ... stateAux.questions,
                        [id]: action.payload.response
                    }
                };
            }


        case SessionAction.Types.FETCH_QUESTION_ERROR:

            return {
                ... state,
                questionLoading: false,
                errorMessage: action.payload.errorMessage
            };


        case SessionAction.Types.FETCH_QUESTION_ANSWER:
            return {
                ... state
            };

        case SessionAction.Types.FETCH_QUESTION_ANSWER_SUCCESS:

            {
                const {authedUser, qid, answer} = action.payload;


                const stateAux = state ?? {};
                const stateUsers = stateAux.users ?? {}
                const stateAuthor = stateUsers[authedUser] ?? {};


                return {
                    ... state,
                    users: {
                        ... state.users,
                        [authedUser]: {
                            ... stateAuthor,
                            answers: {
                                ... stateAuthor.answers,
                                [qid]: answer
                            }
                        }
                    },
                    questions: {
                        ... state.questions,
                        [qid]: {
                            ... state[qid],
                            [answer]: {
                                ... state[answer],
                                votes: {
                                    ... state.votes,
                                    ...[authedUser]
                                }
                            }
                        }
                    }
                };
            }

        case SessionAction.Types.FETCH_QUESTION_ANSWER_ERROR:

            return {
                ... state,
                questionLoading: false,
                errorMessage: action.payload.errorMessage
            };

        case SessionAction.Types.LOGIN:
            return {
                ... state,
                loading: true
            };

        case SessionAction.Types.LOGIN_SUCCESS:
            delete state.errorMessage;

            return {
                ... state,
                loading: false,
                authenticated: true,
                credentials: action.payload
            };

        case SessionAction.Types.LOGIN_ERROR:

            return {
                ... state,
                loading: false,
                authenticated: false,
                errorMessage: action.payload.errorMessage
            };

        case SessionAction.Types.LOGOUT:
            return {
                loading: false,
                authenticated: false
            };

        default:
            return state;
    }
}

export default SessionReducer;
