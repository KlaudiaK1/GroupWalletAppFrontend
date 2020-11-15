import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import AppRouter from './AppRouter';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </NavigationContainer>
  );
};
export default App;
