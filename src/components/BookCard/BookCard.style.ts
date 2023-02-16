import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        marginBottom: 15
    },
    cardView: {
        display: 'flex',
        // flex: 1,
        flexDirection: 'row'
    },
    cardLabel: {
        flex: 1,
        fontWeight: 'bold',
        color: '#707070'
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
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default styles;