import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './pages/authorization/login/LoginScreen';

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AppRouter;
