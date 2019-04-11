import { StyleSheet } from 'react-native';
import colors from '../../../constants/Colors';


export default StyleSheet.create({
    block: {
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        color: '#6d6d72',
        fontSize: 13,
        lineHeight: 15
    },
    link: {
        color: colors.linkColor
    }
});
