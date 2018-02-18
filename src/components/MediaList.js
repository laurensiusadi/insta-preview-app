import React, { Component } from 'react';
import {
  Alert, Platform, StyleSheet, Text, View, Image, Dimensions,
  TouchableHighlight, FlatList
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');
const equalWidth = ( width / 3 );
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
    },
    item: {
        flex: 1,
        margin: 3,
        backgroundColor: 'lightblue',
    }
});

export default class MediaList extends Component {
    constructor(props) {
        super(props);
    }

    _keyExtractor = (item, index) => item.id;

    renderRowItem = ({item}) => {
        return (
          <TouchableHighlight underlayColor="white" onPress={this._onPressImage}>
            <FastImage style={{ height: equalWidth,  width : equalWidth }} source={{ uri: item.thumbnail_src,
            priority: FastImage.priority.normal }} resizeMode={FastImage.resizeMode.cover} />
          </TouchableHighlight>
        )
    }

    _onPressImage() {
        
    }

    render(){
        return (
            <View style={styles.container}>
                <FlatList
                data={this.props.media}
                renderItem={this.renderRowItem}
                keyExtractor={this._keyExtractor}
                numColumns={3} />
            </View>
        );
    }
}