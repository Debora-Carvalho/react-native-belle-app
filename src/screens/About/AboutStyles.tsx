import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: "#0b0c2a",
    },
    containerLogo: {
        alignItems: "center",
    },
    logo: {
        justifyContent: "center",
        width: '70%',
        height: 50,
        marginVertical: 20,
    },
    card: {
        backgroundColor: '#1c1d44',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 20,
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6C63FF',
        marginBottom: 8,
    },
    text: {
        padding: 20,
        fontSize: 14,
        color: '#fff',
        textAlign: "justify",
        lineHeight: 20,
    },
});