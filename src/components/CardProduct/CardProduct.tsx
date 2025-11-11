import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import { styles } from "./CardProductStyles";

type CardProductProps = {
    id: number;
    title: string;
    image: string;
    price: number;
    favorite: boolean;
    genre: string;
    description: string;
    rating: number;
    items?: {
        id: number;
        name: string;
        author: string;
        icon: string;
        quantity: number;
        unitPrice: number;
    }[];
    onToggleFavorite?: (id: number) => void;
    onAddToCart?: (id: number) => void;
};

export default function CardProduct({
    id,
    title,
    image,
    price,
    favorite,
    genre,
    description,
    rating,
    items,
    onToggleFavorite,
    onAddToCart,
}: CardProductProps) {
    const [isFavorite, setIsFavorite] = useState(favorite);

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
        onToggleFavorite && onToggleFavorite(id);
    };

    const handleNavigateToDetails = () => {
        navigation.navigate("ProductDetails", {
            id,
            title,
            image,
            price,
            favorite: isFavorite,
            genre,
            description,
            rating,
            items,
        });
    };

    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.9}
            onPress={handleNavigateToDetails}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />

                <TouchableOpacity
                    style={styles.favoriteButton}
                    onPress={handleFavorite}
                    activeOpacity={0.8}
                >
                    <Icon
                        name={isFavorite ? "heart" : "heart-outline"}
                        size={22}
                        color={isFavorite ? "#FF1F6D" : "#FA97B9"}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>R$ {price.toFixed(2)}</Text>

                    <TouchableOpacity
                        onPress={() => onAddToCart && onAddToCart(id)}
                        activeOpacity={0.8}
                    >
                        <Icon name="cart-outline" size={22} color="#FA97B9" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};
