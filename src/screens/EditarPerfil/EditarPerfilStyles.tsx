import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7EEDD",
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 40,
        borderRadius: 40,
    },
    containerButton: {
        alignItems: 'center',
        justifyContent: "center",
        width: "100%",
        marginBottom: 20,
        gap: 10,
    },
    label: {
        fontSize: 14,
        color: "#000",
        textAlign: 'left',
        marginBottom: 10,
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center',
        width: '100%',
        backgroundColor: "#FF1F6D",
        paddingVertical: 14,
        marginVertical: 5,
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#F7EEDD",
        marginRight: 10,
    },
    eyeButton: {
        position: 'absolute',
        right: 20,
    },
    saveButton: {
        marginTop: 40,
    },
    cancelButton: {
        backgroundColor: "transparent",
        borderColor: "#FF1F6D",
        borderWidth: 1,
    },
    cancelButtonText: {
        color: "#FF1F6D",
    },   
});
