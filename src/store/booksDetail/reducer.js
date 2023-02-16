import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const counterSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setCart: (state, {payload}) => {
      const data = {...state, cart: [...state.cart, payload]};
      return data;
    },
    removeCart: (state, {payload}) => {
      console.log(payload, 'payload');
      const idx = state.cart.findIndex(item => item.id === payload.id);
      const requiredCart = state?.cart?.splice(idx, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const {setCart, removeCart} = counterSlice.actions;

export default counterSlice.reducer;
