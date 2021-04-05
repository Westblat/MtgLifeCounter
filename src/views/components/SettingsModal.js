import React from 'react';
import {
    Modal,
    View,
    Text,
} from 'react-native';
import { Button } from './Button';

export const SettingsModal = ({ visible, buttons, closeModal, changePlayerStatus, changePlayerAmount, playerAmount, playerStatus }) => {
    console.warn('asd')
    const addPlayer = () => {
        const newPlayer = `p${playerAmount + 1}`
        changePlayerStatus(
            { ...playerStatus, [newPlayer]: { life: 20 } }
        )
        changePlayerAmount(playerAmount + 1)
    }

    const removePlayer = () => {
        const newPlayer = `p${playerAmount}`
        const newObject = playerStatus
        delete newObject[newPlayer]
        changePlayerStatus(newObject)
        changePlayerAmount(playerAmount - 1)
    }

    return (
        <Modal
            visible={visible}
        >
            <View style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                justifyContent: 'center',
                flex: 1,
            }}>
                <Text>Player amount: {playerAmount}</Text>
                <View>
                    <Button
                        label='Add new player'
                        action={addPlayer}
                    />
                    <Button
                        label='Remove player'
                        action={removePlayer}
                    />

                </View>
                <Button
                    label='Close settings'
                    action={closeModal}
                />
            </View>
        </Modal>
    )
}
