import React, { Component, } from 'react'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'
import NavListView from '../../listView/components/ListView'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native'

export default class NavMenuReduce extends Component{
    constructor(props, context){
        super();
        this.state = {
            currentPage: 0
        };
    }
    changeTab(currentPage){
        return currentPage;
    }
    render(){
        const {actions, navListView} = this.props;
        const me = this;
        const tabsList = this.props.navMenuTabs.navMenuTabsState.map((menu, key) => {
                /*<Text tabLabel={menu.name} key={key}>{menu.content}</Text>*/
            let url = `http://192.168.1.105:3000/api/newsTabList${key+1}`;
            return (
                <ScrollView tabLabel={menu.name} key={key} style={styles.scrollViewWrap}>
                    <View style={styles.navListViewWrap}>
                        <NavListView  currentPage={this.state.currentPage} activeTab={this.props.activeTab} {...actions} tabPage={key} fetchUrl={url} navListView={navListView}/>
                    </View>
                </ScrollView>
            )
        });
        return <ScrollableTabView
            style={{marginTop: 20, }}
            initialPage={this.state.currentPage}
            renderTabBar={() => <ScrollableTabBar />}
            ref={(scrollableTabView) => { this._scrollableTabView = scrollableTabView; }}
            onChangeTab={this.changeTab.bind(this)}>
            {tabsList}
        </ScrollableTabView>;
    }
};
const styles = StyleSheet.create({
    scrollViewWrap: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    navListViewWrap: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        //margin: 5,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});