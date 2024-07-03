import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GroupScreen from './screens/GroupScreen';
import ChatScreen from './screens/ChatScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GroupScreen">
        <Stack.Screen 
          name="GroupScreen" 
          component={GroupScreen} 
          options={{ title: 'Groups' }}
        />
        <Stack.Screen 
          name="ChatScreen" 
          component={ChatScreen} 
          options={{ title: 'Chat' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
