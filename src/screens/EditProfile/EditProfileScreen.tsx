import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './EditProfileStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../navigation/StackRoutes';
import { DialogModal } from '../../components/DialogModal/DialogModal';

type NavigationProps = NativeStackNavigationProp<StackParamList, 'EditProfile'>;

export default function EditProfileScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const navigation = useNavigation<NavigationProps>();

    // 🔹 Carregar dados existentes ao abrir a tela
    useEffect(() => {
        const carregarDados = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('@user_data');
                if (storedUser) {
                    const user = JSON.parse(storedUser);
                    setNome(user.nome || '');
                    setEmail(user.email || '');
                    setSenha(user.senha || '');
                    setEndereco(user.endereco || '');
                }
            } catch (error) {
                console.error('Erro ao carregar dados do usuário:', error);
            }
        };
        carregarDados();
    }, []);

    // 🔹 Salvar alterações
    const handleSave = async () => {
        if (!nome || !email || !senha) {
            setShowErrorModal(true);
            return;
        }

        try {
            const updatedUser = {
                nome,
                email,
                senha,
                endereco,
            };

            await AsyncStorage.setItem('@user_data', JSON.stringify(updatedUser));

            setShowSuccessModal(true);
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            setShowErrorModal(true);
        }
    };

    return (
        <View style={styles.container}>
            {/* Nome */}
            <Text style={styles.label}>Nome completo</Text>
            <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color="#FA97B9" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nome completo"
                    placeholderTextColor="#A9A9A9"
                    value={nome}
                    onChangeText={setNome}
                />
            </View>

            {/* Email */}
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color="#FA97B9" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {/* Endereço */}
            <Text style={styles.label}>Endereço para entrega</Text>
            <View style={styles.inputContainer}>
                <Ionicons name="location-outline" size={20} color="#FA97B9" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Seu endereço"
                    placeholderTextColor="#A9A9A9"
                    value={endereco}
                    onChangeText={setEndereco}
                />
            </View>

            {/* Senha */}
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#FA97B9" style={styles.inputIcon} />
                <TextInput
                    style={[styles.input, { paddingRight: 35 }]}
                    placeholder="Senha"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry={!showPassword}
                    value={senha}
                    onChangeText={setSenha}
                />
                <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Ionicons
                        name={showPassword ? "eye-outline" : "eye-off-outline"}
                        size={20}
                        color="#FA97B9"
                    />
                </TouchableOpacity>
            </View>

            {/* Botão Salvar */}
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar alterações</Text>
                <Ionicons name="checkmark-sharp" size={20} color="#F7EEDD" />
            </TouchableOpacity>

            {/* Botão Cancelar */}
            <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => navigation.goBack()}
            >
                <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancelar</Text>
            </TouchableOpacity>

            {/* Modal de erro */}
            <DialogModal
                visible={showErrorModal}
                title="Campos incompletos"
                message="Preencha todos os campos para atualizar seu perfil."
                contentBtn="Ok, entendi!"
                onPressBtn={() => setShowErrorModal(false)}
                onClose={() => setShowErrorModal(false)}
            />

            {/* Modal de sucesso */}
            <DialogModal
                visible={showSuccessModal}
                title="Alterações salvas!"
                message="Os dados do seu perfil foram atualizados com sucesso."
                contentBtn="Ok, entendi!"
                onPressBtn={() => {
                    setShowSuccessModal(false);
                    navigation.goBack();
                }}
                onClose={() => setShowSuccessModal(false)}
            />
        </View>
    );
};
