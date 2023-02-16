/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Book} from '../../domain/books/types';
import {View, Text, FlatList, Button} from 'react-native';
import styles from './styles';
import {books} from '../../domain/books/books';
import Card from './Card';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {setCart} from '../../store/booksDetail/reducer';

type BookCardProps = Book;

export const BookCard = ({data}: any) => {
  const books = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();

  // console.log(count, 'count');

  const handleClick = () => {
    dispatch(setCart(data));
  };

  return (
    <Card>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.data_list}>
          <Text>{data.name}</Text>
          <Text>{data.author}</Text>
          <Text>{data.description}</Text>
          <Text style={{fontWeight: 700}}>{data.price}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button title="+" onPress={handleClick} />
        </View>
      </View>
    </Card>
  );
};
