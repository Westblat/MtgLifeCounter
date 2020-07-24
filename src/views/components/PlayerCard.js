import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import { Button } from './Button';

export function PlayerCard({ text, lifeAction, style, player, playerCount }) {
    return (
        <View style={style}>
            <Button
                action={() => { lifeAction(player, 1) }}
                label='+'
            />
            <Text style={styles.life1}>{text}</Text>
            <Button
                action={() => { lifeAction(player, -1) }}
                label='-'
            />
        </View>
    )
}
