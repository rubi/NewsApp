const initialState = {
    "isFetching": true,
    "items": []
};
export default function tabsRelatedContentState (state = initialState, action){
    switch (action.type){
        case 'RECEIVE_LIST_POST':

            var newState = Object.assign({}, state, {
                    'items': action.items,
                    'isFetching': action.isFetching,
            });
            return newState;
        default:
            return state;
    }
}
