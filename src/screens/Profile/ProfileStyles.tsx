import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 40,
    },
    containerContent: {
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    profileContainer: {
        position: 'relative',
        marginVertical: 15,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderColor: '#FF1F6D',
        borderWidth: 1,
        borderRadius: 60,
    },
    editButton: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: '#FF1F6D',
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
        marginHorizontal: 30,
        marginBottom: 25,
        padding: 10,
        gap: 20,
        borderColor: '#FA97B9',
        borderWidth: 1,
        borderRadius: 20, 
    },
    locationLabel: {
        color: '#333',
        fontWeight: 600,
    },
    locationText: {
        color: '#555',
        fontSize: 14,
        lineHeight: 18,
    },
    optionsContainer: {
        width: '100%',
        marginTop: 10,
    },
    optionButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#ffd1e1ff",
        borderRadius: 20,
    },
    optionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
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
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        backgroundColor: "#ffbabaff",
        marginTop: 20,
    },
});
