import {
    GET_APP_REQUEST,
    GET_APP_SUCCESS,
    GET_APP_FAILURE,
    CREATE_APP_FAILURE,
    CREATE_APP_SUCCESS,
    CREATE_APP_REQUEST,
    UPDATE_APP_FAILURE,
    UPDATE_APP_SUCCESS,
    UPDATE_APP_REQUEST
} from "./appActionTypes";

const initialState = {
    app: null,
    loading: false,
    error: null
}

const appReducer = function (state = initialState, action) {
    switch (action.type) {

        case GET_APP_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_APP_SUCCESS:
            return {
                ...state,
                loading: false,
                app: action.payload,
                error: null
            }

        case GET_APP_FAILURE:
            return {
                ...state,
                loading: false,
                app: null,
                error: action.payload
            }


        case CREATE_APP_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_APP_SUCCESS:
            return {
                ...state,
                loading: false,
                app: action.payload,
                error: null
            }

        case CREATE_APP_FAILURE:
            return {
                ...state,
                loading: false,
                app: null,
                error: action.payload
            }


        case UPDATE_APP_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_APP_SUCCESS:
            return {
                ...state,
                loading: false,
                app: action.payload,
                error: null
            }

        case UPDATE_APP_FAILURE:
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

export default appReducer;
