import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import CoursesScreen from "../screens/Courses/CoursesScreen";
import TasksScreen from "../screens/Tasks/TasksScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#0b0c2a",
                    borderTopColor: "#1c1d44",
                },
                tabBarActiveTintColor: "#6C63FF",
                tabBarInactiveTintColor: "#9fa0c5",
                tabBarIcon: ({ color, size }) => {
                    let iconName = "";

                    if (route.name === "Início") iconName = "home-outline";
                    else if (route.name === "Cursos") iconName = "book-outline";
                    else if (route.name === "Atividades") iconName = "rocket-outline";
                    else if (route.name === "Perfil") iconName = "person-outline";

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Início" component={HomeScreen} />
            <Tab.Screen name="Cursos" component={CoursesScreen} />
            <Tab.Screen name="Atividades" component={TasksScreen} />
            <Tab.Screen name="Perfil" component={ProfileScreen} />
        </Tab.Navigator>
    );
};
