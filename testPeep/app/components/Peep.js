import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar, ScrollView,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import News_L from './News_L';
import News_R from './News_R';

type Props = {};
export default class Peep extends Component<Props> {
  render() {
    return ( 
    	<View style={styles.container}>
      <ScrollView>
      <News_L description = "Software developer & Games of Throne fanatic" id = "Profile_1" />
   
      <News_R  description ="Malawian Story teller & author of 'Soft magic'." id = "Profile_2"/>
      <News_L description ="I'm always down for a match in overwatch.Platnium rank" id = "Profile_3" />
      <News_R description = "Flights & frapachinos are all I need in life. UPenn 18" id = "Profile_4" />
      <News_L description ="Personal trainer/ nutritionist> Let me know if you need tips!" id = "Profile_5"/>
      <News_R description ="Your latte isn't perfect but your outfit can be" id = "Profile_6"/>
      <News_L description ="Aspiring artist. My blues will change your mood" id = "Profile_7"/>
      </ScrollView>
        </View>
       );
	}
	}



const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
    flex: 2,
    backgroundColor: 'white'

	},
});