import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import { Button } from './Button';

export function PlayerCard({ text, lifeAction, style, player, playerCount }) {
    let cardStyle = styles.lifeContainer2
    if (parseInt(player.substr(1)) % 2) {
        cardStyle = styles.lifeContainer1
    }
    return (
        <View style={cardStyle}>
            <View style={{ flex: 1 }}>
                <Button
                    action={() => { lifeAction(player, 1) }}
                    label='+'
                />
                <Text style={styles.life}>{text}</Text>
                <Button
                    action={() => { lifeAction(player, -1) }}
                    label='-'
                />
            </View>
        </View>
    )
}
