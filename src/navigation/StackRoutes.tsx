import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import ProductDetailsScreen from "../screens/ProductDetails/ProductDetailsScreen";

import DrawerRoutes from "./DrawerRoutes";

export type StackParamList = {
    Welcome: undefined;
    Drawer: undefined;
    Home: undefined;
    Login: undefined;
    Register: undefined;
    Favorites: undefined;
    ProductDetails: {
        id: number;
        title: string;
        image: string;
        price: number;
        favorite: boolean;
    };
};

const Stack = createStackNavigator<StackParamList>();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={DrawerRoutes} options={{ headerShown: false }} />
            <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                    title: "Detalhes",
                    headerStyle: { backgroundColor: "#FFF" },
                    headerTintColor: "#FF1F6D",
                    headerTitleStyle: { fontWeight: "bold" },
                }}
            />
        </Stack.Navigator>
    );
};
