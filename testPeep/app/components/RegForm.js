import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
				<View style={styles.container}>
					<View style={styles.regform}>

						<Text style={styles.header}>Registration</Text>

						<TextInput style={styles.textInput} placeholder = "Name"
						underlineColorAndroid={'transparent'}/>

						<TextInput style={styles.textInput} placeholder = "Email"
						underlineColorAndroid={'transparent'}/>

						<TextInput style={styles.textInput} placeholder = "Password"
						secureTextEntry={true}underlineColorAndroid={'transparent'}
						/>

						<TouchableOpacity style={styles.button}>
							<Text style={styles.btntext}>Sign up</Text>
						</TouchableOpacity>

					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
    flex: 1,
    },
	container:{
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#36485f',
		paddingLeft: 60,
		paddingRight: 60,
	},
	regform: {
		alignSelf: 'stretch',
	},
	header:{
		fontSize: 24,
		color: '#fff',
		paddingBottom: 10,
		marginBottom: 40,
		borderBottomColor: '#199187',
		borderBottomWidth: 1,
	},
	textInput: {
		alignSelf: 'stretch',
		height: 40,
		marginBottom: 30,
		color: '#fff',
		borderBottomColor: '#f8f8f8',
		borderBottomWidth: 1,
	},
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#59cbbd',
		marginTop: 30,
	},
	btntext: {
		color: '#fff',
		fontWeight: 'bold',
	},
});