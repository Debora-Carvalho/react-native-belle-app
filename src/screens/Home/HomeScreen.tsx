import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { styles } from './HomeStyles';
import Header from '../../components/Header/Header';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import CardProduct from '../../components/CardProduct/CardProduct';
import { products } from '../../services/data/products.js';

import { Ionicons } from "@expo/vector-icons";

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

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.genre.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Header />

            <SearchBar value={search} onChangeText={setSearch} />

            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 10 }}
                contentContainerStyle={{ paddingBottom: 10 }}
                renderItem={({ item }) => (
                    <CardProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.coverImage}
                        favorite={item.favorite}
                    />
                )}
                ListEmptyComponent={
                    <View style={styles.containerNoResultsText}>
                        <Text style={styles.noResultsText}>Nenhum produto encontrado</Text>
                        <Ionicons name="sad-outline" size={22} color="#777" />
                    </View>
                }
            />
        </View>
    );
};
