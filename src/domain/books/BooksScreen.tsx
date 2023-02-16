import * as React from 'react';
import { View,FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { getBooks } from "./books.slice";
import { useEffect  } from "react";
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../store";
import { BookCard } from '../../components/BookCard/BookCard';    

export const BooksScreen = ({navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const books = useSelector( (state: RootState) => state.books);
  console.log("Books list", books);
 
  useEffect(() => { 
    setTimeout(() => {
      dispatch(
        getBooks()
        ) 
       }, 2000);
   
  }, []);

  return (
    <View>
    <FlatList 
     data={books.books}
     keyExtractor={(item) => item.id}
     renderItem={({ item }) => {
       return <BookCard {...item}/>;
     }}
      />
 </View>
  );
}