import React, { Component, } from 'react'
import { Provider } from 'react-redux'
import Structure from './Structure'
import store from '../stores/Config'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Structure />
            </Provider>
        );
    }
}
