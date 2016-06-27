import React from 'react';
import {
    Text,
    View,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default React.createClass({
    render() {
        return <ScrollableTabView
            style={{marginTop: 20, }}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
        >
            <Text tabLabel='Tab #1'>Tab1</Text>
            <Text tabLabel='Tab #2'>Tab2</Text>
            <Text tabLabel='Tab #3'>Tab3</Text>
            <Text tabLabel='Tab #4'>Tab4</Text>
            <Text tabLabel='Tab #5'>Tab5</Text>
        </ScrollableTabView>
    },
});
