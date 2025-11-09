import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingVertical: 40,
        backgroundColor: "#FFFFFF",
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FA97B9',
        textAlign: 'left',
        paddingHorizontal: 10,
        marginVertical: 20,
    },
    section: {
        paddingHorizontal: 10,
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FA97B9',
        marginBottom: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "#ffd1e1ff",
        marginBottom: 10,
    },
    optionLogout: {
        backgroundColor: "#ffbabaff",
    },
    optionText: {
        color: '#000',
        fontSize: 16,
        marginLeft: 15,
    },
    icon: {
        backgroundColor: "#FA97B9",
        borderRadius: 20,
        padding: 15,
    },
    iconLogout: {
        backgroundColor: "#FF6B6B",
        borderRadius: 20,
        padding: 15,
    },
});