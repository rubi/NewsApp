import React, { Component, } from 'react';
import {
    View,
    Text,
    ScrollView,
    ListView,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
    RefreshControl,
} from 'react-native';

export default class NavListView extends Component{
    constructor(props, context) {
        super();
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //this.store = props.store || context.store
    }
    listenerChangeTab(){
        this.fetchLists();
    }
    fetchLists(){
        const {fetchLists, url} = this.props;
        const success = function(data){
            this.setState({
                navListView: {
                    isFetching: false,
                    items: data.items
                }
            });
            this.setState({'dataSource': this.ds.cloneWithRows(this.state.navListView.items)});
        }
        fetchLists(url).then(success.bind(this));
    }
    componentWillMount(){
        //first 1
        this.setState({
            navListView: {
                isFetching: true,
                items: []
            }
        });
        this.setState({'dataSource': this.ds.cloneWithRows([])});
    }
    shouldComponentUpdate(nextProps, nextState){
        //first 3
        return this.state.dataSource !== nextState.dataSource;
    }
    componentWillReceiveProps(nextProps, nextState){
        //first 2
    }
    componentWillUpdate(nextProps, nextState){
        //first 4
    }
    showToast(title){
        ToastAndroid.show(title, ToastAndroid.SHORT);
    }
    onRefresh(){
        debugger;
        this.setState({
            navListView: {
                isFetching: true
            }
        });
        this.fetchLists();
    }
    renderRow(item){
        return (
            <TouchableOpacity
                style={styles.touchableButton}
                onPress={this.showToast.bind(this, item.title)}
            >
                <View style={styles.listRow}>
                    <View style={styles.conLeft}>
                        <Text style={styles.confLeftTitle}>Title</Text>
                    </View>
                    <View style={styles.conRight}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.content}>{item.content}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render(){
        if(this.state.navListView.isFetching){
            return (
                <Text>Loading...</Text>
            )
        }else{
            return (
                <ScrollView style={styles.listWrap}>
                    <View style={styles.listContent}>
                        <ListView
                            //initialListSize={2}
                            enableEmptySections={true}
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow.bind(this)}
                            style={styles.listView}
                            refreshControl={
                            <RefreshControl
                                refreshing={this.state.navListView.isFetching}
                                onRefresh={this.onRefresh.bind(this)}
                                tintColor="#ff0000"
                                  colors={['#ff0000', '#00ff00', '#0000ff']}
                                  progressBackgroundColor="#ffff00"
                            />}
                        />
                    </View>
                </ScrollView>
            )
        }
    }
}

const styles = StyleSheet.create({
    listWrap: {
        //flex: 1,
    },
    listContent: {
        //flex: 1,
    },
    listView: {
        //flex: 1,
    },
    listRow:{
        flexDirection: 'row',
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#F5FCFF',
    },
    conLeft: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    confLeftTitle: {

    },
    conRight: {
        paddingLeft: 20,
        flex: 1,
    },
    title: {
        paddingBottom: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    touchableButton: {

    },
    spinner: {
        marginBottom: 50
    },
})

/*<ListView
 dataSource={this.state.dataSource}
 renderRow={(rowData) => <Text>{rowData}</Text>}
 />*/