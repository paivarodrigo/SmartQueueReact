import { LOGGING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/loginConstants'

const initialState = {
    isLogging: false,
    success: false,
    error: false,
    errorMessage: ''
}

export default function loginReducer(state = initialState, action) {
    switch(action) {
        case LOGGING:
            return {
                ...state,
                isLogging: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogging: false,
                success: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLogging: false,
                error: true,
                errorMessage: action.data
            }
        default:
            return state
    }
}