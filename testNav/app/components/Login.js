import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, ImageBackground } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userCred: '',
      password: '',
    }
  }

  componentDidMount() {
    this._loadInitialstate().done();
  }

  _loadInitialstate = async () => {
    var value = await AsyncStorage.getItem('user');
    if(value!==null) {
      this.prop.navigation.navigate('Profile');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>- Peep X -</Text>

          <TextInput 
          style={styles.textInput} placeholder='Phone # or Email' 
          onChangeText={(userCred) => this.setState({userCred})}
          underlineColorAndroid='transparent'
          />

          <TextInput 
          style={styles.textInput} placeholder='Password' 
          onChangeText={(password) => this.setState({password})}
          underlineColorAndroid='transparent'
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

    alert(this.state.userCred); //sends alert to check if # or email is passed
    
    /*fetch('http://192.5454.25.2:3000/userCred', { // fetches database information (replace with real DB source)
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userCred: this.state.userCred,
        password: this.state.password,
      })
    })

    .then((response) => response.json())
    .then((res) => {

      if(res.success === true){
        AsyncStorage.setItem('user', res.user);
        this.props.navigation.navigate('Profile');
      }

      else{
        alert(res.message);
      }

    })
    .done();*/
  }
  // Register method
  signUp = () => {
    alert('You want to register!');
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
  }
})
