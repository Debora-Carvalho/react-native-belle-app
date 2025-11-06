import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, StatusBar } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackRoutes";

import { styles } from "./WelcomeStyles";

import { Ionicons } from "@expo/vector-icons";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Welcome">;

export default function WelcomeScreen() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <ImageBackground
            source={require("../../assets/background-welcome.jpg")}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image
                        source={require("../../assets/logo-branca-belle.png")}
                        style={styles.logo}
                    />
                </View>


                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={[styles.button, styles.loginButton]}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={[styles.buttonText, styles.loginButtonText]}>Faça login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.registerButton]}
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text style={[styles.buttonText, styles.registerButtonText]}>Crie uma conta</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar   
                barStyle="light-content" 
            />
        </ImageBackground>
    );
}