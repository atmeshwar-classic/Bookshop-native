import { Book } from "../../domain/books/types";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet } from "react-native";

type BookCardProps = Book;

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const BookCard = ({ name, description, author, price , id}: BookCardProps) => {
  return  <Card>
  <Card.Content>
    <Text variant="titleLarge">{name}</Text>
    <Text variant="bodyMedium">Author: {author}</Text>
  </Card.Content>
  <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  <Card.Actions style={styles.cardActions}>
  <Text variant="titleLarge">Price: ${price}</Text>
    <Button>Add</Button>
    
  </Card.Actions>
</Card>;
}


const styles = StyleSheet.create({
  cardActions: {

  }
})