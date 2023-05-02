import { createSlice } from "@reduxjs/toolkit";

const SignUpSlice = createSlice({
    name:'SignUp',
    initialState:{},
    reducers:{
        add(state,action){
            state.email=action.payload.email;
            state.password=action.payload.password;
        },
        del(state,action){}
    }
})


export const {add,del} = SignUpSlice.actions;
export default SignUpSlice.reducer;
