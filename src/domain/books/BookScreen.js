 
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    SafeAreaView,
  } from "react-native";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { addToCart, removeFromCart } from "../redux/reducer/CartReducers";
  
  const BookScreen = () => {
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);
    const dispatch = useDispatch();
    let img =<Image source={require('../../assets/plus.png')} />
    const bookArr = [
      {
        id: "0",
          name: 'Book',
          author: 'Author',
          description: 'Description',
          price: 20,
      },
      {
        id: "1",
          name: 'Book',
          author: 'Author',
          description: 'Description',
          price: 20,
      },
      {
        id: "2",
          name: 'Book',
          author: 'Author',
          description: 'Description',
          price: 20,
      },
    ];
    const addItemToCart = (item) => {
      dispatch(addToCart(item));
    };
    const removeItemFromCart = (item) => {
      dispatch(removeFromCart(item));
    };
    
    return (
      <SafeAreaView>
         
        {bookArr.map((item) => (
          <Pressable
            key={item.id}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View style = {{height:150}} >
            <View  style={{ marginTop:20, marginLeft:10 ,borderColor: "gray",borderWidth: 1, backgroundColor: 'white',height:120 , width:350}}>
              <Text style={{ marginTop:5,marginLeft:10 , lineHeight: 20,fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ marginLeft:10, lineHeight: 20,fontWeight: "bold" }}>{item.author}</Text>
              <Text style={{ marginLeft:10, lineHeight: 20,fontWeight: "bold" }}>{item.description}</Text>
              <Text style={{ marginLeft:10, lineHeight: 20,fontWeight: "bold" }}>{item.price}</Text>

              {cart.some((value) => value.id == item.id) ? (
                <Pressable onPress={() => removeItemFromCart(item)}>
                  <Text
                   style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    padding: 5,
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
                      padding: 5,
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
  
        {cart.map((item,index) => (
          <View style={{padding:10}} key={index}>

            <Text>{item.name}</Text>
            <Text>{item.author}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>

          </View>
        ))}
      </SafeAreaView>
    );
  };
  
  export default BookScreen;
  
  const styles = StyleSheet.create({});
  