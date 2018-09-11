/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import LoginForm from './LoginForm';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style ={styles.logo} source={require('../img/logo2.jpg')} />
          <Text style={styles.title}> Connect Anywhere, Anytime </Text>
          </View>
          <View style={styles.formContainer}>
          <LoginForm />
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  logo: {
    height: 300,
    width: 300,
    marginTop: 60
    
  },

  logocontainer: {
    alignItems: 'center',
    flexGrow: 1,
    
    
  },
  title: {
    color: 'black',
    width: 190,
    opacity: 0.9,
    position: "absolute",
    height: 20,
    top: 300
  },
  formContainer: {

  }
});
