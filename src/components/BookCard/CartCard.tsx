import { Book } from "../../domain/books/types";
import {View,Text,StyleSheet, Button } from "react-native";
import { removeItem } from "../../domain/books/cartSlice";
import { useDispatch } from 'react-redux';
import { styles } from "./styles";

type CartCardProps = Book;

export const CartCard = ({...pros}:CartCardProps) => {

    const dispatch = useDispatch();

  
   const handleRemoveFromCart = () => {
    const item = { ...pros};
    dispatch(removeItem(item.id));
    setTimeout(() => {
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
    <Button title= {"Remove"}
    onPress= {handleRemoveFromCart} />
   
  
  </View>

  );
};