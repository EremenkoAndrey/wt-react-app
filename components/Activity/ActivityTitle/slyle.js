import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    block: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4'
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 10
    },
    avatar: {
        width: 40,
        height: 40
    },
    avatarContainer: {
        paddingRight: 10
    },
    infoContainer: {},
    date: {
        color: '#8e8e93',
        fontSize: 14
    },
    name: {
        fontWeight: 'bold'
    }
});
