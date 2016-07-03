import fetch from 'isomorphic-fetch'

export const RECEIVE_LIST_POST = 'RECEIVE_LIST_POST'
export function receiveListPost(json) {
    return {
        type: RECEIVE_LIST_POST,
        items: json.items,
        isFetching: false,
        receivedAt: Date.now()
    }
}
export function listView(text) {
    return { type: 'hello world'}
}

export function fetchLists(url){
    return function(dispatch){
        return fetch(url)
            .then(response => response.json())
            .then(json =>{
                    return dispatch(receiveListPost(json));
            });
    }
}