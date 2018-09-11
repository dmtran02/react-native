import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';


import Header2 from './Header2';
import PhotoGrid2 from './PhotoGrid2';

type Props = {};
export default class Profile_With_Grid extends Component {

  render() {
    return ( 
    	<View style={styles.container}>
          <Header2 />
          <PhotoGrid2 />
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



