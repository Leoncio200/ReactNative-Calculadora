import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './scr/components/Main';
import Euler from './scr/components/EulerPage';
import Runge from './scr/components/RungePage';
import Newton from './scr/components/NewtonPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Euler" component={Euler} />
          <Stack.Screen name='Runge-Kutta' component={Runge} />
          <Stack.Screen name='Newton-Raphson' component={Newton} />
        </Stack.Navigator>
      </NavigationContainer>
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
