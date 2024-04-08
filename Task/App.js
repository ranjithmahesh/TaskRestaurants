import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import FilterScreen from './scr/screen/FilterScreen';
import HomeScreen from './scr/screen/HomeScreen';
import ViewAllScreen from './scr/screen/ViewAllScreen';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Filter"
            component={FilterScreen}
            options={{presentation: 'modal', title: 'Filters'}}
          />
          <Stack.Screen
            name="viewAll"
            component={ViewAllScreen}
            options={{title: 'Satisfy your Cravings'}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
