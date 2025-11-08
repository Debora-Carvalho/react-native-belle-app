import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import { styles } from './ShoppingCartStyles';

export default function ShoppingCartScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text>Meu carrinho</Text>
            </ScrollView>
        </View>
    );
};