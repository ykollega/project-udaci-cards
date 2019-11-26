import { StyleSheet } from 'react-native';

export const IS_DEV_ENV = true;

export const generalStyling = StyleSheet.create({
    container: {
        flex: 1,
        padding: '10% 5%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    largeText: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    mediumText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    smallText: {
        fontSize: 13,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    textInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        fontSize: 16,
    },
});
