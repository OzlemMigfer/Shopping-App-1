import React from "react";
import {Text, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from "./pages/Products";
import Detail from "./pages/Detail";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ProductsPage" 
          component={Products}
          options={{ 
            title:'DÜKAN',
            headerStyle:{backgroundColor:'#3e3e5b'},
            headerTitleStyle:{color:'#d1d1e0'}
           }}
        />
        <Stack.Screen 
          name="DetailPage" 
          component={Detail}
          options={{ 
            title:'DETAY',
            headerStyle:{backgroundColor:'#3e3e5b'},
            headerTitleStyle:{color:'#d1d1e0'},
            headerTintColor:'#d1d1e0'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;