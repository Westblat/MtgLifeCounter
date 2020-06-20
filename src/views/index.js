import React, {useState} from "react";
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles'
import {Button} from "./components/Button";


export default Home = () => {
    const [p1Life, setp1Life] = useState(20)
    const [p2Life, setp2Life] = useState(20)

    const changeLifeP1 = (life) => {
        setp1Life(p1Life + life)
    }
    const changeLifeP2 = (life) => {
        setp2Life(p2Life + life)
    }

    return (
        <View style={styles.container}>
                <View style={styles.lifeContainer1}>
                    <Button
                        action={() => changeLifeP2(1)}
                        label={'+'}
                    />
                    <Text style={styles.life}>{p2Life}</Text>
                    <Button
                        action={() => changeLifeP2(-1)}
                        label={'-'}
                    />
                </View>
                <View style={styles.lifeContainer2}>
                    <Button
                        action={() => changeLifeP1(1)}
                        label={'+'}
                    />
                    <Text style={styles.life}>{p1Life}</Text>
                    <Button
                        action={() => changeLifeP1(-1)}
                        label={'-'}
                    />
                </View>

        </View>
    )
}