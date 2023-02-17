import { Book } from "../../domain/books/types";
import {View,Text, Button } from "react-native";
import { removeItem } from "../../domain/books/cartSlice";
import { useDispatch } from 'react-redux';
import { stylesCartScreen } from "./styles";

type CartCardProps = Book;

export const CartCard = ({id,name,author,description,price}:CartCardProps) => {

    const dispatch = useDispatch();
   const handleRemoveFromCart = () => {
    const item = {id, name,author,description,price};
    dispatch(removeItem(item.id));
};


  return(
    <View style={stylesCartScreen.item}>
    <Text style={stylesCartScreen.name}>
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
    <Button title= {"Remove"}
    onPress= {handleRemoveFromCart} />
   
  </View>

  );
};