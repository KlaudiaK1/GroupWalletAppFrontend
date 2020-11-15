import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './pages/authorization/login/LoginScreen';
import RegistrationScreen from './pages/authorization/registration/RegistrationScreen';

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AppRouter;
