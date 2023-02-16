// The Books Screen
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addBooksToReduxStore} from './books.slice';
import {Text, View, FlatList} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {books} from './books';
import {addBooksToCart} from '../../redux/MyCartSlice';
import {BookCard} from '../../components/BookCard/BookCard';

export const BooksScreen = () => {
  const dispatch = useDispatch();

  const books = useSelector(state => state.allBooks);

  console.log('bookList', books);
  

  return (
    <View>
      <FlatList
        data={books}
        renderItem={({item}) => {
          return (
            <Card style={{margin: 10}}>
              <Card.Title title={item.name} subtitle="Selling Books" />
              <Card.Content>
                <Text variant="titleLarge">{item.author}</Text>
                <Text variant="bodyMedium">{item.description}</Text>
              </Card.Content>
              <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
              <Text style={{fontSize: 20, fontWeight: 600, marginTop: 8}}>
                Price: {item.price}
              </Text>
              <Card.Actions>
                <Button onPress={() => dispatch(addBooksToCart(item))}>
                  Add To Cart
                </Button>
              </Card.Actions>
            </Card>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
