import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { styles } from './RegisterStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackRoutes';
import { DialogModal } from '../../components/DialogModal/DialogModal'; // ajuste o caminho

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Register'>;

export default function RegisterScreen() {
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
        <ImageBackground
            source={require("../../assets/background-welcome.jpg")}
            style={styles.background}
        >
            <View style={styles.containerLogo}>
                <Image
                    source={require("../../assets/logo-branca-belle.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>Comece agora</Text>
                <Text style={styles.subtitle}>
                    Preencha os campos abaixo para criar sua conta no Belle Flores
                </Text>

                {/* campo Nome */}
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

                {/* campo Senha */}
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
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Criar conta</Text>
                    <Ionicons name="arrow-forward-outline" size={20} color="#F7EEDD" />
                </TouchableOpacity>

                {/* link para login */}
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ marginTop: 10, textAlign: 'center' }}>
                        Já tem uma conta? <Text style={{ color: '#FA97B9', fontWeight: '800' }}>Ir para Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Modal de erro */}
            <DialogModal
                visible={showErrorModal}
                title="Campos incompletos"
                message="Preencha todos os campos para realizar o cadastro."
                contentBtn="Ok, entendi!"
                onPressBtn={() => setShowErrorModal(false)}
                onClose={() => setShowErrorModal(false)}
            />

            {/* Modal de sucesso */}
            <DialogModal
                visible={showSuccessModal}
                title="Cadastro realizado!"
                message="Sua conta foi criada com sucesso. Faça login para continuar."
                contentBtn="Ir para Login"
                onPressBtn={() => {
                    setShowSuccessModal(false);
                    navigation.navigate('Login');
                }}
                onClose={() => setShowSuccessModal(false)}
            />
        </ImageBackground>
    );
}
