import React from 'react';
import { Text, View } from 'react-native';

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    padding: 30, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'
                }}
            >
                <Text style={{ marginLeft: 10, marginBottom: 5 }}>
                    Settings
                </Text>
            </View>
        );
    }
}
