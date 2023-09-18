import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Source/Screen/Dashboard'
const Stack = createNativeStackNavigator();

//Wrap store
import store from './Source/Redux/Store/Store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ title: 'Dashboard' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};

export default App;