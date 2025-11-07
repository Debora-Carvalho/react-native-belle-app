import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { styles } from './HomeStyles';

import Header from '../../components/Header/Header';
import { SearchBar } from '../../components/SearchBar/SearchBar';

type TabParamList = {
    "Início": undefined;
    Favoritos: undefined;
    Carrinho: undefined;
    Perfil: undefined;
};

type NavigationProps = BottomTabNavigationProp<TabParamList, "Início">;

export default function HomeScreen() {
    const [search, setSearch] = useState("");

    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView
                style={{ flex: 1, width: '100%' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                <SearchBar value={search} onChangeText={setSearch} />
            </ScrollView>
        </View>
    );
};