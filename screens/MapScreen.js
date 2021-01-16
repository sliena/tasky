import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Image, Button, Dimensions, Pressable } from 'react-native';


const latitudeDelta = 1
const longitudeDelta = 1

export default class MapScreen extends React.Component {

    STORAGE_KEY = '@storage_Key'


    constructor(props) {
        super(props);
        this.state={
            region:{
                latitudeDelta,
                longitudeDelta,
                latitude:56.95390995690116, 
                longitude: 24.11706388884615
            }
        }
       }

       componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
          var lat = parseFloat(position.coords.latitude)
          var long = parseFloat(position.coords.longitude)
    
          var initialRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          }
    
          this.setState({region: initialRegion})
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
      }

      onRegionChange = region => {
        this.setState({
          region
        })
      }
      
      storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(STORAGE_KEY+state_z, jsonValue)
          alert('Saved successfully!')
        } catch (e) {
          alert('Failed to save data in storage')
        }
      }   

    render() {
        // const [location, setLocation] = useState({
        //     latitude: 37.78825,
        //     longitude: -122.4324,
        //   });
        return (
          <View style={{flex: 1}}>
            <MapView style={styles.map}
                ref='map'
                initialRegion={this.state.region}
                showsUserLocation={true}
                showsMyLocationButton={true}
                onMapReady={this.onMapReady}
                //onRegionChangeComplete={this.onRegionChange}
                onRegionChange={this.onRegionChange}>
                <Marker
                    coordinate={{ 
                        latitude: this.state.region.latitude, 
                       longitude: this.state.region.longitude 
                    }}
                    title="this is a marker"
                    description="this is a marker example"
                />
            </MapView>
            <View pointerEvents="none" style={{position: 'absolute', top: 0, bottom: 45, left: 20, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}}>
                <Image pointerEvents="none" style={{width: 50,
                    height: 50,}}source={require('../assets/marker.png')}
                />
            </View>
            <Pressable
                onPress={onPress}   
                style={({pressed}) => [{
                    opacity: pressed ? 0.5 : 1,
                },
                styles.absolutePlus]}
        >
            <Image
                source={require('../assets/plus.png')}
                style={styles.floatingButtonStyle}
            />
        </Pressable>
          </View>
        )
    }
  }
  var deviceHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },  
    map: {
        flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      marginLeft: 10
    },
    absolutePlus: {
        position: 'absolute',
        bottom: 20,
        right:10,
      },
      
  });