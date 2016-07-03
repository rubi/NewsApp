import React, { Component, } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../global/Reducers';
import { fetchLists } from '../listView/actions'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
export default store;

/*
store.dispatch(fetchLists('reactjs')).then(() =>
    console.log(store.getState())
)
*/

/*
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
)*/
