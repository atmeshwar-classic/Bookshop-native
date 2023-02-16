import React from 'react';
import {Text, View, Button, FlatList,Card,Title} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function BookCart() {
  const cart = useSelector(state => state.Cart);

  console.log('MyCart Screen', cart);
  return (
    <View>
        <Text>Hello</Text>
      {/* <FlatList
        data={cart}
        renderItem={({item}) => {
          return (
            <Card style={{margin: 10}}>
              <Card.Title title={item.name} subtitle="Selling Books" />
              <Card.Content>
                <Text variant="titleLarge">{item.author}</Text>
                <Text variant="bodyMedium">{item.description}</Text>
              </Card.Content>
              <Text style={{fontSize: 20, fontWeight: 600, marginTop: 8}}>
                Price: {item.price}
              </Text>
              <Card.Actions></Card.Actions>
            </Card>
          );
        }}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
}
