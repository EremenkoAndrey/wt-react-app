import React from 'react';
import { Linking, Text } from 'react-native';

function Link({ children, to }) {
    return (
        <Text style={{ color: '#3F5185'}} onPress={() => Linking.openURL(to)}>{children}</Text>
    );
}

export default Link;
