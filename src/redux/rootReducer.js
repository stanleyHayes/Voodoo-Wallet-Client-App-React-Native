import {combineReducers} from "redux";
import authenticationReducer from "./authentication/authenticationReducer";
import appReducer from "./app/appReducer";
import userReducer from "./users/userReducer";
import orderReducer from "./orders/orderReducer";
import issueReducer from "./issues/issueReducer";
const rootReducer = combineReducers({
    authentication: authenticationReducer,
    app: appReducer,
    users: userReducer,
    orders: orderReducer,
    issues: issueReducer
});


export default rootReducer;
