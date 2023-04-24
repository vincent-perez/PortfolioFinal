// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeadliftScreen from './screens/DeadliftScreen';
import BenchPressScreen from './screens/BenchPressScreen';
import SquatScreen from './screens/SquatScreen';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Deadlift" component={DeadliftScreen} />
        <Tab.Screen name="Bench Press" component={BenchPressScreen} />
        <Tab.Screen name="Squat" component={SquatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;