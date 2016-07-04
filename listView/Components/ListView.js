import React, { Component, } from 'react';
import {
    View,
    Text,
    ScrollView,
    ListView,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native'

export default class NavListView extends Component{
    constructor(props, context) {
        super();
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //this.store = props.store || context.store
    }
    componentWillMount(){
        this.setState({
            navListView: this.props.navListView
        });
        this.setState({'dataSource': this.ds.cloneWithRows([])});
    }
    shouldComponentUpdate(nextProps, nextState){
        debugger;
        return this.props.navListView.isFetching !== nextProps.navListView.isFetching;
    }
    componentWillReceiveProps(nextProps, nextState){
        debugger;
        this.state.navListView = nextProps.navListView;
        this.setState({'dataSource': this.ds.cloneWithRows(this.state.navListView.items)});
    }
    componentWillUpdate(nextProps, nextState){
        debugger;
        //this.setState({'dataSource': this.ds.cloneWithRows([this.state.navListView.items])});
    }
    showToast(title){
        ToastAndroid.show(title, ToastAndroid.SHORT);
    }
    renderRow(item){
        debugger;
        return (
            <TouchableOpacity
                style={styles.touchableButton}
                onPress={this.showToast.bind(this, item.title)}
            >
                <View style={styles.listRow}>
                    <View style={styles.conLeft}>
                        <Text>Title</Text>
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
        debugger;
        if(this.state.navListView.isFetching){
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
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
        width: 50,
        height: 50,
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
})

/*<ListView
 dataSource={this.state.dataSource}
 renderRow={(rowData) => <Text>{rowData}</Text>}
 />*/