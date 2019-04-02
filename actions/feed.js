import api from './../services/api';
import normalize from './../utils/normalize';
import { FETCH_USER } from './../actions/user';
import { ADD_ACTIVITIES } from './activity';
import { ADD_POSTS } from './posts';
import { ADD_USERS } from './users';
import { ADD_COMMENTS } from './comments';
import ERROR_HANDLER from "./errors";

export function GET_INIT_FEED_DATA() {
    return (dispatch, getState) => {
        const { user } = getState();
        if(!user.id) {
            dispatch(FETCH_USER({ cbAction: FETCH_INIT_FEED_DATA }))
        } else {
            dispatch(FETCH_INIT_FEED_DATA())
        }
        return dispatch({ type: 'GET_INIT_FEED_DATA' })
    };
}

function FETCH_INIT_FEED_DATA() {
    return (dispatch, getState) => {
        const { user, feed } = getState();
        const params = [
            user.settings.lang,
            user.id,
            1, // номер сущности user,
            'feed', // тип выборки ('feed'/'timeline')
            feed.boundary,
            feed.boundaryRecordId,
            feed.enableRecommendations,
            feed.orderBy,
            0, 10
        ];

        api.getUserFeed(params)
            .then((res) => {
                dispatch(FETCH_FEED_DATA_SUCCESSFUL(res))
            })
            .catch(err => dispatch(ERROR_HANDLER(err)));
        return dispatch({ type: 'FETCH_INIT_FEED_DATA' })
    };
}

function FETCH_FEED_DATA_SUCCESSFUL(res) {
    return (dispatch) => {
        const { boundary, boundaryRecordId, records } = res;
        const ids = records
            .map(record => ({id: `${record.id}`}))
            .filter(({ id }) => !!id);

        const { activity, post: posts, user: users, comment: comments } = normalize(records);
        if(activity){
            dispatch(ADD_ACTIVITIES(activity));
        }
        if(posts){
            dispatch(ADD_POSTS(posts));
        }
        if(users){
            dispatch(ADD_USERS(users));
        }
        if(comments){
            dispatch(ADD_COMMENTS(comments));
        }
        return dispatch({ type: 'FETCH_FEED_DATA_SUCCESSFUL', payload: { boundary, boundaryRecordId, ids } })
    };
}