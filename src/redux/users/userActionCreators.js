import {
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
} from "./userActionTypes";

import axios from "axios";
import Swal from "sweetalert2";

export const updateUserRequest = function () {
    return {
        type: UPDATE_USER_REQUEST
    }
}

export const updateUserSuccess = function (user) {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: user
    }
}

export const updateUserFailure = function (error) {
    return {
        type: UPDATE_USER_FAILURE,
        payload: error
    }
}

export const updateUser = function (userId, user, token) {
    return function (dispatch) {
        dispatch(updateUserRequest());
        axios({
            method: "put",
            url: `http://localhost:8000/api/v1/users/${userId}`,
            data: user,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            const {data} = response.data;
            dispatch(updateUserSuccess(data));
            Swal.fire({
                icon: "success",
                title: "Success",
                text: `Profile Updated`,
            });
        }).catch(function (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Profile could not be updated`,
            });
            dispatch(updateUserFailure(error.response.data.error));
        })
    }
}
