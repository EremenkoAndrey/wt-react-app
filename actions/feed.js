import api from './../services/api';
import { FETCH_USER } from './../actions/user';
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
                console.log(res)
            })
            .catch(err => dispatch(ERROR_HANDLER(err)));
        return dispatch({ type: 'FETCH_INIT_FEED_DATA' })
    };
}