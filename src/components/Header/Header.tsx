import React from "react";
import { View, Image, TouchableOpacity, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { styles } from "./HeaderStyles";

export default function Header() {
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/img/avatar-profile.jpg")}
                style={styles.profileImage}
            />

            <Image
                source={require("../../assets/img/logo-orion-branca.png")}
                style={styles.logo}
            />

            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Icon name="menu-outline" size={28} color="#fff" />
            </TouchableOpacity>

            <StatusBar   
                barStyle="light-content" 
                backgroundColor="#0b0c2a" 
                translucent={false}
            />
        </View>
    );
}