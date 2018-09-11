import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';
import { withNavigation } from 'react-navigation'

import Header2 from './Header2';
import PhotoGrid2 from './PhotoGrid2';

class Profile_With_Photo extends React.Component {


  render() {
    return ( 
    	<View style={styles.container}>
          <Header2 /> 
       </View>
       );
	}
	}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  photo: {
    width: 380,
    height: 400,
    alignItems: 'center',
  }
});


export default withNavigation(Profile_With_Photo);
