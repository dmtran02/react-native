import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar, TouchableHighlight} from 'react-native';
import { withNavigation } from 'react-navigation';

 class News_R extends React.Component {
  render() {
    return ( 
    	<View style={styles.container}>
      <View style={styles.feed}>
      <Text style = {styles.words} > {this.props.description} </Text>
      </View>
      <TouchableHighlight onPress={(prop) => this.props.navigation.navigate(this.props.id)}>
    	<Image style ={styles.photo} source={require('../img/logo.jpg')} />
      </TouchableHighlight>
        </View>
       );
	}
	}



const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'

	},
	photo: {
    height: 100,
    width: 100,
  },
  	words: {
  		marginTop: 35,
  		flexWrap: 'wrap',
  		flex: 1,

  },
    feed: {
      width: 145,
      marginLeft: 150
    }
});

export default withNavigation(News_R)