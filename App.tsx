
import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
// import { SheetProvider } from "react-native-actions-sheet";

import { Colors, View } from 'react-native-ui-lib';
import { NavigationContainer } from '@react-navigation/native';

import { initTheme } from './src/theme';
import { MainBottomTabNavigator } from './src/screens/navigation';


initTheme();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SheetProvider>
      <View flex style={{ backgroundColor: Colors.surface }} useSafeArea>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.surface}
        />
        <NavigationContainer>
          <MainBottomTabNavigator />

        </NavigationContainer>
      </View>
    // </SheetProvider>
  );
}

export default App;
