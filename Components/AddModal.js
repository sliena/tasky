import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, LinearGradient, Dimensions } from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

export default class AddModal extends React.Component {
    constructor(props) {
        super(props);
    }

    showAddModal = () => {
        this.refs.myModal.open()
    }

    render() {
        return(
            <Modal 
            ref={'myModal'}
                style={{
                    justifyContent: 'center',
                    borderRadius: 20,
                    shadowRadius: 10,
                    width: Dimensions.get('window') - 80,
                    height: 200
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert('modal closed ')
                }}
            >
                <Text>baboon in modal</Text>
            </Modal>
        )
    }

}