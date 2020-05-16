import {
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS,
    CREATE_USER_REQUEST,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_SUCCESS,
    GET_USER_REQUEST,
    GET_USERS_FAILURE,
    GET_USERS_SUCCESS,
    GET_USERS_REQUEST
} from "./userActionTypes";

const initialState = {
    user: null,
    users: [],
    loading: false,
    error: null
}

const userReducer = function (state = initialState, action) {
    switch (action.type) {

        case CREATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            }

        case CREATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }


        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            }

        case UPDATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }


        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            }

        case GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }


        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null
            }

        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                app: null,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
