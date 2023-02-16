import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartContainer: {
        padding: 10, marginBottom: 70
    },
    totalContainer: { 
        display: 'flex', flexDirection: 'row',
         backgroundColor: '#fff', borderRadius: 10, 
         padding: 10, margin: 10, borderColor: '#909090', 
         borderWidth: 2 
        },
        totalLabel: {flex: 1, fontSize: 20, fontWeight: 'bold'}
})

export default styles