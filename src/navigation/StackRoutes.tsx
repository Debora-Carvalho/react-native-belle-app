import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerRoutes from "./DrawerRoutes";

import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import ProductDetailsScreen from "../screens/ProductDetails/ProductDetailsScreen";

export type RootStackParamList = {
    Welcome: undefined;
    Drawer: undefined;
    Login: undefined;
    Register: undefined;
    ProductDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={DrawerRoutes} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{
                title: "Detalhes",
                headerStyle: { backgroundColor: "#FFF" },
                headerTintColor: "#FF1F6D",
                headerTitleStyle: { fontWeight: "bold" },
            }} />
        </Stack.Navigator>
    );
}

