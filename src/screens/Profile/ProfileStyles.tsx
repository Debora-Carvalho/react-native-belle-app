import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 40,
    },
    profileContainer: {
        position: 'relative',
        marginBottom: 15,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    editButton: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: '#FA97B9',
        borderRadius: 20,
        padding: 6,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    email: {
        fontSize: 16,
        color: '#777',
        marginBottom: 15,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal: 40,
        gap: 5,
        marginBottom: 25,
    },
    locationText: {
        flex: 1,
        color: '#555',
        fontSize: 14,
        lineHeight: 18,
    },
    optionsContainer: {
        width: '100%',
        marginTop: 10,
    },
    optionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        marginTop: 10,
    },
});
