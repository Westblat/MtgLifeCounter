import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './Button';

export function PlayerCard({ text, lifeAction, viewStyle, textStyle, player }) {
    return (
        <View style={viewStyle}>
            <Button
                action={() => { lifeAction(player, 1) }}
                label='+'
                style={textStyle}
            />
            <Text style={textStyle}>{text}</Text>
            <Button
                action={() => { lifeAction(player, -1) }}
                label='-'
                style={textStyle}
            />
        </View>
    )
}
