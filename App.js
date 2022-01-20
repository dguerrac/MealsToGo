import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'; // to control, to style statusBar on devices
import { ThemeProvider } from 'styled-components/native';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { RestaurantsScreen } from './src/features/restaurants/screens/RestaurantsScreen';
import { SafeArea } from './src/components/utility/SafeArea';

import { theme } from './src/infrastructure/theme';

const TAP_ICONS = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

function MapScreen() {
  return (
    <SafeArea>
      <Text>MAP!</Text>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const handleScreenOptions = ({ route }) => {
    const iconName = TAP_ICONS[route.name];
    return {
      // You can return any component that you like here!
      tabBarIcon: ({ color, size }) => <MaterialIcons name={iconName} size={size} color={color} />,
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    };
  };

  let test;

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={handleScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
