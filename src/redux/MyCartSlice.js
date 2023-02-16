const { createSlice } = require("@reduxjs/toolkit");


const MyCartSlice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        addBooksToCart(state,action){
      state.push(action.payload);
        }
    }
})

export const {addBooksToCart}=MyCartSlice.actions;
export default MyCartSlice.reducer;