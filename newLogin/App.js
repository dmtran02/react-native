import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import Login from './app/components/Login';

export default class App extends React.Component {
  render() {
    return (
      
      <Navigator initialRoute = {{id: 'Login'}}
      renderScene = {this.navigatorRenderScene} />

    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Login':
        return ( <Login navigator = {navigator} /> );
    }
  }
}

AppRegistry.registerComponent('App', () => App);