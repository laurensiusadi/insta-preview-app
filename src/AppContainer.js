import React, {Component} from 'react';
import { View } from 'react-native';
import { Router, Scene, Reducer } from 'react-native-router-flux';

import App from './App'
import NewImage from './layout/NewImage'
import CustomNavBar from './components/CustomNavBar'
import connect from 'react-redux'

export default class AppContainer extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Router>
                    <Scene key="root">
                        <Scene key="Home" component={App} title="Home" navBar={CustomNavBar}initial/>
                        <Scene key="NewImage" component={NewImage} navBar={CustomNavBar}title="New Image" back duration={0}/>
                    </Scene>
                </Router>
            </View>
        );
    }
}


