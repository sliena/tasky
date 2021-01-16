import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, Pressable, LinearGradient } from 'react-native';
import uuidv1 from 'uuid/v1'
import { FlatList } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AddFlat from '../Components/AddFlat'
import Header from '../Components/Header'
import Item from '../Components/Item'
import Zitem from '../Components/Zitem'



// const Item = ( {text} ) => (
//   <Pressable  
//     style={({pressed}) => [
//         {
//             opacity: pressed ? 0.5 : 1,
//         },
//         {
//           flex: 1,
//           backgroundColor: '#fff',
//           width: '100%',
//           height: 100,
//           borderWidth: 1
//         }
//     ]}
//   >
//     <Text>{text}</Text>
//   </Pressable>
// )


class TasksScreen extends React.Component {

  constructor(props) {
    super(props)
    

    this.handler = this.handler.bind(this)
  }

  handler() {
    this.setState({
      someVar: 'some value'
    })
  }

  popupRef = React.createRef()

  onShowPopup = () => {
    this.popupRef.show()
  }

  onClosePopup = () => {
    this.popupRef.close()
  }

  state = {
    todos: {},
    isDataReady: false,
    text: '',
    name: ''
  }

  componentDidMount() {
    this.loadTodos()
  }

  loadTodos = async () => {
		try {

			const getTodos = await AsyncStorage.getItem('todos')
			const parsedTodos = JSON.parse(getTodos)
			this.setState({ isDataReady: true, todos: parsedTodos || {} })
		} catch (err) {
			alert('Application Error. Cannot load data.')
		}
  }
  
  saveTodos = newToDos => {
		const saveTodos = AsyncStorage.setItem('todos', JSON.stringify(newToDos))
	}



  addTodo = newTask => {
		const newTodoItem = newTask 
		if (newTodoItem !== '') {
			this.setState(prevState => {
				const ID = 4
				const newToDoObject = {
					[ID]: {
						id: ID,
						isCompleted: false,
						textValue: newTodoItem,
						createdAt: Date.now()
					}
				}
				const newState = {
					...prevState,
					todos: {
						...prevState.todos,
						...newToDoObject
					}
				}
				this.saveTodos(newState.todos)
				return { ...newState }
			})
    }
  }

  onPressFab = () => {
		this.props.navigation.navigate('AddTask', {
			saveItem: this.addTodo
		})
  }
  
  

  render() {
    const headerTitle='Tasky';
    const initialElements = []
    
    return (
      <View styles={styles.container}>
        <Header title={headerTitle} styles={{backgroundColor: 'red'}}/>
        <FlatList 
              onPress={() => console.log("clicked")}
              keyExtractor = {item => item.id}  
              data={this.state.todos}
              renderItem={row => {
                return (
                  <Item
                    handler = {this.handler}
                    navigation={this.props.navigation}
                    isCompleted={row.item.isCompleted}
                    textValue={row.item.textValue}
                    id={row.item.id}
                    deleteTodo={this.deleteTodo}
                    completeTodo={this.completeTodo}
                    inCompleteTodo={this.inCompleteTodo}
                  />
                )
              }}
        />
        {/* <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} /> */}
        {/* <Button title="Reset" onPress={reset} /> */}
        {/* <Button title="Save" onPress={() => storeData(state_z.toString())} /> */}
        {/* <Button title="Read" onPress={readData} /> */}
        {/* <Button title="Clear" onPress={clearStorage} />   */}
        
        <Pressable
          onPress={this.onPressFab}   
            style={({pressed}) => [
                {
                    opacity: pressed ? 0.5 : 1,
                },
              styles.absolutePlus
            ]}
        >
          <Image
            source={require('../assets/plus.png')}
            style={styles.floatingButtonStyle}
          />
        </Pressable>
      </View>
    );
  }
}

retrieveData = async () => {
  try {
    const name = await AsyncStorage.getItem('todos')

    if (name !== null) {
      this.setState({ name })
    }
  } catch (e) {
    alert('Failed to load name.')
  }
}

save = async name => {
  try {
    await AsyncStorage.setItem('todos', name)
    alert('Data successfully saved!')
    this.setState({ name })
  } catch (e) {
    alert('Failed to save name.')
  }
}

removeEverything = async () => {
  try {
    await AsyncStorage.clear()
    alert('Storage successfully cleared!')
  } catch (e) {
    alert('Failed to clear the async storage.')
  }
}
export default TasksScreen;


  //onChangeText = text => this.setState({ text })

  // var STORAGE_KEY = '@storage_Key'
  // const [state_z, setState_z] = useState(0)


  // const renderItem = ({ item }) => (
  //   <Item text={item.text} />
  // )
  
  // const addElement = () => {
  //   var newArray = [...exampleState , {id : state_z, text: "Object:" + state_z}];
  //   setState_z((current) => current + 1);
  //   setExampleState(newArray);
  //   getAllKeys();
  // }

  // const reset = () => {
  //   setExampleState(initialElements)
  //   setState_z(0)
  // }

  // const getAllKeys = async () => {
  //   const name = await AsyncStorage.getItem(STORAGE_KEY)
  //   let keys = []
  //   try {
  //     keys = await AsyncStorage.getAllKeys()
  //   } catch(e) {
  //     alert('Failed to load all keys!')
  //   }
  //   console.log(keys)
  //   // example console.log result:
  //   // ['@MyApp_user', '@MyApp_key']
  // }

  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value)
  //     await AsyncStorage.setItem(STORAGE_KEY+state_z, jsonValue)
  //     alert('Saved successfully!')
  //   } catch (e) {
  //     alert('Failed to save data in storage')
  //   }
  // }

  // const readData = async () => {
  //   try {
  //     const Z = await AsyncStorage.getItem(STORAGE_KEY)
  //     alert('Fetched: ' + Z)
  //   } catch (e) {
  //     alert('Failed to fetch the data from storage')
  //   }
  // }

  // const clearStorage = async () => {
  //   try {
  //     await AsyncStorage.clear()
  //     alert('Storage successfully cleared!')
  //   } catch (e) {
  //     alert('Failed to clear the async storage.')
  //   }
  // }

  // const importData = async () => {
  //   try {
  //     const keys = await AsyncStorage.getAllKeys();
  //     const result = await AsyncStorage.multiGet(keys);
  
  //     return result.map(req => JSON.parse(req)).forEach(console.log);
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }


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
  plus: {
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
  absolutePlus: {
    position: 'absolute',
    top:550,
    right:10,
  }
});