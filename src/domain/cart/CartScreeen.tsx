import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Book } from '../../domain/books/types';
import BottomBar from '../../components/BottomBar/BottomBar';
import { BookCard } from '../../components/BookCard/BookCard';

import { cartRemoveAction } from '../cart/cart.slice';

import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import styles from './CardScreen.style';
import store from '../../store';
import { cartSelector } from '../cart/cart.slice';


type CartListProp = Book;

const CartScreen = (params: CartListProp) => {

  const navigation = useNavigation();

  const dispatch = useDispatch();
   const cartList = cartSelector(store.getState());
  //  const cartState = useSelector(state => state.cart)
   const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleClick = (id: number, data: any) => {
    dispatch(cartRemoveAction(id));
    if (cartState?.loading == 'loaded') {
      alert('Book remove from cart successfully')
    }
  }

  const handleScreen = (route_type: any) => {
    navigation.navigate(route_type)
  }

  useEffect(() => {
    setTotalPrice(total => cartList?.totalCost)
  }, [cartList?.cart_books]);

  return <View>
    <ScrollView>
      <View style={styles.cartContainer}>
        {
          cartList?.cart_books?.map((item:any, idx:number) => (
            <BookCard key={item.id} id={item.id} author={item.author} description={item.description} name={item.name} price={item.price} data={item} btnLabel="- Remove from Cart" handleClick={handleClick} />
          ))
        }
      </View>

      {
        totalPrice > 0 ?
          (
            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalLabel}>
                $ {cartList?.totalCost ?? 0}
              </Text>
            </View>
          ) : null
      }

    </ScrollView>
    <BottomBar isBook={false} isCart={true} handleScreen={handleScreen} />
  </View>
}

export default CartScreen;