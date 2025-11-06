import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { styles } from "./HeaderStyles";

export default function Header() {
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons name="menu-outline" size={28} color="#FF1F6D" />
            </TouchableOpacity>

            <View style={styles.containerLocation}>
                <Text>Localização</Text>
                <View style={styles.locationText}>
                    <Ionicons name="location-outline" size={20} color="#FF1F6D" />
                    <Text style={styles.textState}>São Paulo, SP</Text>
                </View>
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