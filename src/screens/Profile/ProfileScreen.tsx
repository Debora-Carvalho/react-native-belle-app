import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../navigation/StackRoutes';
import { Ionicons, Feather } from "@expo/vector-icons";

import Header from '../../components/Header/Header';
import { styles } from './ProfileStyles';

type NavigationProps = NativeStackNavigationProp<StackParamList, 'EditarPerfil'>;

export default function ProfileScreen() {
    const navigation = useNavigation<NavigationProps>();

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

                    <Text style={styles.name}>Fernanda Lima</Text>
                    <Text style={styles.email}>fernanda.lima@gmail.com</Text>

                    <View style={styles.locationContainer}>
                        <View style={styles.icon}>
                            <Ionicons name="location-outline" size={20} color="#FFF" />
                        </View>
                        <View>
                            <Text style={styles.locationLabel}>
                                Endereço de entrega
                            </Text>
                            <Text style={styles.locationText}>
                                Rua das Flores Brancas, 123, Apto. 43B, Jardim Botânico, São Paulo - SP
                            </Text>
                        </View>
                    </View>

                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('EditarPerfil')}>
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

                        <TouchableOpacity style={[styles.optionButton, styles.logoutButton]}>
                            <View style={styles.optionLeft}>
                                <View style={styles.iconLogout}>
                                    <Ionicons name="log-out-outline" size={20} color="#FFF" />
                                </View>
                                <Text style={[styles.optionText, { color: '#FF6B6B' }]}>Logout</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#FF6B6B" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
