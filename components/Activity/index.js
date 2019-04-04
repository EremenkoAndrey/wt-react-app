import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'native-base';
import PreviewPost from '../PreviewPost';
import Comment from '../Comment';
import ActivityReason from '../ActivityReason';
import ActivityTitle from '../ActivityTitle';
import ActivityFooter from '../ActivityFooter';
import { Text } from '../WTComponents';

function Activity({ activity }) {
    const renderContent = (id, type) => {
        switch (type) {
        case 'post':
            return <PreviewPost id={id} />;
        case 'comment':
            return <Comment id={id} />;
        default:
            return <Text>{`Неизвестный тип контента: ${type}`}</Text>;
        }
    };

    return (
        <Card>
            {activity.data.reason ? <ActivityReason reasonData={activity.data.reason} /> : null}

            <ActivityTitle userId={activity.generator.id} date={activity.date} />

            {renderContent(activity.obj.id, activity.obj.type)}

            <ActivityFooter />
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
