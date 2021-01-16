import React, { useState } from 'react';
import { Dimensions, TextInput, View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import uuidv1 from 'uuid/v1'
import { FlatList } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../Components/Header'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const uuidV1 = require('uuid/v1');

class TasksScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        data: [{
          "id": uuidV1(),
          "title": 'Groceries',
          "description": 'Buy milk, potatoes, bananas'
        },
        {
          "id": uuidV1(),
          "title": 'Take kids from kindergarten',
          "description": 'Should be picked up no later than 18:00'
        },
        {
          "id": uuidV1(),
          "title": 'Visit doctor',
          "description": 'Doctors appointment to check eye'
        },
        ],
        modalVisible: false,
        inputTitleValue: '',
        inputDescriptionValue: '',
    }
}

componentDidMount() {
    //this.retrieveData();
}

retrieveData = async () => {
  try {
    const name = await AsyncStorage.getItem(todos)
    console.log(todos)
    if (name !== null) {
      this.setState({ todata: todos })
    }
  } catch (e) {
    alert('Failed to load name.')
  }
}

renderItemComponent = (data) =>
    <TouchableOpacity style={styles.todoItem}
    onPress={() => {
      alert('Work in progress...')
    }}>
      <Text style={styles.textInput}>{data.item.title}</Text>
      <Text>{data.item.description}</Text>
    </TouchableOpacity>

setModalVisible(visible) {
  this.setState({modalVisible: visible});
}

setInputTitleValue(title) {
  this.setState({inputTitleValue: title})
}
setInputDescriptionValue(description) {
  this.setState({inputDescriptionValue: description})
}
  
saveTask = (title, description) => {
  if (this.state.inputTitleValue != '' 
      && this.state.inputDescriptionValue != '') {
    var newArray = [...this.state.data , {"id": uuidV1(), "title": title, "description": description}]
    console.log('CHECKPOINT saveTask')
    this.setState({ data: newArray })
  } else {
    this.setModalVisible(!this.state.modalVisible)
  }
  
}

render() {
  return (
    <SafeAreaView style={{backgroundColor: 'purple', height: '100%', justifyContent: 'center',
    alignItems: 'center', marginTop: 20}}>
      
      <Header title={'Tasky'} />
      <FlatList
        data={this.state.data}
        renderItem={item => this.renderItemComponent(item)}
        keyExtractor={item => item.id.toString()}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
      />
      <TouchableOpacity onPress = {() => {
          this.setModalVisible(true)
          this.setState({ inputTitleValue: '' })
          this.setState({ inputDescriptionValue: '' })
        }} 
        style={{marginTop: 20, width: '80%'}}>
        <View style = {styles.newItemButton}>
          <Text style = {{color: 'white'}}>New Task</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>     
          <View style={styles.modalWindow}>
            <TouchableOpacity onPress = {() => {
                this.saveTask(this.state.inputTitleValue, this.state.inputDescriptionValue)
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <View style = {styles.saveAndCloseButton}>
                <Text style = {{color: 'white'}}>Save & Close</Text>
              </View>
            </TouchableOpacity>
            <View>
            <TextInput placeholder="Enter title..." 
              value={this.inputValue} style={styles.textInputBox}  
              onChangeText={(value) => this.setInputTitleValue(value)} 
            />
          </View>
          <View>
            <TextInput placeholder="Enter description..." 
              value={this.inputValue} style={styles.textInputBox}  
              onChangeText={(value) => this.setInputDescriptionValue(value)} 
            />
          </View>
          </View>
          
        </Modal>
      </View>
    </SafeAreaView>
    )
  }  
}

const styles = StyleSheet.create({
todoItem: {
  marginVertical: 5,
  height: 50,
  width: windowWidth,
  backgroundColor: '#FFF',
  fontWeight: 'bold'
  },
newItemButton: {
  backgroundColor: '#03A9F4', 
  alignItems: 'center', 
  justifyContent: 'center', 
  borderRadius: 5,
  width: '100%', 
  height: 40,
  marginBottom: 45
},
saveAndCloseButton: {
  backgroundColor: '#03A9F4', 
  alignItems: 'center', 
  justifyContent: 'center', 
  borderRadius: 5,
  width: '100%', 
  height: 40,
  marginBottom: 25
},
modalWindow: {
  backgroundColor: 'white', 
  marginTop: 22, 
  width: '90%', 
  height: '85%', 
  alignSelf: 'center', 
  top:80, 
  borderRadius: 5,
  borderWidth: 1, 
  borderColor: 'black'
},
textInputBox: {
  borderWidth: 1,
  borderColor: 'black',
  marginVertical: 5,
},
textInput: {
  fontWeight: 'bold'
}
});

export default TasksScreen;


// fetchCats() {
//   this.setState({ refreshing: true });
//   fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
//       .then(res => res.json())
//       .then(resJson => {
//         console.log(resJson);
//           this.setState({ data: resJson });
//           this.setState({ refreshing: false });
//       }).catch(e => console.log(e));
// }
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