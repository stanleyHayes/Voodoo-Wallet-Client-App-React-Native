import {
    CREATE_ISSUE_FAILURE,
    CREATE_ISSUE_REQUEST,
    CREATE_ISSUE_SUCCESS,
    UPDATE_ISSUE_FAILURE,
    UPDATE_ISSUE_REQUEST,
    UPDATE_ISSUE_SUCCESS
} from "./issueActionTypes";

import axios from "axios";

export function createIssueRequest() {
    return {
        type: CREATE_ISSUE_REQUEST
    }
}

export function createIssueSuccess(issue) {
    return {
        type: CREATE_ISSUE_SUCCESS,
        payload: issue
    }
}

export function createIssueFailure(error) {
    return {
        type: CREATE_ISSUE_FAILURE,
        payload: error
    }
}

export function createIssue(token, issue) {
    return function (dispatch) {
        dispatch(createIssueRequest());
        axios({
            method: "post",
            url: "http://localhost:8000/api/v1/issues",
            data: issue,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            const {data} = response.data;
            dispatch(createIssueSuccess(data))
        }).catch(function (error) {
            dispatch(createIssueFailure(error.response.data.error));
        })
    }
}




export function updateIssueRequest() {
    return {
        type: UPDATE_ISSUE_REQUEST
    }
}

export function updateIssueSuccess(issue) {
    return {
        type: UPDATE_ISSUE_SUCCESS,
        payload: issue
    }
}

export function updateIssueFailure(error) {
    return {
        type: UPDATE_ISSUE_FAILURE,
        payload: error
    }
}

export function updateIssue(issue, token, issueId) {
    return function (dispatch) {
        dispatch(updateIssueRequest());
        axios({
            method: "put",
            url: `http://localhost:8000/api/v1/issues/${issueId}`,
            data: issue,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            const {data} = response.data;
            dispatch(updateIssueSuccess(data))
        }).catch(function (error) {
            dispatch(updateIssueFailure(error.response.data.error));
        })
    }
}

