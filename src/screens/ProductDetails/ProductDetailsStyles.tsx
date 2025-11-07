import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: height * 0.45,
    },
    scrollContainer: {
        marginTop: height * 0.35,
        backgroundColor: "#FFF",
        borderRadius: 20,
    },
    content: {
        padding: 20,
    },
    genre: {
        color: "#FF1F6D",
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333",
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FF1F6D",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    ratingRow: {
        flexDirection: "row",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 6,
        color: "#333",
    },
    description: {
        fontSize: 15,
        color: "#555",
        lineHeight: 22,
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
    },
    itemInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    itemIcon: {
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    itemName: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#333",
    },
    itemPrice: {
        fontSize: 13,
        color: "#777",
    },
    itemButtons: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantityButton: {
        backgroundColor: "#FF1F6D",
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    quantityText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    quantityValue: {
        marginHorizontal: 8,
        fontWeight: "bold",
        fontSize: 16,
    },
    addButton: {
        position: "absolute",
        bottom: 60,
        left: 20,
        right: 20,
        backgroundColor: "#FF1F6D",
        borderRadius: 14,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 14,
        gap: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    addButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});
