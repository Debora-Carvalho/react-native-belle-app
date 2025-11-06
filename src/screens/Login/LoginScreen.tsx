import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { styles } from './LoginStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackRoutes';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation<NavigationProps>();

    const handleLogin = () => {
        if (!email || !senha) {
            alert("Preencha todos os campos para continuar!");
        return;
    }};

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
                <Text style={styles.title}>Bem-vindo(a) de volta!</Text>
                <Text style={styles.subtitle}>
                    Presenteie para criar momentos inesquecíveis
                </Text>

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

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                    <Ionicons name="arrow-forward-outline" size={20} color="#F7EEDD" />
                </TouchableOpacity>

                {/* link para a página de cadastro */}
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Register')}>
                    <Text style={{ marginTop: 10, textAlign: 'center' }}>
                        Ainda não tem uma conta? <Text style={{  color: '#FA97B9', fontWeight: '800' }}>Cadastre-se aqui</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
