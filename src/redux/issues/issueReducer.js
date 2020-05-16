import {
    CREATE_ISSUE_FAILURE,
    CREATE_ISSUE_SUCCESS,
    CREATE_ISSUE_REQUEST,
    UPDATE_ISSUE_SUCCESS,
    UPDATE_ISSUE_REQUEST,
    UPDATE_ISSUE_FAILURE
} from "./issueActionTypes";

const initialState = {
    loading: false,
    error: null,
    issues: []
}

const issueReducer = function (state = initialState, action) {
    switch (action.type) {
        case CREATE_ISSUE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: [...state.issues, action.payload]
            }

        case CREATE_ISSUE_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload
            }

        case UPDATE_ISSUE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_ISSUE_SUCCESS:
            return {
                ...state,
                loading: false
            }

        case UPDATE_ISSUE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default issueReducer;
