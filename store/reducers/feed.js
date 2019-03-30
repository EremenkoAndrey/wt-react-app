const initialState = {
    list: [],
    boundary: null,
    boundaryRecordId: null,
    enableRecommendations: false,
    orderBy: 'rank'
};

export default (state = initialState, action) => {
    switch (action.type) {
        // case 'GET_INIT_FEED_DATA':
        //     return {
        //         ...state,
        //         showAbout: true
        //     };
        // case 'CLOSE_ABOUT':
        //     return {
        //         ...state,
        //         showAbout: false
        //     };
        default:
            return state
    }
}