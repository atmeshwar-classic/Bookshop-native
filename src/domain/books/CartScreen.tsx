import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { toggleCart,removeItem,incrementItem, decrementItem } from './cartSlice';
import { CartCard } from '../../components/BookCard/CartCard';
import { AppDispatch, RootState } from "../../store";
import { View,FlatList, Text} from "react-native";
import { ScrollView } from 'react-native';
import { styles } from '../../components/BookCard/styles';


export const CartScreen = ({navigation}: any) => {

  const dispatch = useDispatch<AppDispatch>();
 

  const { isCartOpen, cartItems } = useSelector((state:any) => state.cart);
  console.log('cartItemData', cartItems);

  const cartTotal = cartItems
    .map((item:any) => item.price)
    .reduce((prevValue:any, currValue:any) => prevValue + currValue, 0);

  return (
    <ScrollView >

  
    <View>
       <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <CartCard {...item} />;
        }}
      />

    <Text  style={styles.totalAmout} > Total amount :{cartTotal}rs </Text>

</View>
</ScrollView>

  );
};




