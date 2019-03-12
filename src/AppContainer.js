import React, {Component} from 'react'
import { View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import Home from './layout/Home'
import NewImage from './layout/NewImage'
import CustomNavBar from './components/CustomNavBar'

export default class AppContainer extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Router>
          <Scene key="root">
            <Scene key="Home" component={Home} title="Home" navBar={CustomNavBar} initial/>
            <Scene key="NewImage" component={NewImage} navBar={CustomNavBar}title="New Image" back duration={0}/>
          </Scene>
        </Router>
      </View>
    );
  }
}


