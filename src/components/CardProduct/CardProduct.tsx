import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./CardProductStyles";

type CardProductProps = {
    id: number;
    title: string;
    image: string;
    price: number;
    favorite: boolean;
    onToggleFavorite?: (id: number) => void;
    onAddToCart?: (id: number) => void;
};

export default function CardProduct({
    id,
    title,
    image,
    price,
    favorite,
    onToggleFavorite,
    onAddToCart,
}: CardProductProps) {
    const [isFavorite, setIsFavorite] = useState(favorite);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
        onToggleFavorite && onToggleFavorite(id);
    };

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />

                <TouchableOpacity style={styles.favoriteButton} onPress={handleFavorite}>
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

                    <TouchableOpacity onPress={() => onAddToCart && onAddToCart(id)}>
                        <Icon name="cart-outline" size={22} color="#FA97B9" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
