import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigation/StackNavigation';
import { MenuProvider } from 'react-native-popup-menu';
const App = () => {
  return (
    <MenuProvider>
    <NavigationContainer>
      <StackNavigation/>
     
    </NavigationContainer>
    </MenuProvider>
  )
}

export default App