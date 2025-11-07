import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { styles } from './ProductDetailsStyles';

export default function ProductDetailsScreen() {
    const handleOpenURL = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <Text>Meu produto</Text>
        </View>
    );
};
