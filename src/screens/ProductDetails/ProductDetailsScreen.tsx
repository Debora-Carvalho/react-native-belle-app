import React, { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { styles } from "./ProductDetailsStyles";

type ProductDetailsRouteParams = {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number;
    favorite: boolean;
    genre: string;
    description: string;
    items?: {
        id: number;
        name: string;
        author?: string;
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
        rating,
        genre,
        description,
        items = [],
    } = route.params as ProductDetailsRouteParams;

    const [kitItems, setKitItems] = useState(items);
    const [selectedChocolate, setSelectedChocolate] = useState<string>("none");

    const genreIconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
        Romance: "heart-outline",
        Magia: "sparkles-outline",
        Drama: "book-outline",
        Terror: "skull-outline",
        Comédia: "happy-outline",
        Suspense: "footsteps-outline",
    };

    const iconName = genre && genreIconMap[genre] ? genreIconMap[genre] : "book-outline";

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
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.containerPriceGenre}>
                    <View style={styles.tagGenre}>
                        <Ionicons name={iconName} size={30} color="#FFF" />
                        <Text style={styles.genre}>{genre}</Text>
                    </View>

                    <View style={styles.tagPrice}>
                        <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.title}>{title}</Text>

                        <View style={styles.ratingRow}>
                            <Ionicons name="star-outline" size={20} color="#FFF" />
                            <Text style={styles.rating}>{rating} / 5</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Descrição</Text>
                    <Text style={styles.description}>{description}</Text>

                    <Text style={styles.sectionTitle}>Itens do Kit</Text>

                    {kitItems.map((item) => (
                        <View key={item.id} style={styles.itemContainer}>
                            <View style={styles.itemInfo}>
                                <Image source={{ uri: item.icon }} style={styles.itemIcon} />
                                <View style={styles.itemTextWrapper}>
                                    <Text style={styles.itemName} numberOfLines={2} ellipsizeMode="tail">
                                        {item.name}
                                    </Text>

                                    {item.author ? (
                                        <Text style={styles.itemAuthor}>{item.author}</Text>
                                    ) : null}

                                    <Text style={styles.itemPrice}>
                                        R$ {(item.unitPrice * item.quantity).toFixed(2)} ({item.quantity}x R$ {item.unitPrice.toFixed(2)})
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

                    <Text style={styles.sectionTitle}>Adicionar Chocolates</Text>

                    <View style={styles.pickerContainer}>
                        <MaterialCommunityIcons name="gift-outline" size={24} color="#FF1F6D" style={{ marginRight: 8 }} />
                        <Picker
                            selectedValue={selectedChocolate}
                            style={styles.picker}
                            onValueChange={(itemValue) => setSelectedChocolate(itemValue)}
                        >
                            <Picker.Item label="Não adicionar" value="none" />
                            <Picker.Item label="🍫 Caixa de chocolate meio amargo (R$ 15,00)" value="meio_amargo" />
                            <Picker.Item label="🍫 Caixa de chocolate branco (R$ 15,00)" value="branco" />
                            <Picker.Item label="🍫 Caixa de chocolate ao leite (R$ 15,00)" value="ao_leite" />
                            <Picker.Item label="🍫 Caixa de chocolate zero lactose (R$ 18,00)" value="zero_lactose" />
                            <Picker.Item label="🍫 Caixa de bombons sortidos (R$ 20,00)" value="sortidos" />
                        </Picker>
                    </View>
                </View>
            </ScrollView>

            {/* botão ara adicionar ao carrinho */}
            <TouchableOpacity style={styles.addButton}>
                <Ionicons name="cart-outline" size={22} color="#FFF" />
                <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};
