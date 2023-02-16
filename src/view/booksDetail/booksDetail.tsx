import {View, ImageBackground} from 'react-native';

import React from 'react';
import images from '../../assets/images';
import {BookCard} from '../../components/Card/BookCard';
import {FlatList} from 'react-native';
import {books} from '../../domain/books/books';
import HomeContainer from '../../components/Wrapper/homeContainer';

const BooksDetail = () => {
  return (
    <HomeContainer image={images.background}>
      <FlatList
        data={books}
        renderItem={({item}) => {
          return <BookCard data={item} />;
        }}
      />
    </HomeContainer>
  );
};

export default BooksDetail;
