import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button({ action, label, style, ...props }) {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={action}
            underlayColor='transparent'
            {...props}
        >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    label: {
        fontSize: 40,
    }
})
