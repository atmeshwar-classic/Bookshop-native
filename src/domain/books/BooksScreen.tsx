import React, {useState, useEffect} from 'react';
import { ScrollView, View } from 'react-native';
import { Book } from '../../domain/books/types';

import BottomBar from '../../components/BottomBar/BottomBar';
import { BookCard } from '../../components/BookCard/BookCard';

import { booksListAction, getBooks} from './books.slice';

import { useSelector, useDispatch } from 'react-redux'

type BooksListProp = Book;

const BooksScreen = (params:BooksListProp) => {

  const dispatch = useDispatch();
  
  const booksState =  useSelector(state => state.books)

  const [booksList , setBooksList] = useState<Book>([]);

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  useEffect(() => {
    setBooksList(st => booksState.books)
    console.log(booksState.books)
  }, [booksState])

    return <ScrollView>

    <View>
        <View style={{padding: 10}}>
          {
            booksList && booksList?.map((item,idx) => (
              
              <BookCard key={item.id} id={item.id} author={item.author} description={item.description} name={item.name} price={item.price} />
              ))
            }
        </View>
<BottomBar />
    </View>
            </ScrollView>
}


export default BooksScreen;