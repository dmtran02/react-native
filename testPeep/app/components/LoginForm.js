import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';


type Props = {};
export default class LoginForm extends Component<Props> {
  render() {
    return ( 
    	<View style={styles.container}>
      <StatusBar
        barStyle="light-content" 
        backgroundColor = 'gray' 
        />
    	<TextInput 
          placeholder = "Username or Email"
          inlineImageLeft='Users'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType= "email-address" 
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput 
          placeholder = "Password"
          secureTextEntry
          returnKeyType='go' 
          inlineImageLeft='Safety'
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
       );
	}
	}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'black',
    paddingHorizontal: 10,
    marginBottom: 10,
    textDecorationStyle: 'solid',
    paddingHorizontal: 10,
    top: 100


  },
  buttonContainer: {
    paddingBottom: 205,
    top: 150
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700'
    }
});