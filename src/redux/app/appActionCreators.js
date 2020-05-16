import {
    GET_APP_FAILURE,
    GET_APP_REQUEST,
    GET_APP_SUCCESS,
    UPDATE_APP_FAILURE,
    UPDATE_APP_REQUEST,
    UPDATE_APP_SUCCESS,
} from "./appActionTypes";

import axios from "axios";


export const getAppRequest = function () {
    return {
        type: GET_APP_REQUEST
    }
}

export const getAppSuccess = function (app) {
    return {
        type: GET_APP_SUCCESS,
        payload: app
    }
}

export const getAppFailure = function (error) {
    return {
        type: GET_APP_FAILURE,
        payload: error
    }
}

export const getApp = function (token) {
    return function (dispatch) {
        dispatch(getAppRequest());
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/app`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            const {data, stats} = response.data;
            dispatch(getAppSuccess({...data, ...stats}));
        }).catch(function (error) {
            dispatch(getAppFailure(error.response.data.error));
        })
    }
}

export const updateAppRequest = function () {
    return {
        type: UPDATE_APP_REQUEST
    }
}

export const updateAppSuccess = function (app) {
    return {
        type: UPDATE_APP_SUCCESS,
        payload: app
    }
}

export const updateAppFailure = function (error) {
    return {
        type: UPDATE_APP_FAILURE,
        payload: error
    }
}

export const updateApp = function (appId, app, token) {
    return function (dispatch) {
        dispatch(updateAppRequest());
        axios({
            method: "put",
            url: `http://localhost:8000/api/v1/app`,
            data: app,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            const {data} = response.data;
            dispatch(updateAppSuccess(data));
        }).catch(function (error) {
            dispatch(updateAppFailure(error.response.data.error));
        })
    }
}


// export const createAppRequest = function () {
//     return {
//         type: CREATE_APP_REQUEST
//     }
// }
//
// export const createAppSuccess = function (app) {
//     return {
//         type: CREATE_APP_SUCCESS,
//         payload: app
//     }
// }
//
// export const createAppFailure = function (error) {
//     return {
//         type: CREATE_APP_FAILURE,
//         payload: error
//     }
// }
//
// export const createApp = function (app, token) {
//     return function (dispatch) {
//         dispatch(createAppRequest());
//         axios({
//             method: "post",
//             url: `http://localhost:8000/api/v1/apps`,
//             data: app,
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }).then(function (response) {
//             const {data} = response.data;
//             dispatch(createAppSuccess(data));
//         }).catch(function (error) {
//             dispatch(createAppFailure(error.response.data.error));
//         })
//     }
// }
