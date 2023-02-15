import React, {useState, useEffect} from 'react';
import { ScrollView, View } from 'react-native';
import { Book } from '../../domain/books/types';

import BottomBar from '../../components/BottomBar/BottomBar';
import { BookCard } from '../../components/BookCard/BookCard';

import { getBooks, booksAddToCardAction} from './books.slice';

import { useSelector, useDispatch } from 'react-redux'

type BooksListProp = Book;

const BooksScreen = (params:BooksListProp) => {

  const dispatch = useDispatch();
  
  const booksState =  useSelector(state => state.books)

  const [booksList , setBooksList] = useState<Book>([]);

  const handleClick = (id:number) => {
    console.log(id)
    dispatch(booksAddToCardAction(id))
  }

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  useEffect(() => {
    setBooksList(st => booksState.books)
    console.log(booksState.books)
  }, [booksState])


      return  <View>
       <ScrollView>
        <View style={{padding: 10, marginBottom: 70}}>
          {
            booksList && booksList?.map((item,idx) => (
              
              <BookCard key={item.id} id={item.id} author={item.author} description={item.description} name={item.name} price={item.price} handleClick={handleClick}/>
              ))
            }
        </View>
            </ScrollView>
<BottomBar isBook={true} isCart={false} />
    </View>
}


export default BooksScreen;