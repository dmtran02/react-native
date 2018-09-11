import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ImageBackground, Dimensions, ScrollView, Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Container, Content, Icon, } from 'native-base';
import Header from './Header';
import Bar from './Bar';
import PhotoGrid from './PhotoGrid';
import MainScreen from './MainScreen';
import CardComponent from './CardComponent';
import Peep from './Peep';
import Newsfeedgrid from './Newsfeedgrid';
import Newsfeed from './Newsfeed';
import Profile_With_Grid from './Profile_With_Grid';
import Profile_With_Photo from './Profile_With_Photo';
import PhotoGrid2 from './PhotoGrid2';

export class Profile extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-person" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      
      <View style={styles.container}>
        <Header/>
        <Bar/>
        <PhotoGrid/>
      </View>
    );
  }
}

export class Messages extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-chatboxes" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      
        <View style={styles.container}>

          
          
          <Profile_With_Photo/>
          <PhotoGrid2/>

        </View>

      
    );
  }
}

export class Notifications extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-notifications" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      
        <View style={styles.container}>

          <Container style={styles.cardContainer}>
            <Content>
              <Profile_With_Photo/>
              <CardComponent imageSource="1"
              likes = "101"/>
              <CardComponent imageSource="2"
              likes = "201"/>
              <CardComponent imageSource="3"
              likes = "301"/>
            </Content>
          </Container>

        </View>

      
    );
  }
}

export class Settings extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-settings" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      
        <View style={styles.container}>

          <Text style={styles.text}>Settings</Text>

        </View>

      
    );
  }
}

export default createMaterialBottomTabNavigator({
  Profile: {screen: Profile },
  Messages: {screen: Messages},
  Notifications: {screen: Notifications},
  Settings: {screen: Settings }
}, {
  activeTintColor: '#66c2ff',
});

const AppStackNavigator = createStackNavigator({
  Navigation: MainScreen
});

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
    },
  cardContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    
});
