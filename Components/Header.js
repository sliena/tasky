import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title.toUpperCase()}</Text>
  </View>
);
const styles = StyleSheet.create({
  headerContainer: {
    height: '10%',
    marginTop: 40,
    // borderColor: 'white',
    // borderWidth: 2
  },
  headerText: {
    textAlign: 'center',
    height: '100%',
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  }
});
export default Header;