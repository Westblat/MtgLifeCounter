import React from 'react';
import {
    Modal,
    View,
    Text,
} from 'react-native';
import { Button } from './Button';

export const PopupModal = (
    visible,
    buttons,
) => {
    console.log(visible)
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
                <Text>Oispa kaljaa</Text>
            </View>
        </Modal>
    )
}
//                {buttons.map((button) => (
//                     <Button
//                         action={button[1]}
//                     />
//                 ))}
