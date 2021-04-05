import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';

import { styles } from './styles'
import { PlayerCard } from './components/PlayerCard'
import { Button } from './components/Button';
import { SettingsModal } from './components/SettingsModal';

const background = [
    'red',
    'blue',
    'white',
    'green',
    'grey',
]
const Home = () => {
    const [playerStatus, changePlayerStatus] = useState({ p1: { life: 20 }, p2: { life: 20 }, p3: { life: 20 }, p4: { life: 20 } })
    const [playerAmount, changePlayerAmount] = useState(4)
    const [settingsVisible, showSettings] = useState(false)

    const changeLife = (player, life) => {
        changePlayerStatus(
            { ...playerStatus,
                [player]: { life: playerStatus[player].life + life } }
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {Object.keys(playerStatus).filter((p, i) => !(i % 2)).map((playerNumber, i) => (
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
            <View style={{ position: 'absolute',
                backgroundColor: 'white',
                alignSelf: 'center',
                left: (Dimensions.get('window').width / 2) - 25
            }}
            >
                <Button
                    label='S'
                    action={() => showSettings(!settingsVisible)} />

            </View>
            <View style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                justifyContent: 'center',
                flex: 1,
            }}>
                <SettingsModal
                    visible={settingsVisible}
                    changePlayerAmount={changePlayerAmount}
                    playerAmount={playerAmount}
                    changePlayerStatus={changePlayerStatus}
                    playerStatus={playerStatus}
                    closeModal={() => showSettings(!settingsVisible)}
                />
            </View>
        </View>
    )
}

export default Home
