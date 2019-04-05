import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    block: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    column: {
        flex: 1,
        alignItems: 'center'
    },
    bordered: {
        borderRightWidth: 1,
        borderRightColor: '#c4c4c4'
    }
});
