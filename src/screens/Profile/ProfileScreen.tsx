import React, { useState, useCallback } from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../navigation/StackRoutes';
import { Ionicons, Feather } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header/Header';
import { styles } from './ProfileStyles';

type NavigationProps = NativeStackNavigationProp<StackParamList, 'EditProfile'>;

export default function ProfileScreen() {
    const navigation = useNavigation<NavigationProps>();
    const [userData, setUserData] = useState<{ nome: string; email: string; endereco: string } | null>(null);

    // ✅ Atualiza dados sempre que a tela ganha foco
    useFocusEffect(
        useCallback(() => {
            const loadUserData = async () => {
                try {
                    const storedUser = await AsyncStorage.getItem('@user_data');
                    if (storedUser) {
                        const user = JSON.parse(storedUser);
                        setUserData(user);
                    }
                } catch (error) {
                    console.error('Erro ao carregar dados do usuário:', error);
                }
            };

            loadUserData();
        }, [])
    );

    // 🔹 Logout: limpa dados e volta para o login
    const handleLogout = async () => {
        await AsyncStorage.removeItem('@user_data');
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView style={{ width: "100%" }}>
                <View style={styles.containerContent}>
                    <View style={styles.profileContainer}>
                        <Image
                            source={require('../../assets/avatar-profile.jpg')}
                            style={styles.profileImage}
                        />
                        <TouchableOpacity style={styles.editButton}>
                            <Ionicons name="camera" size={18} color="#FFF" />
                        </TouchableOpacity>
                    </View>

                    {/* Nome e e-mail do usuário */}
                    <Text style={styles.name}>{userData?.nome || 'Carregando...'}</Text>
                    <Text style={styles.email}>{userData?.email || '---'}</Text>

                    {/* Endereço do usuário */}
                    <View style={styles.locationContainer}>
                        <View style={styles.icon}>
                            <Ionicons name="location-outline" size={20} color="#FFF" />
                        </View>
                        <View>
                            <Text style={styles.locationLabel}>
                                Endereço de entrega
                            </Text>
                            <Text style={styles.locationText}>
                                {userData?.endereco || 'Endereço ainda não cadastrado'}
                            </Text>
                        </View>
                    </View>

                    {/* Opções do perfil */}
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity
                            style={styles.optionButton}
                            onPress={() => navigation.navigate('EditProfile')}
                        >
                            <View style={styles.optionLeft}>
                                <View style={styles.icon}>
                                    <Feather name="edit" size={20} color="#FFF" />
                                </View>
                                <Text style={styles.optionText}>Editar perfil</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#555" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <View style={styles.optionLeft}>
                                <View style={styles.icon}>
                                    <Ionicons name="time-outline" size={20} color="#FFF" />
                                </View>
                                <Text style={styles.optionText}>Histórico de pedidos</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#555" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <View style={styles.optionLeft}>
                                <View style={styles.icon}>
                                    <Ionicons name="shapes-outline" size={20} color="#FFF" />
                                </View>
                                <Text style={styles.optionText}>Preferências</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#555" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.optionButton}>
                            <View style={styles.optionLeft}>
                                <View style={styles.icon}>
                                    <Ionicons name="notifications-outline" size={20} color="#FFF" />
                                </View>
                                <Text style={styles.optionText}>Configurações de notificação</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#555" />
                        </TouchableOpacity>

                        {/* Logout */}
                        <TouchableOpacity
                            style={[styles.optionButton, styles.logoutButton]}
                            onPress={handleLogout}
                        >
                            <View style={styles.optionLeft}>
                                <View style={styles.iconLogout}>
                                    <Ionicons name="log-out-outline" size={20} color="#FFF" />
                                </View>
                                <Text style={[styles.optionText, { color: '#FF6B6B' }]}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
