import {useDispatch, useSelector} from 'react-redux';
import { CartCard } from '../../components/BookCard/CartCard';
import { AppDispatch, RootState } from "../../store";
import { View,FlatList, Text} from "react-native";
import {stylesCartScreen} from '../../components/BookCard/styles'
import { cartSelector } from './cartSlice';

export const CartScreen = ({navigation}: any) => {

  const dispatch = useDispatch<AppDispatch>();
  
  const cartItemsSelector =useSelector(cartSelector)

  console.log('cartItemData', cartItemsSelector);

    let totalAmount = 0; 
    cartItemsSelector.cartItems.forEach((item:any) => {
    for (let property  in item) {
        if(property === "price")
        totalAmount += item[property];
    }
})

  return (
    <View style={stylesCartScreen.container} >
       <FlatList 
        data={cartItemsSelector.cartItems}
        keyExtractor={(item:any) => item.id}
        renderItem={({item}) => {
          return <CartCard {...item} />;
        }}
      />

    <Text  style={stylesCartScreen.bottom} > Total amount :{totalAmount}rs </Text>

</View>
 
 );
};




