import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {

  // state = {
  //   todos: {},
  //   isDataReady: false,
  //   text: '',
  //   name: '',
  //   initialElements = [
  //     { id : "0", text : "Object 1"},
  //     { id : "1", text : "Object 2"},
  //   ]
  // }

 

  // [exampleState, setExampleState] = useState(initialElements)

  // addElement = () => {
  //   var newArray = [...initialElements , {id : "2", text: "Object 3"}];
  //   setExampleState(newArray);
  // }
  render() {
  return (
    <View style={styles.container}>
        {/* <FlatList
            keyExtractor = {item => item.id}  
            data={exampleState}
            renderItem = {item => (<Text>{item.item.text}</Text>)} />
        <Button
          title="Add element"
          onPress={addElement} /> */}

<Text>Home Screen</Text>
      <Button
        title="Go to Tasks"
        onPress={() => this.props.navigation.navigate('Tasks')}
      />
      <Button
        title="Go to Map"
        onPress={() => this.props.navigation.navigate('Map')}
      />
    </View>
    )
  }
  }








    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      // <Text>Home Screen</Text>
      // <Button
      //   title="Go to Tasks"
      //   onPress={() => navigation.navigate('Tasks')}
      // />
    // </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1
  },
});