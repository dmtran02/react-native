import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import login from './src/components/login/';

export default class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _onPressLogin() {
        Alert.alert('You have tapped Login!')
    }

    _onPressRegister() {
        Alert.alert('You have tapped Register!')
    }

    _onPressHelp() {
        Alert.alert('You have tapped Help!')
    }

    _onPressSkip() {
        Alert.alert('In order to skip, you must register or login first!')
    }

    render() {
        return (
            <Login />
            <View style={styles.mainContainer}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressLogin}
                        title="Login"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressRegister}
                        title="Sign Up"
                        color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressHelp}
                        title="Help"
                    />
                    <Button
                        onPress={this._onPressSkip}
                        title="Skip"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})