import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './Button';
import { styles } from './PlayerCardStyles';

export function PlayerCard({ text, lifeAction, viewStyle, textStyle, player, backGround }) {
    return (
        <View style={{ ...viewStyle, backgroundColor: backGround }}>
            <View style={styles.asd}>
                <Button
                    action={() => { lifeAction(player, 5) }}
                    label='5'
                    style={textStyle}
                />
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
                <Button
                    action={() => { lifeAction(player, -5) }}
                    label='5'
                    style={textStyle}
                />
            </View>

        </View>
    )
}
