import React from 'react';
import { Text, View } from 'react-native';


export default class AboutScreen extends React.Component {
    static navigationOptions = {
        title: 'About',
    };

    closeAbout = () => {
        this.props.navigation.goBack();
    };

    render() {
        const list = [
            '- get other markets people opinion',
            '- give your opinion',
            '- create forecasts for tickers',
            '- get changes for quotes'
        ];

        return (
                <View style={{
                    padding: 30,
                }}>
                    <Text
                        style={{ color: '#3F5185', marginBottom: 30 }}
                        onPress={this.closeAbout}
                    >
                        Close
                    </Text>
                    <Text style={{ marginBottom: 5 }}>
                        That mobile app is light weight client app for service WhoTrades.com
                    </Text>
                    <Text>
                        WhoTrades.com - social network for traders, here you can:
                    </Text>

                    {list.map((item, index) => <Text key={index} style={{marginLeft: 10, marginBottom: 5}}>{item}</Text>)}
                </View>
        );
    }
}
