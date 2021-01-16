import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

export default function Todo({ name }) {
    return (
            <TouchableOpacity onPress={onPress}>
                <Text>{name}</Text>
    			{/* <Icon
    				name={isCompleted ? 'checkmark-circle' : 'radio-button-off'}
    				style={{ paddingLeft: 10, color: '#7A7AF6' }}
    			/> */}
    		</TouchableOpacity>
    )
}
