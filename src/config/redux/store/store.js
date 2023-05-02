import { configureStore } from "@reduxjs/toolkit";
import loginslice from "../reducer/loginslice";
import signupslice from "../reducer/signupslice";
import cartslice from "../reducer/cartslice";

const store = configureStore({
    reducer:{
        Login:loginslice,
        SignUp:signupslice,
        Cart:cartslice,
    }
})

export default store;