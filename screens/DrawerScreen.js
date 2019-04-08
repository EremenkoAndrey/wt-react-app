import React from 'react';
import { Image } from 'react-native';
import { Button } from 'native-base';

export default class DrawerScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../assets/images/robot-prod.png')}
                style={[{
                    width: 24,
                    height: 24
                }, { tintColor }]}
            />
        )
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}
