 
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
          name: 'MALGUDI DAYS',
          author: 'Author : R.K. Narayan',
          description: 'The book includes 32 stories, all set in the fictional town of Malgudi, located in South India...',
          price: "2.99$",
      },
      {
        id: "1",
          name: 'THE ROOM ON THE ROOF',
          author: 'Author : RUSKIN BOND',
          description: 'The Room on the Roof is the story of an orphaned Anglo-Indian boy...',
          price: "3.99$",
      },
      {
        id: "2",
          name: 'THE COMPLETE ADVENTURES OF FELUDA',
          author: 'Author : SATYAJIT RAY',
          description: 'Between 1965 and 1992, Satyajit Ray wrote a total of 35 Feluda stories...',
          price: "4.99$",
      },
      {
        id: "3",
          name: 'COMBAT OF SHADOWS',
          author: 'Author : MANOHAR MALGONKAR',
          description: 'Manohar Malgonkar’s Combat of Shadows is the tale of an Anglo-Indian woman, Ruby Miranda...',
          price: "5.99$",
      }
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
  
        {cart.map((item,index) => (
          <View style={{padding:10}} key={index}>

            {/* <Text style = {{borderColor: "gray",borderWidth: 1}}>{item.name}</Text>
            <Text>{item.author}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text> */}

          </View>
        ))}
      </SafeAreaView>
    );
  };
  
  export default BookScreen;
  const styles = StyleSheet.create({});
  