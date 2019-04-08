import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, Icon } from 'native-base';

function HeaderMenu({ navigation }) {
    console.log('navigation', navigation)

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button
                transparent
                onPress={() => navigation.openDrawer()}
            >
                <Icon name="menu" />
            </Button>
        </View>
    );
}

export default withNavigation(HeaderMenu);
