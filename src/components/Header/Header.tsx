import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { styles } from "./HeaderStyles";

export default function Header() {
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Icon name="menu-outline" size={28} color="#FF1F6D" />
            </TouchableOpacity>

            <View>
                <Text>Localização</Text>
            </View>

            <Image
                source={require("../../assets/avatar-profile.jpg")}
                style={styles.profileImage}
            />

            <StatusBar   
                barStyle="default" 
            />
        </View>
    );
}