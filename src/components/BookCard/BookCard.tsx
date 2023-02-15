import { Book } from "../../domain/books/types";
import { Avatar, Button, Card, Text, } from 'react-native-paper';
import { StyleSheet, View, } from "react-native";

type BookCardProps = Book;


export const BookCard = ({ name, description, author, price, id }: BookCardProps) => {
  return <Card
    style={{
      backgroundColor: '#fff',
      marginBottom: 15
    }}>
    <View>
      <Card.Content>
        <View style={styles.cardView}>

        <Text variant="bodyMedium" style={styles.cardLabel}>Name:</Text>
        <Text variant="bodyMedium" style={styles.cardValue}>{name}</Text>
        </View>

        <View style={styles.cardView}>

        <Text variant="bodyMedium" style={styles.cardLabel}>Author:</Text>
        <Text variant="bodyMedium" style={styles.cardValue}>{author}</Text>
        </View>

        <View style={styles.cardView}>

      <Text variant="bodyMedium" style={styles.cardLabel}>Price:</Text>
      <Text variant="bodyMedium" style={styles.cardValue}>${price}</Text>
        </View>

        <View style={styles.cardView}>

      <Text variant="bodyMedium" style={styles.cardLabel}>Description: </Text> 
      <Text variant="bodyMedium" style={styles.cardValue}> {description}</Text>
        </View>
        <View style={styles.cardActions}>
      <Button style={styles.addButton}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>
          + Add To Card
          </Text>
          </Button>

        </View>

      </Card.Content>
    </View>
   
  </Card>;
}


const styles = StyleSheet.create({
  cardView:  {
    display: 'flex',
    // flex: 1,
    flexDirection: 'row'
  },
  cardLabel: {
    flex: 1
  },
  cardValue: {
    flex: 1
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  addButton: {
    borderRadius: 50,
    borderWidth: 1, 
    borderColor: '#2092EC',
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#2092EC',
    color: '#fff'
  }
})