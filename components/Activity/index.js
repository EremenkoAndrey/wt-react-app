import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card } from 'native-base';
import PreviewPost from '../PreviewPost';
import Comment from '../Comment';

function Activity({ activity }) {
    const renderContent = (id, type) => {
        switch (type) {
        case 'post':
            return <PreviewPost id={id} />;
        case 'comment':
            return <Comment id={id} />;
        default:
            console.error('Тип контента не найден!', type);
            return null;
        }
    };
   // console.log('activity:', activity);
    return (
        <Card>
            {renderContent(activity.obj.id, activity.obj.type)}
        </Card>
    );
}

Activity.propTypes = {
    activity: PropTypes.shape({
        obj: PropTypes.shape({
            id: PropTypes.string
        }).isRequired
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    activity: state.activity[ownProps.id]
});

export default connect(mapStateToProps)(Activity);
