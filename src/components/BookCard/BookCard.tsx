import { Book } from "../../domain/books/types";
import { View,Text,StyleSheet, Image, Button } from "react-native";

type BookCardProps = Book;

export const BookCard = ({...item}: BookCardProps) => {
  return(
    <View style={styles.item}>
    <Text style={styles.name}>
      Books:{ item.name}</Text>
    <Text>
      Author:{ item.author}
    </Text>
    <Text>
      Description:{ item.description}
    </Text>
    <Text>
      Price:{ item.price}rs
    </Text>
  </View>

  );
}
const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold'
  },
  item: {
    padding: 20,
    marginTop: 10,
    marginLeft:10,
    marginRight:10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
}

});