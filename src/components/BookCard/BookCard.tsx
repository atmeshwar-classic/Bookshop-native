import React from 'react';
import {Book} from '../../domain/books/types';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

type BookCardProps = {
  item: Book;
  onPressBtn: (item: Book) => void;
  typeOfBtn?: string;
};

export const BookCard = ({item, onPressBtn, typeOfBtn}: BookCardProps) => {
  return (
    <View style={styles.bookStyle}>
      <Text style={styles.bookHead}>{item.name}</Text>
      <Text style={styles.description}>Description: {item.description}</Text>
      <Text style={styles.description}>Author: {item.author}</Text>
      <Text style={styles.price}>Rs. {item.price} /-</Text>
      <Ionicons
        name={typeOfBtn === 'delete' ? 'trash-outline' : 'add-circle-sharp'}
        size={32}
        color={'tomato'}
        style={styles.addBtnStyle}
        onPress={() => onPressBtn(item)}
      />
    </View>
  );
};
