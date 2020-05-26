import Cookies from 'js-cookie';
import { SessionAction } from '../actions';



const Credentials = Cookies.get(SessionAction.Cookies.CREDENTIALS);
const SessionDefaults =
(
    Credentials && { ...JSON.parse(Credentials), authenticated: true }
)
||
{
    authenticated: false,
    credentials: {
        userName: 'annonymous'
    },
    questions: {},
    users: {}
};


export {
    SessionDefaults
};
