import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card } from 'native-base';
import PreviewPost from '../PreviewPost';
import Comment from '../Comment';
import ActivityReason from './ActivityReason';
import ActivityTitle from './ActivityTitle';
import { Text } from '..';

function Activity({ activity }) {
    const renderContent = (id, type) => {
        switch (type) {
        case 'post':
            return <PreviewPost id={id} />;
        case 'comment':
            return <Comment id={id} />;
        default:
            return (
                <View
                    style={{
                        paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10
                    }}
                >
                    <Text>{`Неизвестный тип контента: ${type}`}</Text>
                </View>
            );
        }
    };

    return (
        <Card>
            {activity.data.reason ? <ActivityReason reasonData={activity.data.reason} /> : null}

            <ActivityTitle userId={activity.generator.id} date={activity.date} />

            {renderContent(activity.obj.id, activity.obj.type)}
        </Card>
    );
}

Activity.propTypes = {
    activity: PropTypes.shape({
        generator: PropTypes.shape({
            id: PropTypes.string
        }),
        obj: PropTypes.shape({
            id: PropTypes.string
        }).isRequired,
        data: PropTypes.shape({
            reason: PropTypes.shape({
                rank: PropTypes.string
            })
        }).isRequired
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    activity: state.activity[ownProps.id]
});

export default connect(mapStateToProps)(Activity);
