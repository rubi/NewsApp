import React, { Component, } from 'react'
import NavMenu from '../navMenu/components/NavMenu'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NavMenuAction from '../navMenu/actions';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

class Structure extends Component{
    render(){
        const {navMenuState, } = this.props;
        return (
            <NavMenu menuTabs={navMenuState}/>
        );
    }
};

function mapStateToProps(state){
    return {
        navMenuState: state.navMenuState
    }
}

function mapActionsToProps(dispatch){
    return {
        actions: bindActionCreators(NavMenuAction, dispatch)
    }
}
export default connect(mapStateToProps, mapActionsToProps)(Structure);