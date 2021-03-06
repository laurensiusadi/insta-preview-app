import React, { Component } from 'react'
import {
	StyleSheet, View, ActivityIndicator, StatusBar, TouchableOpacity, Text
} from 'react-native'
import axios from 'axios'
import ProfileInfo from '../components/ProfileInfo'
import MediaList from '../components/MediaList'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			user: null,
			feed: null,
			comments: [],
		};
	}
	
	async componentDidMount() {
		const userUrl = 'https://api.instagram.com/v1/users/self?access_token=' + '449212748.f2f0c1d.e819ff8e4d34468ba7d79c7cc458cf11'
		const feedUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + '449212748.f2f0c1d.e819ff8e4d34468ba7d79c7cc458cf11'
		console.log('request', userUrl)
		let userResponse = await axios.get(userUrl)
		let feedResponse = await axios.get(feedUrl)
		console.log('user', userResponse)
		console.log('feed', feedResponse)
		if(userResponse.status === 200) {
			this.setState({ loaded: true, user: userResponse.data.data })
		}
		if(feedResponse.status === 200) {
			this.setState({	loaded: true, feed: feedResponse.data.data })
		}
	}

	render() {
		const { user, feed, loaded } = this.state
		if (!loaded) {
			return (
				<View style={styles.activityIndicatorContainer}>
					<ActivityIndicator
						animating={true}
						style={[{height: 100}]}
						size="large"
					/>
				</View>
			)
		}
		else {
			return (
				<View style={styles.container}>
					<StatusBar barStyle="dark-content"/>
					<View style={styles.container}>
						<ProfileInfo user={user}/>
						<MediaList style={{paddingHorizontal: 10}} media={feed}/>
					</View>
					{/* <View style={styles.tabBar}>
						<TouchableOpacity style={styles.tabBarItem}>
							<Icon name="folder" size={25}/>
							<Text>Folder</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.tabBarItem}>  
							<Icon name="folder" size={25}/>
							<Text>Folder</Text></TouchableOpacity>
						<TouchableOpacity style={styles.tabBarItem}>  
							<Icon name="folder" size={25}/>
							<Text>Folder</Text></TouchableOpacity>
						<TouchableOpacity style={styles.tabBarItem}>  
							<Icon name="folder" size={25}/>
							<Text>Folder</Text></TouchableOpacity>
					</View> */}
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	activityIndicatorContainer: {
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	container: {
		flex: 1,
	},
	tabBar: {
		height: 60,
		borderTopWidth: 0.5,
		borderColor: '#E5E5E5',
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	tabBarItem: {
		alignItems: 'center',
		justifyContent: 'center'
	}
});
