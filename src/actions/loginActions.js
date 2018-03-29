import { LOGGING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/loginConstants'

// export function fetchLoginFromAPI(username, password){
//     return (dispatch) => {
//         dispatch(getLogin())
//         fetch('http://smartqueue.com/api/login', {
//             method: 'POST',
//             body: JSON.stringify({ Username: username, Password: password })
//         })
//         .then(res => res.json()
//         .then(json => dispatch(getLoginSuccess()))
//         .catch(err => dispatch(getLoginFailure(err.result)))
//     }
// }

export function fetchLoginFromAPI(email, password) {
    return (dispatch) => {
        dispatch(getLogin());
        setTimeout(() => {
            dispatch(getLoginSuccess())
        }, 5000);
    }
}

function getLogin() {
    return {
        type: LOGGING
    }
}

function getLoginSuccess() {
    return {
        type: LOGIN_SUCCESS
    }
}

function getLoginFailure() {
    return {
        type: LOGIN_FAILURE,
        data
    }
}