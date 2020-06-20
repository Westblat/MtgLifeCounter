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
        fontSize: 40,
        alignSelf: 'center',
        transform: [{rotate: '180deg'}]
    },
    lifeContainer2: {
        marginTop: 20,
        fontSize: 40,
        alignSelf: 'center',
    }
})
