import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../redux/reducer/CartReducers";


export default configureStore ({
    reducer:{
        cart:CartReducer
    }
})