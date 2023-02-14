import { ADD_ITEM, REMOVE_ITEM } from "../../books/ActionTypes"

export const addItemToCart = data => ({
    type:ADD_ITEM,
    payload:data ,

});

export const removeItemFromCart = index => ({
    type:REMOVE_ITEM,
    payload:index ,

});