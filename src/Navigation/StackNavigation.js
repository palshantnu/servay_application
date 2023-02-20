import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screeen/authStack/Login';
import MainScreen from '../Screeen/mainStack/MainScreen';
import RequisitionForm from '../Screeen/mainStack/RequisitionForm';
import CustomerFeedback from '../Screeen/mainStack/CustomerFeedback';
import NoiseMonitoring from '../Screeen/mainStack/NoiseMonitoring';
import WaterQuality from '../Screeen/mainStack/WaterQuality';
import AAQM from '../Screeen/mainStack/AAQM';
import EMISSION from '../Screeen/mainStack/EMISSION';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen options={{headerShown: false}}  name="Login" component={Login} />
      <Stack.Screen options={{headerShown: false}} name="MainScreen" component={MainScreen} />
      <Stack.Screen  name="Requisition Form" component={RequisitionForm} />
      <Stack.Screen  name="Customer Feedback" component={CustomerFeedback} />
      <Stack.Screen  name="Noise Monitoring" component={NoiseMonitoring} />
      <Stack.Screen  name="Water Quality Monitoring" component={WaterQuality} />
      <Stack.Screen  name="AAQM Monitoring" component={AAQM} />
      <Stack.Screen  name="Emission Mnitoring" component={EMISSION} />


    </Stack.Navigator>
  );
};

export default StackNavigation;
