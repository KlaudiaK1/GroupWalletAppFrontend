import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './pages/authorization/login/LoginScreen';
import RegisterScreen from './pages/authorization/register/RegisterScreen';
import HomeScreen from './pages/home/HomeScreen';
import {theme} from '@styles/theme';
import CreateGroupScreen from './pages/create-group/CreateGroupScreen';
import GroupDetailsScreen from './pages/group-details/GroupDetailsScreen';
import AddUserScreen from './pages/add-friend/AddUserScreen';
import AddDebtScreen from './pages/add-debt/AddDebtScreen';

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
        component={RegisterScreen}
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
      <Stack.Screen
        name="AddUser"
        component={AddUserScreen}
        options={{
          title: 'Add User',
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
        name="AddDebt"
        component={AddDebtScreen}
        options={{
          title: 'Add Debt',
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
