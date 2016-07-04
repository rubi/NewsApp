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
    }
    componentWillMount(){
        this.setState({currentPage: -1});
    }
    componentDidMount(){
        //first 1
        this.setState({currentPage: 0});
    }
    shouldComponentUpdate(nextProps, nextState){
        //first 3
        return this.state.currentPage !== nextState.currentPage;
    }
    changeTab(currentPage){
        const { actions, } = this.props;
        const NAV_LIST_VIEW = `navListView${currentPage.i}`;
        this[NAV_LIST_VIEW].listenerChangeTab();
    }
    render(){
        const { actions, } = this.props;
        const filter = function(menu, key){
            let NAV_LIST_VIEW = `navListView${key}`;
            return (
                <ScrollView tabLabel={menu.name} key={key} style={styles.scrollViewWrap}>
                    <View style={styles.navListViewWrap}>
                        <NavListView url={menu.tabRelatedContentUrl} {...actions} ref={(navListView)=>this[NAV_LIST_VIEW] = navListView}/>
                    </View>
                </ScrollView>
            )
        };
        const tabsList = this.props.navMenuTabs.navMenuTabsState.map(filter.bind(this));
        return <ScrollableTabView
            style={{marginTop: 20, }}
            initialPage={this.state.currentPage}
            page={this.state.currentPage}
            renderTabBar={() => <ScrollableTabBar />}
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