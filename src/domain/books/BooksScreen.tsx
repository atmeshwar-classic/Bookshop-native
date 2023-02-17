import * as React from 'react';
import { View,FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { getBooks } from "./books.slice";
import { useEffect  } from "react";
import { useSelector } from 'react-redux';
import { booksSelector } from './books.slice';
import { AppDispatch, } from "../../store";
import { BookCard } from '../../components/BookCard/BookCard';    

export const BooksScreen = ({navigation}: any) => {

  const dispatch = useDispatch<AppDispatch>();
  
  const bookSelector = useSelector(booksSelector)


  useEffect(() => { 
      dispatch(getBooks()) 
  }, []);

  return (
    <View>
    <FlatList 
     data={bookSelector.books}
     keyExtractor={(item) => item.id}
     renderItem={({ item }) => {
       return <BookCard {...item}/>;
     }}
      />
 </View>
  );
}