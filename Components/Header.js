import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title.toUpperCase()}</Text>
  </View>
);
const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
  },
  headerText: {
    textAlign: 'center',
    height: '50%',
    color: 'black',
    fontSize: 48,
    fontWeight: '500',
    borderWidth: 2,
    borderRadius: 5,
  }
});
export default Header;