import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerRoutes from "./DrawerRoutes";

import WelcomeScreen from "../screens/Welcome/WelcomeScreen";

export type RootStackParamList = {
  Welcome: undefined;
  Drawer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Drawer" component={DrawerRoutes} />
    </Stack.Navigator>
  );
}

