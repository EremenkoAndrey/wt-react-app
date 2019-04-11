import React from 'react';
import {
    Content, List, ListItem, Separator
} from 'native-base';
import { Text, Dict } from '../functional';


export default class SettingsScreen extends React.Component {
    render() {
        return (
            <Content>
                <List>
                    <Separator bordered>
                        <Dict code="INFORMATION" processText={text => text.toUpperCase()} />
                    </Separator>
                    <ListItem>
                        <Text>Тут показать карточку юзера</Text>
                    </ListItem>

                    <Separator bordered>
                        <Dict code="FEED_SETTINGS" processText={text => text.toUpperCase()} />
                    </Separator>
                    <ListItem>
                        <Text>Тут переключатель рекомендаций</Text>
                    </ListItem>

                    <Separator bordered>
                        <Dict code="LANG_SETTINGS" processText={text => text.toUpperCase()} />
                    </Separator>
                    <ListItem>
                        <Text>Тут переключение языка</Text>
                    </ListItem>

                    <Separator bordered>
                        <Dict code="ACCOUNT_SETTINGS" processText={text => text.toUpperCase()} />
                    </Separator>
                    <ListItem last>
                        <Text>Тут логаут</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}
