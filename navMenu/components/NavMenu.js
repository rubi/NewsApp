import React, { Component, } from 'react'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native'

export default class NavMenuReduce extends Component{
    render(){
        const tabsList = this.props.menuTabs.map((menu, key) => (
            /*<Text tabLabel={menu.name} key={key}>{menu.content}</Text>*/
            <ScrollView tabLabel={menu.name} key={key} style={styles.tabView}>
                <View style={styles.card}>
                    <Text>{menu.content}</Text>
                </View>
            </ScrollView>
        ));
        return <ScrollableTabView
            style={{marginTop: 20, }}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}>
            {tabsList}
        </ScrollableTabView>;
    }
};
const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});