import {View, Text, SafeAreaView, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {BookCard} from '../../components/Card/BookCard';
import Card from '../../components/Card/Card';
import {Cart} from '../../components/Card/Cart';

import images from '../../assets/images';

import HomeContainer from '../../components/Wrapper/homeContainer';
import {useSelector} from 'react-redux';
import {RootState} from 'store';

const CartDetails = () => {
  const {cart} = useSelector((state: any) => state.books);
  return (
    <HomeContainer image={images.background}>
      <SafeAreaView>
        <FlatList
          data={cart}
          ListEmptyComponent={
            <Card>
              <Text>Empty data</Text>
            </Card>
          }
          renderItem={({item}) => {
            return <Cart data={item} />;
          }}
        />
        <View>
          <Card>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // width: '60%',
              }}>
              <Text>Total</Text>
              <Text>Price</Text>
            </View>
          </Card>
        </View>
      </SafeAreaView>
    </HomeContainer>
  );
};

export default CartDetails;
