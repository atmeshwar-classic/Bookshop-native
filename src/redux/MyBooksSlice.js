const { createSlice } = require("@reduxjs/toolkit");


const MyBooksSlice=createSlice({
    name:'Books',
    initialState:[],
    reducers:{
        addMyBooks(state,action){
      state.push(action.payload);
        }
    }
})

export const {addMyBooks}=MyBooksSlice.actions;
export default MyBooksSlice.reducer;