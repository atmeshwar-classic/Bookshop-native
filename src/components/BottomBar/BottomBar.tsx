import React, {useEffect, useState} from 'react';
import { Dimensions, View, Text } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import styles from './BottomBar.style';

const BOTTOM_APPBAR_HEIGHT = 60;
const MEDIUM_FAB_HEIGHT = 56;

const { width, height } = Dimensions.get('screen');


const BottomBar = ({isBook=false, isCart=false, handleScreen}) => {
    const { bottom } = useSafeAreaInsets();
    const theme = useTheme();

    const cartState = useSelector<any>(state => state.cart);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        setTotalItems(total => cartState.totalBooks)
    }, [cartState]);

    return (
        <Appbar
            style={[
                styles.bottom,
                {
                    height: BOTTOM_APPBAR_HEIGHT + bottom,
                    backgroundColor: '#D9D9D9'
                },
            ]}
            safeAreaInsets={{ bottom }}
        >
            <View style={styles.bottomIcon} >
                <Icon name="book" size={30} style={{ color: isBook? '#2092EC' : '#333' }} onPress={() => handleScreen('Books')} />
            </View>
            <View style={styles.bottomIcon} >
                <Icon name="cart-plus" size={30} style={{ color: isCart? '#2092EC' : '#333' }} onPress={() => handleScreen('Cart')} />
                <Text style={styles.totalItems}>{totalItems}</Text>
            </View>

        </Appbar>
    );
};

export default BottomBar;