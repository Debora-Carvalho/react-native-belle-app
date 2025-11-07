import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingVertical: 4,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#FA97B9",
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    iconSearch: {
        marginRight: 8,
    },
    input: {
        width: "73%",
        fontSize: 16,
        color: "#333",
    },
    filterBtn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7EEDD",        
        padding: 12,
        borderRadius: 15,
    }
});
