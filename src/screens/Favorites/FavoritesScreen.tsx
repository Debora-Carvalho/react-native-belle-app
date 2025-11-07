import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "../Favorites/FavoritesStyles";
import Header from "../../components/Header/Header";
import { SearchBar } from '../../components/SearchBar/SearchBar';
import CardProduct from "../../components/CardProduct/CardProduct";
import { products } from "../../services/data/products.js";

export default function FavoritesScreen() {
    const [search, setSearch] = useState("");
    const favoriteProducts = products.filter((item) => item.favorite);

    return (
        <View style={styles.container}>
            <Header />
            
            <SearchBar value={search} onChangeText={setSearch} />

            <FlatList
                data={favoriteProducts}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                }}
                contentContainerStyle={{ paddingBottom: 20 }}
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
                        <Text style={styles.noResultsText}>
                            Você ainda não favoritou nenhum produto.
                        </Text>
                        <Ionicons name="heart-dislike-outline" size={22} color="#777" />
                    </View>
                }
            />
        </View>
    );
};
