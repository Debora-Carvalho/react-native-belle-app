import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import { styles } from './AboutStyles';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerLogo}>
                    <Icon name="planet-outline" size={120} color="#6C63FF" />

                    <Image
                        source={require("../../assets/img/logo-orion-branca.png")}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.subtitle}>O que é o Orion?</Text>
                    <Text style={styles.text}>
                        O Orion é um aplicativo educacional interativo voltado para o aprendizado
                        da astronomia e exploração espacial. Nosso objetivo é proporcionar
                        conhecimento de maneira prática, divertida e gamificada, ajudando
                        os usuários a expandirem seus horizontes.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.subtitle}>Funcionalidades</Text>
                    <Text style={styles.text}>
                        • Cursos completos de astronomia, desde conceitos básicos até conteúdos avançados.{"\n"}
                        • Atividades e desafios para testar seu conhecimento.{"\n"}
                        • Sistema de pontuação (XP) e streak de dias de acesso para manter a motivação.{"\n"}
                        • Perfis personalizados e métricas do progresso do usuário.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.subtitle}>Nossa missão</Text>
                    <Text style={styles.text}>
                        Tornar o aprendizado da astronomia acessível, interativo e inspirador,
                        incentivando a curiosidade científica e a exploração do universo.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};
