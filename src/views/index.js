import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles'
import { PlayerCard } from './components/PlayerCard'
import { Button } from './components/Button';

const Home = () => {
    const [playerStatus, changePlayerStatus] = useState({ p1: { life: 20 }, p2: { life: 20 } })
    const [playerAmount, changePlayerAmount] = useState(2)

    const changeLife = (player, life) => {
        changePlayerStatus(
            { ...playerStatus,
                [player]: { life: playerStatus[player].life + life } }
        )
    }
    const addPlayer = () => {
        // There is currently this button for adding players. Only used to test dynamic styles
        const newPlayer = `p${playerAmount + 1}`
        changePlayerStatus(
            { ...playerStatus, [newPlayer]: { life: 20 } }
        )
        changePlayerAmount(playerAmount + 1)
    }
    return (
        <View style={styles.container}>
            <Button
                label='Add player'
                action={addPlayer} />
            {Object.keys(playerStatus).map((playerNumber) => (
                <PlayerCard
                    key={playerNumber}
                    player={playerNumber}
                    text={playerStatus[playerNumber].life}
                    lifeAction={changeLife}
                    style={styles.lifeContainer1} />
            ))}
        </View>
    )
}

export default Home
