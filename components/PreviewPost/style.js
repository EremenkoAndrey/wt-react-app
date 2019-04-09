import { StyleSheet } from 'react-native';
import { window } from '../../constants/Layout';
import colors from '../../constants/Colors';
import fonts from '../../constants/Fonts';

export default StyleSheet.create({
    block: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 18,
        color: '#08525d',
        fontWeight: 'bold'
    },
    titleContainer: {
        marginBottom: 10
    },
    instruments: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
        overflow: 'hidden',
        width: window.width - 40
    },
    instrument: {
        marginRight: 10
    },
    content: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        paddingBottom: 10
    },
    actions: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    actionsColumn: {
        flex: 1,
        alignItems: 'center'
    },
    actionsColumnBordered: {
        borderRightWidth: 1,
        borderRightColor: '#c4c4c4'
    },
    htmlFont: {
        fontSize: fonts.baseFontSize,
        fontFamily: fonts.baseFontFamily,
        lineHeight: fonts.baselineHeight,
        color: colors.baseTextColor
    }
});
