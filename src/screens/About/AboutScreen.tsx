import React from 'react';
import { ImageBackground, View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import Header from '../../components/Header/Header';
import { styles } from './AboutStyles';

export default function AboutScreen() {
    const handleOpenURL = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <ImageBackground
            source={require("../../assets/background-about.jpg")}
            style={styles.container}
        >
            <Header />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.containerLogo}>
                    <Image
                        source={require("../../assets/logo-branca-belle.png")}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.card}>
                    <View style={styles.iconTitle}>
                        <Ionicons name="rose-outline" size={24} color="#FA97B9" />
                        <Text style={styles.subtitle}>Nossa História</Text>
                    </View>
                    <Text style={styles.text}>
                        A Belle Flores nasceu da paixão por transformar sentimentos em presentes. 
                        Desde o início, acreditamos que cada flor carrega uma mensagem única — 
                        seja amor, amizade ou gratidão. Começamos com um pequeno ateliê artesanal, 
                        e hoje somos reconhecidos por criar experiências que encantam corações 
                        e tornam momentos simples em memórias inesquecíveis.
                    </Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.iconTitle}>
                        <Ionicons name="heart-outline" size={24} color="#FA97B9" />
                        <Text style={styles.subtitle}>Nosso Propósito</Text>
                    </View>
                    <Text style={styles.text}>
                        Nosso propósito é espalhar beleza, delicadeza e amor por meio de flores e livros. 
                        Cada produto é pensado com cuidado, combinando estética e sentimento, 
                        para que você possa presentear alguém — ou a si mesmo — com algo verdadeiramente especial.
                    </Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.iconTitle}>
                        <Ionicons name="share-social-outline" size={24} color="#FA97B9" />
                        <Text style={styles.subtitle}>Conecte-se Conosco</Text>
                    </View>
                    <Text style={styles.text}>
                        Siga nossas redes sociais e acompanhe as novidades, promoções e lançamentos exclusivos da Belle Flores.
                    </Text>

                    <View style={styles.socialContainer}>
                        <TouchableOpacity onPress={() => handleOpenURL("https://instagram.com")}>
                            <Ionicons name="logo-instagram" size={28} color="#FA97B9" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOpenURL("https://facebook.com")}>
                            <Ionicons name="logo-facebook" size={28} color="#FA97B9" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOpenURL("https://wa.me/5599999999999")}>
                            <Ionicons name="logo-whatsapp" size={28} color="#FA97B9" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};
