/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import Newsfeedgrid from './Newsfeedgrid';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView >
      <View>
      <View style={styles.container}>
      <Newsfeedgrid location = "Rocky Steps, 2600 Benjamin Franklin Pkwy" />
      </View>


      <View style={styles.container}>
      <Newsfeedgrid location = "Bridge Cafe, University of Pennsylvania" />
      </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     paddingVertical: 20,
     backgroundColor: 'white'

  }
});
