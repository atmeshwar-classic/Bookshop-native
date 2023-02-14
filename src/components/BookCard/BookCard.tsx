import { Book } from "../../domain/books/types";
import {Text,View,FlatList} from "react-native";
import { Card,Button } from 'react-native-paper';
import { books } from "../../domain/books/books";
import {useSelector,useDispatch} from "react-redux";
type BookCardProps = Book;



export const BookCard = ({ }: BookCardProps) => {
  const totalBookCount = useSelector((state: RootState) => state.books.books)

  console.log(totalBookCount);

  return (
    <View>    
      <FlatList
        data={totalBookCount}
        renderItem={({item}) =>{
             return(
              <Card  style={{margin:10}}>
              <Card.Title title={item.name} subtitle="Selling Books" />
              <Card.Content>
                <Text variant="titleLarge">{item.author}</Text>
                <Text variant="bodyMedium">{item.description}</Text>
              </Card.Content>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Text  style={{fontSize:20,fontWeight:600,marginTop:8}}>Price: {item.price}</Text>
              <Card.Actions>
              
                <Button>Add To Cart</Button>
              </Card.Actions>
            </Card>
             )
        }
        }
        keyExtractor={item => item.id}
      />

    </View>
  )
}