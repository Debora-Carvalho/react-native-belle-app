import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import ShoppingCartScreen from "../screens/ShoppingCart/ShoppingCartScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#FFFFFF",
                    borderTopColor: "#FA97B9",
                },
                tabBarActiveTintColor: "#FF1F6D",
                tabBarInactiveTintColor: "#FA97B9",
                tabBarLabelStyle: {
                    fontSize: 12,
                    paddingBottom: 3,
                },
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName = "";

                    if (route.name === "Início")
                        iconName = focused ? "home" : "home-outline";
                    else if (route.name === "Favoritos")
                        iconName = focused ? "heart" : "heart-outline";
                    else if (route.name === "Carrinho")
                        iconName = focused ? "cart" : "cart-outline";
                    else if (route.name === "Perfil")
                        iconName = focused ? "person" : "person-outline";

                    return (
                        <Icon
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
        >
            <Tab.Screen name="Início" component={HomeScreen} />
            <Tab.Screen name="Favoritos" component={FavoritesScreen} />
            <Tab.Screen name="Carrinho" component={ShoppingCartScreen} />
            <Tab.Screen name="Perfil" component={ProfileScreen} />
        </Tab.Navigator>
    );
};
