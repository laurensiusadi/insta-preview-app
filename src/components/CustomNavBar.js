import React, { Component } from 'react'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class CustomNavBar extends Component {
    _renderLeft() {
        if (Actions.currentScene === 'Home') {
        return (
            <View style={{flexDirection:'row'}}>
                {/* <TouchableOpacity
                onPress={() => console.warn('Hamburger button pressed')}>
                    <Icon style={{color:'white'}} name="menu" size={24}/>
                </TouchableOpacity> */}
                <Text style={styles.appTitle}>{ this.props.title }</Text>
            </View>
        )
        } else {
            return (
            <View style={{flexDirection:'row'}}>              
                <TouchableOpacity
                onPress={Actions.pop}>
                    <Icon style={{color:'white', paddingLeft:18}} name="arrow-back" size={24}/>
                </TouchableOpacity>
                <Text style={styles.appTitle}>{ this.props.title }</Text>
            </View>
            )
        }
    }

    _renderRight() {
        if (Actions.currentScene === 'Home') {
            return (
                <View>
                    <TouchableOpacity onPress={() => Actions.NewImage()}>
                        <Icon style={{color:'white', paddingRight:18}} name="add" size={24}/>
                    </TouchableOpacity>
                </View>
            )
        } else {
            
        }
    }
    render(){
        return(
            <View style={styles.navBar}>
                { this._renderLeft() }
                { this._renderRight() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBar: {
		height: (Platform.OS === 'ios') ? 64 : 54,
		backgroundColor: 'black',
		elevation: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	appTitle: {
		color: 'white',
		fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 20
	},
})