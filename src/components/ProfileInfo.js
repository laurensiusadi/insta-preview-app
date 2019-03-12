import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Image,
  TouchableOpacity, ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ProfileInfo extends Component {
    render(){
        const { user } = this.props
        return (
            <View style={styles.profile}>
                <Image source={{ uri: user.profile_picture}} style={styles.profilePicture}/>
                <View style={{paddingLeft: 15, justifyContent: 'center' }}>
                    <Text style={{fontSize: 24, paddingBottom: 2}}>{user.username}</Text>
                    {/* <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>{user.counts.media}</Text><Text> posts</Text>
                        <Text style={{fontWeight: 'bold', paddingLeft: 12}}>{user.counts.followed_by}</Text><Text> followers</Text>
                        <Text style={{fontWeight: 'bold', paddingLeft: 12}}>{user.counts.follows}</Text><Text> following</Text>
                    </View> */}
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