export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_USER_SUCCESSFUL':
            const { id, lcid, ...rest } = action.payload; // Исключаю поле lcid, которое идет в настройки юзера
            return {
                ...state,
                [id]: { ...rest }
            };
        default:
            return state
    }
}