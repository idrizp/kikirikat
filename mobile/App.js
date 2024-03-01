import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import Taskbar from './screens/Taskbar';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='LogIn'
          component={LogIn}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Taskbar'
          component={Taskbar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Profle'
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;