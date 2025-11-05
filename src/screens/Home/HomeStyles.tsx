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
    bannerContainer: {
        width: '100%',
        height: 200,
        overflow: 'hidden',
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 20,
    },

    bannerImage: {
        borderRadius: 30,
        resizeMode: 'cover',
    },
    bannerContainerItems: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    greetingText: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "600",
        marginBottom: 8,
    },

    subtitle: {
        color: "#e0e0ff",
        fontSize: 16,
        marginBottom: 25,
    },

    exploreButton: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#6C63FF",
        borderRadius: 25,
        paddingVertical: 12,
        alignSelf: "flex-start",
        paddingHorizontal: 20,
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 8,
    },

    section: {
        marginVertical: 20,
    },

    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
});