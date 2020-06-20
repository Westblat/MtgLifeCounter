import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";
import {Button} from "./Button";

export function PlayerCard({text, lifeAction, style}) {
    return(
        <View>
            <View style={style}>
                <Button
                    action={() => {lifeAction(1)}}
                    label={'+'}
                />
                <Text style={styles.life}>{text}</Text>
                <Button
                    action={() => {lifeAction(-1)}}
                    label={'-'}
                />
            </View>
        </View>
    )
}
