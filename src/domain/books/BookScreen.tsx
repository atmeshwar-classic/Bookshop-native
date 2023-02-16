 
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    SafeAreaView,
  } from "react-native";
  import React from "react";
  import { useDispatch } from "react-redux";
import { getBooks } from "./books.slice";
import { books } from "./books";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../store";
import { Book } from './types';
import { addToCart, removeFromCart } from "../Cart/CartSlice";
  
 const BookScreen = ({navigation}: any) => {
    
     const cart = useSelector((state) => state.cart.cart);
    //console.log(cart);

    const dispatch = useDispatch<AppDispatch>();
    const bookList = useSelector( (state: RootState) => state.books);
    console.log("Books list", bookList);
   
    useEffect(() => { 
      dispatch(getBooks())
  
    }, []);    
   
   
    const addItemToCart = (item) => {
      dispatch(addToCart(item));
    };
    const removeItemFromCart = (item) => {
      dispatch(removeFromCart(item));
    };
    
    return (
      <SafeAreaView>
           
         
        {bookList.books.map((item) => (
          <Pressable
            key={item.id}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View style = {{height:160}} >
            <View  style={{ marginTop:20, marginLeft:10 ,borderColor: "gray",borderWidth: 1, backgroundColor: 'white',height:150 , width:350}}>
              <Text style={{ marginTop:10,marginLeft:10 , lineHeight: 20,fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ marginLeft:10, lineHeight: 20,fontWeight: "bold" }}>{item.author}</Text>
              <Text style={{ marginLeft:10, lineHeight: 20,fontWeight: "normal" }}>{item.description}</Text>
              <Text style={{ marginLeft:10, lineHeight: 20,fontWeight: "bold" }}>{item.price}</Text>

              {cart.some((value) => value.id == item.id) ? (
                <Pressable onPress={() => removeItemFromCart(item)}>
                  <Text
                   style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    padding: 10,
                    backgroundColor:'blue',
                     color:'white',
                     fontWeight:'bold',
                     alignContent: 'flex-end',
                     textAlign: 'right',
                     alignSelf:'flex-end'
                  }}
                  >
                    ADDED
                  </Text>
                </Pressable>
              ) : (
                <Pressable onPress={() => addItemToCart(item)}>
                  <Text
                    style={{
                      borderColor: "gray",
                      borderWidth: 1,
                      padding: 10,
                      backgroundColor:'blue',
                       color:'white',
                       fontWeight:'bold',
                       alignContent: 'flex-end',
                       textAlign: 'right',
                       alignSelf:'flex-end'
                    }}
                  >
                    ADD TO CART
                  </Text>
                </Pressable>
              )}
            </View>
            </View>
          </Pressable>
        ))}
  
         
      </SafeAreaView>
    );
  };
  
  export default BookScreen;
  const styles = StyleSheet.create({});
  