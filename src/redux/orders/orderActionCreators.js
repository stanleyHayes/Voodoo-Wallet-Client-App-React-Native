import {
    GET_ORDER_FAILURE,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDERS_FAILURE,
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    UPDATE_ORDER_FAILURE,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS
} from "./orderActionTypes";

import axios from "axios";
import Swal from "sweetalert2";

export const getOrdersRequest = function () {
    return {
        type: GET_ORDERS_REQUEST
    }
}

export const getOrdersSuccess = function (orders) {
    return {
        type: GET_ORDERS_SUCCESS,
        payload: orders
    }
}

export const getOrdersFailure = function (error) {
    return {
        type: GET_ORDERS_FAILURE,
        payload: error
    }
}

export const getOrders = function (token, userId) {
    return  function (dispatch) {

        dispatch(getOrdersRequest());
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/users/${userId}/orders`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            dispatch(getOrdersSuccess(response.data.data));
        }).catch(function (error) {
            dispatch(getOrdersFailure(error.response.data.error));
        })
    }
}


export const getOrderRequest = function () {
    return {
        type: GET_ORDER_REQUEST
    }
}

export const getOrderSuccess = function (order) {
    return {
        type: GET_ORDER_SUCCESS,
        payload: order
    }
}

export const getOrderFailure = function (error) {
    return {
        type: GET_ORDER_FAILURE,
        payload: error
    }
}

export const getOrder = function (orderId, token) {
    return function (dispatch) {
        dispatch(getOrderRequest());
        axios({
            method: "get",
            url: `http://localhost:8000/api/v1/orders/${orderId}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            const {data} = response.data;
            dispatch(getOrderSuccess(data));
        }).catch(function (error) {
            dispatch(getOrderFailure(error.response.data.error));
        })
    }
}


export const updateOrderRequest = function () {
    return {
        type: UPDATE_ORDER_REQUEST
    }
}

export const updateOrderSuccess = function (order) {
    return {
        type: UPDATE_ORDER_SUCCESS,
        payload: order
    }
}

export const updateOrderFailure = function (error) {
    return {
        type: UPDATE_ORDER_FAILURE,
        payload: error
    }
}

export const updateOrder = function (orderId, order, token) {
    return function (dispatch) {
        dispatch(updateOrderRequest());
        axios({
            method: "put",
            url: `http://localhost:8000/api/v1/orders/${orderId}`,
            data: order,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            const {data} = response.data;
            dispatch(updateOrderSuccess(data));
        }).catch(function (error) {
            dispatch(updateOrderFailure(error.response.data.error));
        })
    }
}


export const createOrderRequest = function () {
    return {
        type: CREATE_ORDER_REQUEST
    }
}

export const createOrderSuccess = function (order) {
    return {
        type: CREATE_ORDER_SUCCESS,
        payload: order
    }
}

export const createOrderFailure = function (error) {
    return {
        type: CREATE_ORDER_FAILURE,
        payload: error
    }
}

export const createOrder = function (order, token) {
    return function (dispatch) {
        dispatch(createOrderRequest());
        axios({
            method: "post",
            url: `http://localhost:8000/api/v1/orders`,
            data: order,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            const {data} = response.data;
            dispatch(createOrderSuccess(data));
            Swal.fire({
                icon: "success",
                title: "success",
                text: `Order created successfully`,
            });
        }).catch(function (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Order could not be created`,
            });
            dispatch(createOrderFailure(error.response.data.error));
        })
    }
}
