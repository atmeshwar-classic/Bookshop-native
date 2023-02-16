import { Book } from "../../domain/books/types";
import { Button, Card, Text, } from 'react-native-paper';
import { View } from "react-native";
import styles from "./BookCard.style";

type BookCardProps = Book;


export const BookCard = ({ name, description, author, price, id, data, btnLabel, handleClick }: BookCardProps) => {

  return <Card
    style={styles.cardContainer}>
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
          <Button style={styles.addButton} onPress={() => handleClick(id, data)}>
            <Text style={styles.btnText}>
              {btnLabel}
            </Text>
          </Button>

        </View>

      </Card.Content>
    </View>

  </Card>;
}

