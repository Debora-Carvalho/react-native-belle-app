import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent",
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#FF1F6D",
    },
    logo: {
        width: '25%',
        height: 20,
    },
    containerLocation: {
        alignItems: "center",
    },
    locationText: {
        display: "flex",
        flexDirection: "row",
        color: "#FF1F6D",
        gap: 10,
    },
    textState: {
        fontSize: 18,
        fontWeight: 600,
        color: "#FF1F6D",
    },
});