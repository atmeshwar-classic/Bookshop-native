import {Book} from '../../domain/books/types';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {books} from '../../domain/books/books';

const Card = ({children}?: ReactNode) => {
  return (
    <>
      <View style={[styles.card, styles.elevation]}>{children}</View>
    </>
  );
};

export default Card;
