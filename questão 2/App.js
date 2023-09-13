import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.squareone}>
        <Text>
          Square 1 
        </Text>
      </View>

      <View style={styles.squareto}>
        <Text >
          Square 2 
        </Text>
      </View>

      <View style={styles.squarethree}>
        <Text>
          Square 3 
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  squareone: {
    flex: 1,
    height: 80,
    backgroundColor: '#7ce0f9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginHorizontal: 15,
  },
  squareto: {
    flex: 1,
    height: 80,
    backgroundColor: '#4dc2c2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginHorizontal: 15,
  },
  squarethree: {
    flex: 1,
    height: 80,
    backgroundColor: '#ff637c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginHorizontal: 15,
  }
});
