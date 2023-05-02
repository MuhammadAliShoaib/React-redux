import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        add(state,action){
           state.push(action.payload)
        },
        del(state,action){
            state.pop(action.payload)
        }
    }
})


export const {add,del} = CartSlice.actions;
export default CartSlice.reducer;