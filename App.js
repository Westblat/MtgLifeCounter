/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View,
    StatusBar,
} from 'react-native';
import Home from './src/views'

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle='light-content' />
            <Home />
        </View>
    );
}
