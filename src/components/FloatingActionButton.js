import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class FloatingActionButton extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity style={styles.floatingButton}>
                <Icon name="add" size={25}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#ecf0f1',
        bottom: 20,
        right: 20,
        elevation: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }
})