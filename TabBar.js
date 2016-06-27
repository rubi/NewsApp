import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
    ScrollView,
} from 'react-native';

const TabBar = React.createClass({
    tabIcons: [],
    getInitialState(){
        return {
            tabs: ['头条', '娱乐', '热点', '体育', '房产', '天气']
        }
    },
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    },

    componentDidMount() {
        this.setAnimationValue({ value: this.props.activeTab, });
        this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
    },

    setAnimationValue({ value, }) {
        this.tabIcons.forEach((icon, i) => {
            const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
            icon.setNativeProps({
                style: {
                    color: this.iconColor(progress),
                },
            });
        });
    },

    //color between rgb(59,89,152) and rgb(204,204,204)
    iconColor(progress) {
        const red = 59 + (204 - 59) * progress;
        const green = 89 + (204 - 89) * progress;
        const blue = 152 + (204 - 152) * progress;
        return `rgb(${red}, ${green}, ${blue})`;
    },

    render() {
        const tabWidth = this.props.containerWidth / this.state.tabs.length;
        const left = this.props.scrollValue.interpolate({
            inputRange: [0, 1, ], outputRange: [0, tabWidth, ],
        });
        const scrollStepWidth = 100;
        return <ScrollView style={styles.container} horizontal={true}>
            <View style={[styles.tabs, this.props.style, ]}>
                {this.state.tabs.map((tabText, i) => {
                    return <TouchableOpacity key={tabText} onPress={() => this.props.goToPage(i)} style={styles.tab}>
                        <Text style={[styles.tabText,]}>{tabText}</Text>
                    </TouchableOpacity>;
                })}
            </View>
            <View style={styles.more}>
                <Text style={styles.moreText}>更多</Text>
            </View>
            <Animated.View style={[styles.tabUnderlineStyle, { width: scrollStepWidth }, { left, }, ]} />
        </ScrollView>;
    },
});

const styles = StyleSheet.create({
    container: {
        height: 45,
        justifyContent: 'stretch',
    },
    tabs: {
        marginRight: 40,
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
        backgroundColor: '#000000',
    },
    tab: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    tabText: {
        color: '#FFFFFF',
    },
    tabUnderlineStyle: {
        position: 'absolute',
        height: 3,
        backgroundColor: '#a00d01',
        bottom: 0,
    },
    more: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 40,
        height: 45,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreText: {
        fontSize: 11,
        color: '#FFFFFF',
    }
});

export default TabBar;
