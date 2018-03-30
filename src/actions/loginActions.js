import { LOGGING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/loginConstants'

// export function fetchLoginFromAPI(email, password){
//     return (dispatch) => {
//         dispatch(getLogin())
//         fetch('http://smartqueue.com/api/login', {
//             method: 'POST',
//             body: JSON.stringify({ Email: email, Password: password })
//         })
//         .then(res => res.json()
//         .then(json => dispatch(getLoginSuccess()))
//         .catch(err => dispatch(getLoginFailure(err.result)))
//     }
// }

export function fetchLoginFromAPI(email, password) {
    return (dispatch) => {
        dispatch(getLogin());
        fetch('http://swapi.co/api/people/')
            .then(setTimeout(() => {
                    dispatch(getLoginSuccess());
                }, 2000))
            .catch(err => {
                dispatch(getLoginFailure(err.result));
            })
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

function getLoginFailure(data) {
    return {
        type: LOGIN_FAILURE,
        data
    }
}