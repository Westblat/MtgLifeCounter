import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './Button';
import { styles } from './PlayerCardStyles';

export function PlayerCard({ text, lifeAction, viewStyle, textStyle, player, backGround, transform }) {
    return (
        <View style={{ ...viewStyle, backgroundColor: backGround }}>
            <View style={styles.container}>
                <Button
                    action={() => { lifeAction(player, 5) }}
                    label='5'
                    style={{ ...textStyle, ...transform }}
                />
                <Button
                    action={() => { lifeAction(player, 1) }}
                    label='+'
                    style={{ ...textStyle, ...transform }}
                />
                <Text style={{ ...textStyle, ...transform }}>{text}</Text>
                <Button
                    action={() => { lifeAction(player, -1) }}
                    label='-'
                    style={{ ...textStyle, ...transform }}
                />
                <Button
                    action={() => { lifeAction(player, -5) }}
                    label='5'
                    style={{ ...textStyle, ...transform }}
                />
            </View>

        </View>
    )
}
