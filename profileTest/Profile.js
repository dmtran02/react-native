import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';


import Header from './Header';
import PhotoGrid from './PhotoGrid';

type Props = {};
export default class Profile extends Component {

  render() {
    return ( 
    	<View style={styles.container}>
          <Header />
          <PhotoGrid />
       </View>
       );
	}
	}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});



