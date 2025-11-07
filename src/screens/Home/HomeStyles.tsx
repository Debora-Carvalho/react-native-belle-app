import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingVertical: 40,
        backgroundColor: "#FFFFFF",
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 16,
        marginTop: 20,
    },
    containerNoResultsText: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        gap: 10,
    },
    noResultsText: {
        fontSize: 16,
        color: '#777',
    },

});