import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import Header from '../../components/Header/Header';
import { styles } from './ProfileStyles';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', width: "100%" }}>

                {/* Foto de perfil com botão de edição */}
                <View style={styles.profileContainer}>
                    <Image
                        source={require('../../assets/avatar-profile.jpg')}
                        style={styles.profileImage}
                    />
                    <TouchableOpacity style={styles.editButton}>
                        <Ionicons name="camera" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Nome e e-mail */}
                <Text style={styles.name}>Fernanda Lima</Text>
                <Text style={styles.email}>fernanda.lima@gmail.com</Text>

                {/* Localização */}
                <View style={styles.locationContainer}>
                    <Ionicons name="location-outline" size={18} color="#FA97B9" />
                    <Text style={styles.locationText}>
                        Rua das Flores Brancas, 123, Apto. 43B, Jardim Botânico, Rio de Janeiro-RJ
                    </Text>
                </View>

                {/* Opções */}
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.optionButton}>
                        <View style={styles.optionLeft}>
                            <Ionicons name="person-outline" size={20} color="#555" />
                            <Text style={styles.optionText}>Editar perfil</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <View style={styles.optionLeft}>
                            <Ionicons name="time-outline" size={20} color="#555" />
                            <Text style={styles.optionText}>Histórico de pedidos</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <View style={styles.optionLeft}>
                            <Ionicons name="heart-outline" size={20} color="#555" />
                            <Text style={styles.optionText}>Preferências</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionButton}>
                        <View style={styles.optionLeft}>
                            <Ionicons name="notifications-outline" size={20} color="#555" />
                            <Text style={styles.optionText}>Configurações de notificação</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#999" />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.optionButton, styles.logoutButton]}>
                        <View style={styles.optionLeft}>
                            <Ionicons name="log-out-outline" size={20} color="#FA97B9" />
                            <Text style={[styles.optionText, { color: '#FA97B9' }]}>Sair</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#FA97B9" />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};
