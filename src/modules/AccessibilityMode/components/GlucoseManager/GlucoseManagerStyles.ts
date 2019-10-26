import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    levelTitle: {
        textAlign: 'center',
        fontSize: 35,
        paddingTop: 120
    },
    input: {
        marginHorizontal: 50,
        marginVertical: 10
    },
    speechButtonContainer: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30
    },
    button: {
        marginVertical: 4,
        marginHorizontal: 4,
        borderRadius: 120,
        paddingVertical: 25,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        elevation: 2,
    },
})
