import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, ImageBackground, Button, } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if(value !== null) {
      this.props.navigation.navigate('Profile');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../img/peep_logo_.png')}/>

          <TextInput 
          style={styles.textInput} placeholder='Phone # or Email' 
          onChangeText={(username) => this.setState({username})}
          underlineColorAndroid='transparent'
          />

          <TextInput 
          style={styles.textInput} placeholder='Password' 
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}underlineColorAndroid='transparent'
          />

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={this.login}>
            <Text>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={this.signUp}>
            <Text>Sign Up</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    );
  }

  // Login method
  login = () => {

    fetch('http://192.168.1.236:3000/users', {
      method: 'POST',
      headers:{
        'Accept': 'application.json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })

    .then((response) => response.json())
    .then((res) => {
        if(res.success === true) {
          var username = res.message;

          AsyncStorage.setItem('username', username);

          this.props.navigation.navigate('Profile');
          
        } else{
          alert(res.message);
        }
    })
    .done();
  }

  // Register method
  signUp = () => {
    this.props.navigation.navigate('RegForm');
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#99ccff',
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  loginBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  },
  signUpBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#ccff99',
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 50,
    width: 250,
    height: 100,
  }
})
