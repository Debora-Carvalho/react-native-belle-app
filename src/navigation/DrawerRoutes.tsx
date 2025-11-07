import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "./TabRoutes";
import ShoppingCartScreen from "../screens/ShoppingCart/ShoppingCartScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import AboutScreen from "../screens/About/AboutScreen";

import Icon from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName="Início"
            screenOptions={{
                headerShown: false,
                drawerPosition: "left",
                drawerStyle: {
                backgroundColor: "#FFFFFF", 
                width: 240,
                },
                drawerActiveTintColor: "#FF1F6D",
                drawerInactiveTintColor: "#FA97B9",
                drawerLabelStyle: {
                fontSize: 16,
                },
                drawerItemStyle: {
                borderBottomWidth: 1,
                borderBottomColor: "#F7EEDD",
                },
            }}
        >
            <Drawer.Screen
                name="Início"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Perfil"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="person-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Pedidos"
                component={ShoppingCartScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="cart-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Favoritos"
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="heart-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Configurações"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="settings-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Sobre"
                component={AboutScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="flower-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
