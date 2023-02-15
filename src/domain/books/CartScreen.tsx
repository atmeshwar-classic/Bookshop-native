import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    SafeAreaView,
  } from "react-native";
  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { removeFromCart } from "../redux/reducer/CartReducers";

export default function CartScreen({ navigation }) {
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);
    const dispatch = useDispatch();

    const removeItemFromCart = (item) => {
        dispatch(removeFromCart(item));
      };

      const [total, setTotal] = useState(0)
    
      const totalPrice = cart.reduce((acc, curr)=>{ //calculate total
        let cur = curr.price.match(/\d./g).join('') //parse string to integer(cost)
          return acc + Number(cur); 
        }, 0)
      console.log("total:", totalPrice);


    return (
        <SafeAreaView>
         
        {cart.map((item) => (
          <Pressable
            key={item.id}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View style = {{height:130}} >
            <View  style={{ marginTop:20, marginLeft:10 ,borderColor: "gray",borderWidth: 1, backgroundColor: 'white',height:100 , width:350}}>
              <Text style={{ marginTop:10,marginLeft:10 , lineHeight: 20,fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ marginLeft:10, lineHeight: 20,fontWeight: "bold" }}>{item.author}</Text>
              <Text style={{ marginLeft:10, lineHeight: 20,fontWeight: "bold" }}>{item.price}</Text>

                <Pressable onPress={() => removeItemFromCart(item)}>
                  <Text
                   style={{
                    borderColor: "gray",
                    borderWidth: 1,
                    padding: 5,
                    backgroundColor:'red',
                     color:'white',
                     fontWeight:'bold',
                     alignContent: 'flex-end',
                     textAlign: 'right',
                     alignSelf:'flex-end'
                  }}
                  >
                    REMOVE
                  </Text>
                </Pressable>
              
            </View>
            </View>
          </Pressable>
        ))}
        <View style = {{marginBottom:10,height: 50,borderColor:'black',borderWidth:2,width:350,marginLeft:10,alignItems:"flex-end",backgroundColor:"blue"}}>
                <Text style = {{marginTop: 10,fontSize:20,fontWeight:"bold", marginEnd: 10,color:"white"}}> Total: ${totalPrice}</Text>
                </View>
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
}