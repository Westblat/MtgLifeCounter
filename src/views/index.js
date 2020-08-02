import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles'
import { PlayerCard } from './components/PlayerCard'
import { Button } from './components/Button';

const Home = () => {
    const [playerStatus, changePlayerStatus] = useState({ p1: { life: 20 }, p2: { life: 20 }, p3: { life: 20 }, p4: { life: 20 }, p5: { life: 20 } })
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
                style={{ position: 'absolute' }}
                label='Add player'
                action={addPlayer} />
            <View style={styles.leftContainer}>
                {Object.keys(playerStatus).filter((p, i) => !(i % 2)).map((playerNumber) => (
                    <PlayerCard
                        key={playerNumber}
                        player={playerNumber}
                        text={playerStatus[playerNumber].life}
                        lifeAction={changeLife}
                        playerCount={playerAmount}
                        viewStyle={styles.lifeContainer1}
                        textStyle={styles.life1}
                    />
                ))}
            </View>
            <View style={styles.rightContainer}>
                {Object.keys(playerStatus).filter((p, i) => (i % 2)).map((playerNumber) => (
                    <PlayerCard
                        key={playerNumber}
                        player={playerNumber}
                        text={playerStatus[playerNumber].life}
                        lifeAction={changeLife}
                        playerCount={playerAmount}
                        viewStyle={styles.lifeContainer2}
                        textStyle={styles.life2}
                    />
                ))}
            </View>
        </View>
    )
}

export default Home
