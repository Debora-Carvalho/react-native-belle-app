import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { styles } from './HomeStyles';

import Icon from "react-native-vector-icons/Ionicons";

import Header from '../../components/Header/Header';

type TabParamList = {
    "Início": undefined;
    Favoritos: undefined;
    Carrinho: undefined;
    Perfil: undefined;
};

type NavigationProps = BottomTabNavigationProp<TabParamList, "Início">;

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView
                style={{ flex: 1, width: '100%' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                <Text>home works</Text>
            </ScrollView>
        </View>
    );
};