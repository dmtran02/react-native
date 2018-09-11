import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { createBottomTabNavigator, } from 'react-navigation';

export class Profile extends React.Component {

  render() {
    return (
      
        <View style={styles.container}>

          <Text style={styles.text}>Peep Page</Text>

        </View>

      
    );
  }
}

export class Settings extends React.Component {

  render() {
    return (
      
        <View style={styles.container}>

          <Text style={styles.text}>Settings</Text>

        </View>

      
    );
  }
}

export default createBottomTabNavigator({
  Profile: {screen: Profile },
  Settings: {screen: Settings }
});

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
  },
  text:{
    color:'#fff'
  }
})
