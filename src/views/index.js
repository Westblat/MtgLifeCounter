import React, {useState} from "react";
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles'
import {Button} from "./components/Button";
import { PlayerCard } from './components/PlayerCard'


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
            <PlayerCard text={p2Life} lifeAction={changeLifeP2} style={styles.lifeContainer1}/>
            <PlayerCard text={p1Life} lifeAction={changeLifeP1} style={styles.lifeContainer2}/>
        </View>
    )
}