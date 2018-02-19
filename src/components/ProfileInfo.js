import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Image,
  TouchableOpacity, ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ProfileInfo extends Component {
    render(){
        let user = this.props.user;
        return (
            <View style={styles.profile}>
                <Image source={{ uri: user.profile_pic_url}} style={styles.profilePicture}/>
                <View style={{paddingLeft: 15}}>
                    <Text style={{fontSize: 24, paddingBottom: 2}}>{user.username}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>{user.media.count}</Text><Text> posts</Text>
                        <Text style={{fontWeight: 'bold', paddingLeft: 12}}>{user.followed_by.count}</Text><Text> followers</Text>
                        <Text style={{fontWeight: 'bold', paddingLeft: 12}}>{user.follows.count}</Text><Text> following</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profile: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white'
    },
    profilePicture: {
        height: 50,
        width: 50,
        borderRadius: 25
    }
});