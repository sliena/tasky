import React, { useState } from 'react';
import { render } from 'react-dom';
import { Button, View, Text, Image, StyleSheet, Pressable, LinearGradient } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

// modal bottom pupup window
export class NewItemModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }


    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex: 1, width: '100%'}} />
        if (!onTouch) return view

        return(
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    render() {
        let {show} = this.state
        const {onTouchOutside, title} = this.props

        return(
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'red',
                    justifyContent: 'flex-end'}}
                    >
                        {this.renderOutsideTouchable(onTouchOutside)}
                        <View style={{
                            backgroundColor: 'blue',
                            width: '100%',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            paddingHorizontal: 10,
                            maxHeight: deviceHeight * 0.4
                        }}>
                            <View>
                                <Text style={{
                                    color: 'yellow',
                                    fontSize: 20,
                                    fontWeight: '500',
                                    margin: 15
                                }}>
                                    {title}
                                </Text>
                            </View>
                        </View>
                </View>
            </Modal>
        )
    }
}