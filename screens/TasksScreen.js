import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, Pressable, LinearGradient, SafeAreaView, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import uuidv1 from 'uuid/v1'
import { FlatList } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AddFlat from '../Components/AddFlat'
import Header from '../Components/Header'
import Item from '../Components/Item'
import Zitem from '../Components/Zitem'
import Todo from '../Components/Todo'
import AddModal from '../Components/AddModal'

const data = ["Germany", "Australia", "Sri Lanka", "Japan"];

class TasksScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        data: [],
        refreshing: true,
        todata: [{
              "height": 333,
              "id": "44j",
              "url": "https://cdn2.thecatapi.com/images/44j.jpg",
              "width": 500,
            }],
        modalVisible: false
    }
}

componentDidMount() {
  console.log('CATS START ZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUG')
    this.fetchCats();
    console.log('TODO START ZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUG')
    //this.retrieveData();
}

fetchCats() {
    this.setState({ refreshing: true });
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
        .then(res => res.json())
        .then(resJson => {
          console.log(resJson);
            this.setState({ data: resJson });
            this.setState({ refreshing: false });
        }).catch(e => console.log(e));
}

retrieveData = async () => {
  try {
    const name = await AsyncStorage.getItem(todos)
    console.log('FROM INSIDE RETRIEVEDATA ZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUGZUG')
    console.log(todos)

    if (name !== null) {
      this.setState({ todata: todos })
    }
  } catch (e) {
    alert('Failed to load name.')
  }
}

renderItemComponent = (data) =>
    <TouchableOpacity style={styles.container}
    >
        <Text>{data.item.url}</Text>
    </TouchableOpacity>
    

ItemSeparator = () => <View style={{
    height: 2,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginLeft: 10,
    marginRight: 10,
}}
/>

setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onPressFab = () => {
    // var newArray = [...this.state.todata , {"height": 333,"id": "44j","url": "https://cdn2.thecatapi.com/images/44j.jpg","width": 500,}]
    // this.setState({ todata: newArray 
  // })
    alert('baboon')
  }

// handleRefresh = () => {
//     this.setState({ refreshing: false }, () => { this.fetchCats() }); // call fetchCats after setting the state
// }

render() {
  return (
    <SafeAreaView style={{backgroundColor: 'purple', height: '100%', justifyContent: 'center',
    alignItems: 'center'}}>
      
      <Header title={'Tasky'} />
      <FlatList
        data={this.state.todata}
        renderItem={item => this.renderItemComponent(item)}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={this.ItemSeparator}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
      />
      <TouchableOpacity onPress = {() => {this.setModalVisible(true)}} style={{width: '80%'}}>
        <View style = {styles.newItemButton}>
          <Text style = {{color: 'white'}}>New Task</Text>
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>

    )
}
}

const styles = StyleSheet.create({
container: {
height: 100,
margin: 10,
backgroundColor: '#FFF',
borderRadius: 6,
},
image: {
height: '100%',
borderRadius: 4,
},
newItemButton: {
  backgroundColor: '#24A0ED', 
  alignItems: 'center', 
  justifyContent: 'center', 
  borderRadius: 5,
  width: '100%', 
  height: 40,

}
});

export default TasksScreen;



// retrieveData = async () => {
//   try {
//     const name = await AsyncStorage.getItem('todos')

//     if (name !== null) {
//       this.setState({ name })
//     }
//   } catch (e) {
//     alert('Failed to load name.')
//   }
// }

// save = async name => {
//   try {
//     await AsyncStorage.setItem('todos', name)
//     alert('Data successfully saved!')
//     this.setState({ name })
//   } catch (e) {
//     alert('Failed to save name.')
//   }
// }

// removeEverything = async () => {
//   try {
//     await AsyncStorage.clear()
//     alert('Storage successfully cleared!')
//   } catch (e) {
//     alert('Failed to clear the async storage.')
//   }
// }
// export default TasksScreen;


//   //onChangeText = text => this.setState({ text })

//   // var STORAGE_KEY = '@storage_Key'
//   // const [state_z, setState_z] = useState(0)


//   // const renderItem = ({ item }) => (
//   //   <Item text={item.text} />
//   // )
  
//   // const addElement = () => {
//   //   var newArray = [...exampleState , {id : state_z, text: "Object:" + state_z}];
//   //   setState_z((current) => current + 1);
//   //   setExampleState(newArray);
//   //   getAllKeys();
//   // }

//   // const reset = () => {
//   //   setExampleState(initialElements)
//   //   setState_z(0)
//   // }

//   // const getAllKeys = async () => {
//   //   const name = await AsyncStorage.getItem(STORAGE_KEY)
//   //   let keys = []
//   //   try {
//   //     keys = await AsyncStorage.getAllKeys()
//   //   } catch(e) {
//   //     alert('Failed to load all keys!')
//   //   }
//   //   console.log(keys)
//   //   // example console.log result:
//   //   // ['@MyApp_user', '@MyApp_key']
//   // }

//   const storeData = async (value) => {
//     try {
//       const jsonValue = JSON.stringify(value)
//       await AsyncStorage.setItem(STORAGE_KEY+state_z, jsonValue)
//       alert('Saved successfully!')
//     } catch (e) {
//       alert('Failed to save data in storage')
//     }
//   }

//   // const readData = async () => {
//   //   try {
//   //     const Z = await AsyncStorage.getItem(STORAGE_KEY)
//   //     alert('Fetched: ' + Z)
//   //   } catch (e) {
//   //     alert('Failed to fetch the data from storage')
//   //   }
//   // }

//   // const clearStorage = async () => {
//   //   try {
//   //     await AsyncStorage.clear()
//   //     alert('Storage successfully cleared!')
//   //   } catch (e) {
//   //     alert('Failed to clear the async storage.')
//   //   }
//   // }

//   // const importData = async () => {
//   //   try {
//   //     const keys = await AsyncStorage.getAllKeys();
//   //     const result = await AsyncStorage.multiGet(keys);
  
//   //     return result.map(req => JSON.parse(req)).forEach(console.log);
//   //   } catch (error) {
//   //     console.error(error)
//   //   }
//   // }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//   },
//   titleStyle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     padding: 10,
//   },
//   textStyle: {
//     fontSize: 16,
//     textAlign: 'center',
//     padding: 10,
//   },
//   plus: {
//     position: 'absolute',
//     width: 50,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     left: 110,
//     bottom: 20,
//   },
//   floatingButtonStyle: {
//     resizeMode: 'contain',
//     width: 70,
//     height: 70,
//     //backgroundColor:'black'
//   },
//   absolutePlus: {
//     position: 'absolute',
//     top:550,
//     right:10,
//   }
// });