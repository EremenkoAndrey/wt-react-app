import { StyleSheet } from 'react-native';
import { window } from '../../constants/Layout';

export default StyleSheet.create({
    block: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        paddingTop: 10,
        paddingBottom: 10,
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
    }
});
