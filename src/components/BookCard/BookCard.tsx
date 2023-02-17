import { Book } from "../../domain/books/types";
import {View,Text, Button } from "react-native";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "../../domain/books/cartSlice";
import { styles } from "./styles";

 type BookCardProps = Book;

export const BookCard = ({id,name,author,description,price}:BookCardProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();


const handleAddToCart = () => {
    const item = {id,name,author,description,price};
    dispatch(addItem(item));

    setIsAdded(true);

    setTimeout(() => {
        setIsAdded(false);
    }, 3000);
};

  return(
    <View style={styles.item}>
    <Text style={styles.name}>
      Books:{name}</Text>
    <Text>
      Author:{author}
    </Text>
    <Text>
      Description:{description}
    </Text>
    <Text>
      Price:{price}rs
    </Text>
    <Button title= {isAdded ? "Added": "Add to cart"}
     onPress= {handleAddToCart}/>
   
  </View>

  );
  }