import React, { Component, } from 'react'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class NavMenuReduce extends Component{
    render(){
        const tabsList = this.props.menuTabs.map((menu, key) => (
            <Text tabLabel={menu.name} key={key}>{menu.content}</Text>
        ));
        return <ScrollableTabView
            style={{marginTop: 20, }}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}>
            {tabsList}
        </ScrollableTabView>;
    }
};
