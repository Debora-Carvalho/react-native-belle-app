import React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from '../../components/Header/Header';
import { styles } from './FavoritesStyles';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export default function FavoritesScreen() {
    const [search, setSearch] = useState("");

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