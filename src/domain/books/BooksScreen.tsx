// The Books Screen
import React from 'react';
import {FlatList, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {booksSelector, getBooks} from './books.slice';
import {useEffect} from 'react';
import {AppDispatch} from './../../store';
import {Book} from './types';
import {addBookToCart, cartSelector} from '../cart/cart.slice';
import {BookCard} from '../../components/BookCard/BookCard';
import {Loading} from '../../components/Loading/Loading';

export const BooksScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {books, loading} = useSelector(booksSelector);
  const {cart} = useSelector(cartSelector);

  useEffect(() => {
    dispatch(getBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddBookToCart = (item: Book) => {
    let isAdded = false;

    cart.filter((i: Book) => {
      if (i.id === item.id) {
        isAdded = true;
      }
    });

    if (isAdded) {
      Alert.alert('Book Already added to cart');
      return;
    }

    dispatch(addBookToCart(item));
  };

  if (loading === 'loading') {
    return <Loading text="Loading..." />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={books}
        renderItem={({item}) => (
          <BookCard item={item} onPressBtn={i => onAddBookToCart(i)} />
        )}
        style={styles.flatListStyle}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatListStyle: {
    padding: 12,
  },
});
