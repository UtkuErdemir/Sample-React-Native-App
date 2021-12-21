import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigatior></MainStackNavigatior>
    </NavigationContainer>
  );
}

const MainStackNavigatior = () => (
  <Stack.Navigator    
    screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen  name="Home" component={Home} />
    <Stack.Screen  name="Posts" component={Posts} />
  </Stack.Navigator>
);
