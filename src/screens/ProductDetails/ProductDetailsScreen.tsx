import React, { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { styles } from "./ProductDetailsStyles";

type ProductDetailsRouteParams = {
    id: number;
    title: string;
    image: string;
    price: number;
    favorite: boolean;
    genre?: string;
    description?: string;
    items?: {
        id: number;
        name: string;
        icon: string;
        quantity: number;
        unitPrice: number;
    }[];
};

export default function ProductDetailsScreen() {
    const route = useRoute();
    const {
        id,
        title,
        image,
        price,
        genre = "Categoria não especificada",
        description = "Sem descrição disponível.",
        items = [],
    } = route.params as ProductDetailsRouteParams;

    const [kitItems, setKitItems] = useState(items);

    const handleQuantityChange = (itemId: number, delta: number) => {
        setKitItems((prev) =>
            prev.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    return (
        <ImageBackground source={{ uri: image }} style={styles.container}>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.content}>
                    <Text style={styles.genre}>{genre}</Text>
                    <Text style={styles.title}>{title}</Text>

                    <View style={styles.rowBetween}>
                        <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
                        <View style={styles.ratingRow}>
                            <Ionicons name="star" size={20} color="#FFD700" />
                            <Ionicons name="star" size={20} color="#96958eff" />
                            <Ionicons name="star" size={20} color="#FFD700" />
                            <Ionicons name="star-half" size={20} color="#FFD700" />
                            <Ionicons name="star-outline" size={20} color="#FFD700" />
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Descrição</Text>
                    <Text style={styles.description}>{description}</Text>

                    <Text style={styles.sectionTitle}>Itens do Kit</Text>
                    {kitItems.map((item) => (
                        <View key={item.id} style={styles.itemContainer}>
                            <View style={styles.itemInfo}>
                                <Image source={{ uri: item.icon }} style={styles.itemIcon} />
                                <View>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemPrice}>
                                        R$ {(item.unitPrice * item.quantity).toFixed(2)} (
                                        {item.quantity}x R$ {item.unitPrice.toFixed(2)})
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.itemButtons}>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => handleQuantityChange(item.id, -1)}
                                >
                                    <Text style={styles.quantityText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityValue}>{item.quantity}</Text>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => handleQuantityChange(item.id, 1)}
                                >
                                    <Text style={styles.quantityText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Botão inferior */}
            <TouchableOpacity style={styles.addButton}>
                <Ionicons name="cart-outline" size={22} color="#FFF" />
                <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};
