import * as React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const BOTTOM_APPBAR_HEIGHT = 60;
const MEDIUM_FAB_HEIGHT = 56;

const { width, height } = Dimensions.get('screen');


const BottomBar = ({isBook=false, isCart=false}) => {
    const { bottom } = useSafeAreaInsets();
    const theme = useTheme();

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
                <Icon name="book" size={30} style={{ color: isBook? '#2092EC' : '#333' }} />
            </View>
            <View style={styles.bottomIcon} >
                <Icon name="cart-plus" size={30} style={{ color: isCart? '#2092EC' : '#333' }} />
            </View>

        </Appbar>
    );
};

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
    }
});

export default BottomBar;