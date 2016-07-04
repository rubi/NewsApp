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
        //debugger;
        this.setState({
            navListView: {
                isFetching: true,
                items: []
            }
        });
    }
    componentDidMount(){
        //debugger;
    }
    componentWillUpdate(nextProps, nextState){
        //debugger;
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    componentWillReceiveProps(nextProps, nextState){
        //debugger;
    }
    changeTab(currentPage){
        const me = this;
        const {actions} = this.props;
        const url = `http://192.168.1.105:3000/api/newsTabList${currentPage.i+1}`;
        actions.fetchLists(url).then(data=>{
            me.state.navListView = {};
            me.setState({
                navListView: {
                    isFetching: false,
                    items: data.items
                }
            });
            /*this.setState({
                navListView: {
                    isFetching: false,
                    items: data.items
                }
            });*/
        });
    }
    render(){
        const me = this;
        const {actions} = this.props;
        const tabsList = this.props.navMenuTabs.navMenuTabsState.map((menu, key) => {
            return (
                <ScrollView tabLabel={menu.name} key={key} style={styles.scrollViewWrap}>
                    <View style={styles.navListViewWrap}>
                        <NavListView navListView={me.state.navListView}/>
                    </View>
                </ScrollView>
            )
        });
        return <ScrollableTabView
            style={{marginTop: 20, }}
            initialPage={0}
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