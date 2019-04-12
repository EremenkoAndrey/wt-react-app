import React from 'react';
import {
    Left, Thumbnail, ListItem, Body, Right
} from 'native-base';
import { Text } from '../../../functional';


function SettingsAvatar() {
    return (
        <ListItem avatar>
            <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
            </Left>
            <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
                <Text note>3:43 pm</Text>
            </Right>
        </ListItem>
    );
}

export default SettingsAvatar;
