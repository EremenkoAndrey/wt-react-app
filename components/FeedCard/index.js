import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardItem } from "native-base";
import Post from './../Post/';
import Comment from './../Comment/'

function FeedCard({ activity }) {
    const renderContent = (id, type) => {
        switch(type) {
            case 'post':
                return <Post id={id} />;
            case 'comment':
                return <Comment id={id} />;
            default:
                console.error('Тип контента не найден!', type);
                return null;
        }
    };
    return (
        <Card>
            <CardItem header bordered>
                {renderContent(activity.obj.id, activity.obj.type)}
            </CardItem>
        </Card>
    );
}

FeedCard.propTypes = {
    activity: PropTypes.shape({
        obj: PropTypes.shape({
            id: PropTypes.string
        }).isRequired
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    activity: state.activity[ownProps.id]
});

export default connect(mapStateToProps)(FeedCard);
