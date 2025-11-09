import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { styles } from './EditarPerfilStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../navigation/StackRoutes';
import { DialogModal } from '../../components/DialogModal/DialogModal';

type NavigationProps = NativeStackNavigationProp<StackParamList, 'EditarPerfil'>;

export default function EditarPerfilScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // controle dos modais
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const navigation = useNavigation<NavigationProps>();

    const handleRegister = () => {
        // validação básica
        if (!nome || !email || !senha) {
            setShowErrorModal(true);
            return;
        }

        // simulação de cadastro bem-sucedido
        setShowSuccessModal(true);
    };

    return (
        <View style={styles.container}>
            {/* campo Nome */}
            <Text style={styles.label}>
                Nome completo
            </Text>
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

            {/* campo Email */}
            <Text style={styles.label}>
                E-mail
            </Text>
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

            {/* campo Endereço */}
            <Text style={styles.label}>
                Endereço para entrega
            </Text>
            <View style={styles.inputContainer}>
                <Ionicons name="location-outline" size={20} color="#FA97B9" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Seu endereço"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="default"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {/* campo Senha */}
            <Text style={styles.label}>
                Senha
            </Text>
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

            {/* botão de cadastro */}
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleRegister}>
                <Text style={styles.buttonText}>Salvar alterações</Text>
                <Ionicons name="checkmark-sharp" size={20} color="#F7EEDD" />
            </TouchableOpacity>

            {/* link para cancelar */}
            <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => navigation.navigate("Register")}
            >
                <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancelar</Text>
            </TouchableOpacity>

            {/* Modal de erro */}
            <DialogModal
                visible={showErrorModal}
                title="Campos incompletos"
                message="Preencha todos os campos para realizar a atualização de seu perfil."
                contentBtn="Ok, entendi!"
                onPressBtn={() => setShowErrorModal(false)}
                onClose={() => setShowErrorModal(false)}
            />

            {/* Modal de sucesso */}
            <DialogModal
                visible={showSuccessModal}
                title="Atualização confirmada!"
                message="As alterações nos dados de seu perfil foram salvas com sucesso."
                contentBtn="Ok, entendi!"
                onPressBtn={() => {
                    setShowSuccessModal(false);
                    navigation.navigate('Login');
                }}
                onClose={() => setShowSuccessModal(false)}
            />
        </View>
    );
};
