import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Book } from '../../domain/books/types';

import BottomBar from '../../components/BottomBar/BottomBar';
import { BookCard } from '../../components/BookCard/BookCard';

import { cartRemoveAction } from '../cart/cart.slice';

import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

type BooksListProp = Book;

const CartScreen = (params: BooksListProp) => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const booksState = useSelector(state => state.cart)

  console.log(booksState)

  const [booksList, setBooksList] = useState<Book>([]);

  const handleClick = (id: number, data: any) => {
    console.log(id)
    dispatch(cartAddAction(data));
    dispatch(booksAddToCardAction(id))
  }

  const handleScreen = (route_type: any) => {
    navigation.navigate(route_type)
  }

  useEffect(() => {
    setBooksList(lst => booksState.cart_books)
  }, [booksList]);

  return <View>
    <ScrollView>
      <View style={{ padding: 10, marginBottom: 70 }}>
        {
          booksList && booksList?.map((item, idx) => (
            <BookCard key={item.id} id={item.id} author={item.author} description={item.description} name={item.name} price={item.price} data={item} btnLabel="- Remove from Cart" handleClick={handleClick} />
          ))
        }
      </View>
    </ScrollView>
    <BottomBar isBook={false} isCart={true} handleScreen={handleScreen} />
  </View>
}

export default CartScreen;