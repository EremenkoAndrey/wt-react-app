const initialState = {
    list: [],
    boundary: null,
    boundaryRecordId: null,
    enableRecommendations: false,
    orderBy: 'rank'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FEED_DATA_SUCCESSFUL':
            const { ids, boundary, boundaryRecordId } = action.payload;
            return {
                ...state,
                list: [...state.list, ...ids],
                boundary,
                boundaryRecordId
            };
        default:
            return state
    }
}