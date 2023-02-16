import {Book} from '../../domain/books/types';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {books} from '../../domain/books/books';
import Card from './Card';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {removeCart} from '../../store/booksDetail/reducer';

export const Cart = ({data}: any) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCart(data));
  };
  return (
    <Card>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.data_list}>
          <Text>{data.name}</Text>
          <Text>{data.description}</Text>
          <Text style={{fontWeight: 700, color: 'black'}}>{data.price}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button title="-" onPress={handleRemove}></Button>
        </View>
      </View>
    </Card>
  );
};
