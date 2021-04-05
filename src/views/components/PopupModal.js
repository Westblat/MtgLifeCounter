import React from 'react';
import {
    Modal,
    View,
    Text,
} from 'react-native';
import { Button } from './Button';

export const PopupModal = ({ visible, buttons, closeModal }) => (
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
            <Text>Player amount</Text>
            {buttons.map((button) => (
                <View>
                    <Button
                        label={button[1]}
                        action={button[0]}
                    />
                </View>

            ))}
            <Button
                label='Close settings'
                action={closeModal}
            />
        </View>
    </Modal>
)
