 
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
            <View  style={{  borderColor: "gray",borderWidth: 1, backgroundColor: 'powderblue', flexDirection:'column',
      flex:1,marginBottom:'50'}}>
              <Text style={{ marginLeft:30 , lineHeight: 20,fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ marginLeft:30, lineHeight: 20,fontWeight: "bold" }}>{item.author}</Text>
              <Text style={{ marginLeft:30, lineHeight: 20,fontWeight: "bold" }}>{item.description}</Text>
              <Text style={{ marginLeft:30, lineHeight: 20,fontWeight: "bold" }}>{item.price}</Text>

              {cart.some((value) => value.id == item.id) ? (
                <Pressable onPress={() => removeItemFromCart(item)}>
                  <Text
                    style={{
                      borderColor: "gray",
                      borderWidth: 1,
                      marginHorizontal: 20,
                      padding: 50,
                      marginLeft:30,
                    }}
                  >
                    REMOVE FROM CART
                  </Text>
                </Pressable>
              ) : (
                <Pressable onPress={() => addItemToCart(item)}>
                  <Text
                    style={{
                      borderColor: "gray",
                      borderWidth: 1,
                      marginHorizontal: 100,
                      padding: 5,
                     
                    }}
                  >
                    ADD TO CART
                  </Text>
                </Pressable>
              )}
            </View>
          </Pressable>
        ))}
  
        {cart.map((item,index) => (
          <View style={{padding:10}} key={index}>
            <Text>{item.name}</Text>
            <Image style={{ width: 100, height: 120, borderRadius: 8,marginTop:6 }}
                source={{ uri: item.image }}/>
            <Pressable
              style={{
                flexDirection: "row",
                marginTop:20,
                alignItems: "center",
                backgroundColor: "#FF3366",
                borderRadius: 5,
                width: 120,
              }}
            >
                <Pressable>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  {item.quantity}
                </Text>
              </Pressable>
  
               
            </Pressable>
          </View>
        ))}
      </SafeAreaView>
    );
  };
  
  export default BookScreen;
  
  const styles = StyleSheet.create({});
  