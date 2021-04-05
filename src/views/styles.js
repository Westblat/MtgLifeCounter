import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    leftContainer: {
        flexGrow: 1,
    },
    rightContainer: {
        flexGrow: 1,
    },
    lifeLeft: {
        fontSize: 40,
        // transform: [{ rotate: '90deg' }],
    },
    lifeRight: {
        fontSize: 40,
    },
    lifeContainerLeft: {
        flex: 1,
        flexDirection: 'column',
        fontSize: 40,
        alignSelf: 'center',
        borderWidth: 1,
        width: '100%',
        height: '100%'
    },
    lifeContainerRight: {
        flex: 1,
        flexDirection: 'column',
        fontSize: 40,
        alignSelf: 'center',
        borderWidth: 1,
        width: '100%'
    },
})
