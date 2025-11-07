import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./SearchBarStyles";

type SearchBarProps = {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
};

export function SearchBar({
    value,
    onChangeText,
    placeholder = "Buscar por livros ou flores...",
}: SearchBarProps) {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Ionicons name="search-outline" size={24} color="#FA97B9" style={styles.iconSearch} />
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#A9A9A9"
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>

            <View style={styles.filterBtn}>
                <Ionicons name="funnel-outline" size={24} color="#FF1F6D" />               
            </View>
        </View>
    );
}
