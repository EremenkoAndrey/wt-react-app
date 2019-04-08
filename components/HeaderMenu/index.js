import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';

export default function HeaderMenu() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button transparent>
                <Icon name="menu" />
            </Button>
        </View>
    );
}
