import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import { styles } from './NotificationsStyles';

export default function NotificationsScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text>Notifications works</Text>
            </ScrollView>
        </View>
    );
};