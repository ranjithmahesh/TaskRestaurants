import React from 'react';
import {StyleSheet, View} from 'react-native';

import Header from '../component/Header';
import TopBarNAvigation from '../component/TopBarNAvigation';
import {restaurants} from '../lib/data';
const HomeScreen = () => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <Header />

      <TopBarNAvigation />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
