import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        width: 160,
        margin: 10,
        overflow: "hidden",
    },

    imageContainer: {
        position: "relative",
    },

    image: {
        width: "100%",
        height: 238,
        borderRadius: 15,
    },

    favoriteButton: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "#FFF",
        borderRadius: 20,
        padding: 5,
        elevation: 3,
    },

    infoContainer: {
        paddingHorizontal: 10,
        paddingVertical: 8,
    },

    title: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginBottom: 4,
    },

    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    price: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FA97B9",
    },
});
