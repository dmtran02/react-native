import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar} from 'react-native';


type Props = {};
class Header2 extends React.Component {
  render() {
    return ( 
    <View
        style={{
          flexDirection: 'column',
          height: 200,

        }}>

        <View style={{backgroundColor: '#00FFFF', flex: 0.5}} />
        <View style={{backgroundColor: 'white', flex: 0.5}} />
        <Image style ={styles.pic} source={require('../img/Kappa.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pic: {
    height: 150,
    width: 150,
    borderRadius: 75,
    position: 'absolute',
    marginTop: 27,
    marginLeft: 115,
    alignItems: 'center',
  },
  bio: {
    marginLeft: 50,
    color: '#00FFFF',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    alignItems: 'center',
    position: 'absolute',
    marginTop: 175,
  },
  bioInfo: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    alignItems: 'center',
    position: 'absolute',
    marginTop: 190,
    marginLeft: 50,
  },
  stuff: {
    marginLeft: 50,
    color: 'gray'
  }
});

export default Header2;