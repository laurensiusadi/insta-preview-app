import React, { Component } from 'react';
import {
	Platform, StyleSheet, Text, View, Image,
	TouchableOpacity, ActivityIndicator, StatusBar
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileInfo from './components/ProfileInfo';
import MediaList from './components/MediaList';
import FloatingActionButton from './components/FloatingActionButton';
import {Actions} from 'react-native-router-flux';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: []
		};
	}
	
	componentWillMount() {
		let username = 'laurensiusadi_';
		const baseUrl = 'https://www.instagram.com/' + username +'/?__a=1';
		axios.get(baseUrl)
		 .then((response) => {
			 this.setState({
				 isLoading: false,
				 dataSource: response.data
				});
		 })
		.catch((error)=>{
			 console.warn(error);
		});
	}

	render() {
		if (this.state.isLoading) {
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
			let data = this.state.dataSource;
			return (
				<View style={styles.container}>
					<StatusBar barStyle="dark-content"/>
					<View style={styles.container}>
						<ProfileInfo user={data.user}/>
						<MediaList style={{paddingHorizontal: 10}} media={data.user.media.nodes}/>
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
