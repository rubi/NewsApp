import React, { Component, } from 'react'
import NavMenu from '../navMenu/components/NavMenu'
import { connect } from 'react-redux'
import  customBindActionCreators from '../global/Actions'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

class Structure extends Component{
    render(){
        const {navMenuState, tabsRelatedListState, actions} = this.props;
        return (
            <NavMenu navMenuTabs={navMenuState} navListView={tabsRelatedListState} actions={actions}/>
        );
    }
};

function mapStateToProps(state){
    return {
        navMenuState: state.navMenuState,
        tabsRelatedListState: state.tabsRelatedListState
    }
}

function mapActionsToProps(dispatch){
    return {
        actions: customBindActionCreators(dispatch)
    }
}
export default connect(mapStateToProps, mapActionsToProps)(Structure);