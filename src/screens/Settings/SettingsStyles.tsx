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
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: '#F7EEDD',
        marginBottom: 10,
    },
    optionText: {
        color: '#000',
        fontSize: 16,
        marginLeft: 15,
    },
});