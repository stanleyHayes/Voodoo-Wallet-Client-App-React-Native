import {
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_FAILURE,
    GET_ORDERS_FAILURE,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_FAILURE,
    GET_ORDER_SUCCESS,
    GET_ORDER_REQUEST,
    GET_ORDER_FAILURE
} from "./orderActionTypes";

const initialState = {
    orders: [],
    loading: false,
    error: null,
    order: null
}

const orderReducer = function (state = initialState, action) {
    switch (action.type) {

        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
                error: null
            }

        case CREATE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                order: null,
                error: action.payload
            }


        case GET_ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
                error: null
            }

        case GET_ORDERS_FAILURE:
            return {
                ...state,
                loading: false,
                orders: [],
                error: action.payload
            }


        case UPDATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
                error: null
            }

        case UPDATE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                order: null,
                error: action.payload
            }



        case GET_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
                error: null
            }

        case GET_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                order: null,
                error: action.payload
            }
        default:
            return state;
    }
}

export default orderReducer;
