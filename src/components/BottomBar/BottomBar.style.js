import {StyleSheet, Dimensions} from 'react-native'

const {windth, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: 'aquamarine',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: height - 210,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fab: {
        position: 'absolute',
        right: 16,
    },
    bottomIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    totalItems: {
        top: -10, position : 'absolute', 
        marginLeft: 25,
        backgroundColor: '#ff0000',
        color: '#fff',
        width: 20,
        height: 20,
        textAlign: 'center',
        borderRadius: 15
    }
});


export default styles;
