import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Movies from './src/screens/Movies';
import Movie from './src/screens/Movie';
import MovieVideo from './src/screens/MovieVideo';

const Stack = createStackNavigator();
const {Navigator, Screen} = Stack;

const Navigation = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Movies" component={Movies} options={{headerShown: false}} />
      <Screen name="Movie" component={Movie} options={{headerShown: false}} />
      <Screen name="MovieVideo" component={MovieVideo} options={{headerShown: false}} />

    </Navigator>
  </NavigationContainer>
);

export default Navigation;