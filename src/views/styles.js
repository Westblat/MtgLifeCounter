import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    leftContainer: {
        flexGrow: 1,
        backgroundColor: 'red',
    },
    rightContainer: {
        backgroundColor: 'blue',
        flexGrow: 1,
    },
    life1: {
        fontSize: 40,
        transform: [{ rotate: '90deg' }],
        alignSelf: 'center'
    },
    life2: {
        fontSize: 40,
        transform: [{ rotate: '270deg' }],
        alignSelf: 'center'
    },
    lifeContainer1: {
        flex: 1,
        flexDirection: 'column',
        fontSize: 40,
        alignSelf: 'center',
    },
    lifeContainer2: {
        flex: 1,
        flexDirection: 'column',
        fontSize: 40,
        alignSelf: 'center',
    },
})
