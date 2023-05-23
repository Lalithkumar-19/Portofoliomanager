import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";
const middleware=[thunk];
const store=configureStore({
    reducer,

},applyMiddleware(...middleware));


export default store;
