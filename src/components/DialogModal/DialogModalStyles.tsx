import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: '#F7EEDD',
        width: '85%',
        height: 235,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        padding: 24,
        gap: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
        textAlign: 'center',
    },
    text: {
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center',
        width: '100%',
        backgroundColor: "#FF1F6D",
        paddingVertical: 14,
        borderRadius: 25,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 600,
        color: '#F7EEDD'
    }
});