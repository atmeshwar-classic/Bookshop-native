import {useDispatch, useSelector} from 'react-redux';
import { CartCard } from '../../components/BookCard/CartCard';
import { AppDispatch, RootState } from "../../store";
import { View,FlatList, Text} from "react-native";
import {stylesCartScreen} from '../../components/BookCard/styles'
import { cartSelector } from './cartSlice';

export const CartScreen = ({navigation}: any) => {

  const dispatch = useDispatch<AppDispatch>();
 
  const {cartItems } = useSelector((state:any) => state.cart);

 // const cartItems =useSelector(cartSelector)

  console.log('cartItemData', cartItems);

  // const cartTotal = cartItems
  //   .map((item:any) => item.price)
  //   .reduce((prevValue:any, currValue:any) => prevValue + currValue, 0);

      let total = 0;
      const { items } = cartItems;
      for (let i = 0; i < cartItems.length; i++) {
        total = total + cartItems[i].price
      }

  return (
    <View style={stylesCartScreen.container} >
       <FlatList 
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <CartCard {...item} />;
        }}
      />

    <Text  style={stylesCartScreen.bottom} > Total amount :{total}rs </Text>

</View>
 
 );
};




