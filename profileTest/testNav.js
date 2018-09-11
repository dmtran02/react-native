import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, } from 'react-navigation';
import { Icon } from 'react-native-vector-icons/Ionicons'

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Peep Page!</Text>
      </View>
    );
  }
}
export class Notifications extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Notification!</Text>
      </View>
    );
  }
}
export class Messages extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Message!</Text>
      </View>
    );
  }
}

export class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: { screen: Home },
  Notification: { screen: Notifications},
  Message: { screen: Messages},
  Profile: { screen: Profile }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
