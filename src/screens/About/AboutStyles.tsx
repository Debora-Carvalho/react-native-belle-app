import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    containerLogo: {
        alignItems: "center",
    },
    logo: {
        justifyContent: "center",
        width: '70%',
        height: 150,
        marginVertical: 20,
        resizeMode: "contain",
    },
    card: {
        backgroundColor: '#F7EEDD',
        borderRadius: 20,
        padding: 30,
        marginHorizontal: 10,
        marginBottom: 15,
        width: 350,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    iconTitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FA97B9',
    },
    text: {
        fontSize: 14,
        color: '#000',
        textAlign: "justify",
        lineHeight: 20,
        marginTop: 5,
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
    },
});
