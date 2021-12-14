import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator1 from './Navigations/BottomTabNavigatior1';
import ContextProvider from './Context/Context';


export default function App() {
  return (
    <ContextProvider>
    <NavigationContainer>
      <BottomTabNavigator1/>
    </NavigationContainer>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
