import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboaradAvoidingView, TouchableOpacity, } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import login2 from './app/components/login2';
import Profile from './app/components/Profile';
import RegForm from './app/components/RegForm';

const Application = createStackNavigator({
	Home: { screen: login2 },
	Profile: { screen: Profile },
	RegForm: { screen: RegForm },
}, {
	navigationOptions: {
		header: null
	}
}); 

export default class App extends React.Component {
  render() {
    return (
      <Application/>
    );
  }
}
