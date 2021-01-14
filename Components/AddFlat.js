import React, { Component, useState } from 'react';
import { Pressable, Button, View, Text, TouchableOpacity, clickHandler, Image, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


function AddFlat() {
    return (
      <View>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            styles.touchableOpacityStyle
          ]}
          onPress={this.props.addElement}
        >
          <Image
            source={require('../assets/plus.png')}
            style={styles.floatingButtonStyle} />
        </Pressable>
      </View>
    );
};

export default AddFlat

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
    },
    titleStyle: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
    },
    textStyle: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    touchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      left: 110,
      bottom: 20,
    },
    floatingButtonStyle: {
      resizeMode: 'contain',
      width: 70,
      height: 70,
      //backgroundColor:'black'
    },
  });