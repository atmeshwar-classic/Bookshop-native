import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {cartSelector, removeFromCart} from './cart.slice';
import {Book} from '../books/types';
import {BookCard} from '../../components/BookCard/BookCard';
import {AppDispatch} from '../../store';
import {Loading} from '../../components/Loading/Loading';
import {cartStyles as styles} from './cart.styles';

export const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {cart} = useSelector(cartSelector);

  const onDeleteBook = (item: Book) => {
    let filteredCart = cart.filter((i: Book) => i.id !== item.id);
    dispatch(removeFromCart(filteredCart));
  };

  return (
    <SafeAreaView style={styles.container}>
      {cart.length === 0 && <Loading text="Cart Empty" />}
      <FlatList
        data={cart}
        renderItem={({item}) => (
          <BookCard
            item={item}
            onPressBtn={() => onDeleteBook(item)}
            typeOfBtn="delete"
          />
        )}
        style={styles.flatListStyle}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
