import { Book } from "../../domain/books/types";
import {View,Text,StyleSheet, Button } from "react-native";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "../../domain/books/cartSlice";
import { styles } from "./styles";

 type BookCardProps = Book;

export const BookCard = ({...pros}:BookCardProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();


const handleAddToCart = () => {
    const item = { ...pros };
    dispatch(addItem(item));

    setIsAdded(true);

    setTimeout(() => {
        setIsAdded(false);
    }, 3000);
};

  return(
    <View style={styles.item}>
    <Text style={styles.name}>
      Books:{ pros.name}</Text>
    <Text>
      Author:{ pros.author}
    </Text>
    <Text>
      Description:{ pros.description}
    </Text>
    <Text>
      Price:{ pros.price}rs
    </Text>
    <Button title= {isAdded ? "Added": "Add to cart"}
     onPress= {handleAddToCart}/>
   
  </View>

  );
  }