import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    middle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 1
    },
    sides: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 15
    },
    corner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cornerText: {
        marginHorizontal: 15,
    },
    up: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25
    }
})
