import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>

                </View>

                <View styles={styles.formContainer}>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        backgroundColor: '#3498db'
    }
});