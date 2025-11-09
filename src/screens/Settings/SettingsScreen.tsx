import React from "react";
import { TouchableOpacity, ScrollView, View, Text } from "react-native";

import { styles } from "./SettingsStyles"
import Header from "../../components/Header/Header";

import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={{width: "90%"}}>
                <Text style={styles.title}>Configurações</Text>

                {/* conta */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Conta</Text>
                    <TouchableOpacity style={styles.option}>
                        <View style={styles.icon}>
                            <Icon name="key-outline" size={22} color="#FFF" />
                        </View>
                        <Text style={styles.optionText}>Alterar senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                            <View style={styles.icon}>
                                <Icon name="mail-outline" size={22} color="#FFF" />
                            </View>
                        <Text style={styles.optionText}>E-mail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.option, styles.optionLogout]}>
                        <View style={styles.iconLogout}>
                            <Icon name="log-out-outline" size={22} color="#FFF" />
                        </View>
                        <Text style={[styles.optionText, { color: '#FF6B6B' }]}>Logout</Text>
                    </TouchableOpacity>
                </View>

                {/* notificações */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Notificações</Text>
                    <TouchableOpacity style={styles.option}>
                        <View style={styles.icon}>
                            <Icon name="notifications-outline" size={22} color="#FFF" />
                        </View>
                        <Text style={styles.optionText}>Ativar/Desativar notificações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <View style={styles.icon}>
                            <Icon name="alarm-outline" size={22} color="#FFF" />
                        </View>
                        <Text style={styles.optionText}>Lembretes de atividades</Text>
                    </TouchableOpacity>
                </View>

                {/* preferências */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Preferências</Text>
                    <TouchableOpacity style={styles.option}>
                        <View style={styles.icon}>
                            <Icon name="color-palette-outline" size={22} color="#FFF" />
                        </View>
                        <Text style={styles.optionText}>Tema (Claro/Escuro)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <View style={styles.icon}>
                            <Icon name="language-outline" size={22} color="#FFF" />
                        </View>
                        <Text style={styles.optionText}>Idioma</Text>
                    </TouchableOpacity>
                </View>

                {/* sobre */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sobre o aplicativo</Text>
                    <TouchableOpacity style={styles.option}>
                        <View style={styles.icon}>
                            <Icon name="document-text-outline" size={22} color="#FFF" />
                        </View>
                        <Text style={styles.optionText}>Termos de uso</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <View style={styles.icon}>
                            <Icon name="shield-checkmark-outline" size={22} color="#FFF" />
                        </View>
                        <Text style={styles.optionText}>Política de privacidade</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

