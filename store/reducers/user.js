const initialState = {
    id: null,
    settings: {
        lang: 'ru'
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_SUCCESSFUL':
            return {
                ...state,
                id: action.payload.id,
                settings: {
                    ...state.settings,
                    lang: action.payload.lcid
                }
            };
        default:
            return state
    }
}