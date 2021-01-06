import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './pages/authorization/login/LoginScreen';
import RegistrationScreen from './pages/authorization/registration/RegistrationScreen';
import HomeScreen from './pages/home/HomeScreen';
import {theme} from '@styles/theme';
import CreateGroupScreen from './pages/create-group/CreateGroupScreen';
import GroupDetailsScreen from './pages/group-details/GroupDetailsScreen';

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Your groups',
          headerLeft: () => null,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            color: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="AddGroup"
        component={CreateGroupScreen}
        options={{
          title: 'Create group',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.white,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            color: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="GroupDetails"
        component={GroupDetailsScreen}
        options={{
          title: 'Group Details',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.white,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTitleStyle: {
            color: theme.colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
