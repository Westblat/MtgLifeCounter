import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    life: {
        fontSize: 40,
        alignSelf: 'center'
    },
    lifeContainer1: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 100,
        fontSize: 40,
        alignSelf: 'center',
        // transform: [{ rotate: '90deg' }],
        paddingBottom: 100,
    },
    lifeContainer2: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        fontSize: 40,
        alignSelf: 'center',
        // transform: [{ rotate: '270deg' }],
    },
})
