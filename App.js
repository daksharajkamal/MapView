import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MapScreen from "./screens/MapScreen";
import Destination from "./screens/Destination";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="DestinationScreen" component={Destination} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
