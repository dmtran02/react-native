import React, { Component } from "react";
import { View, Text, StyleSheet, } from "react-native";
import { Icon } from "native-base";

class MainScreen extends Component {

	static navigationOptions = {
		headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft:10 }} />,
		title: "News",
		headerRight: <Icon style={{ paddingRight: 10 }} name="ios-send-outline" />
	}

	render(){
		return (
			<View>
				<Text>MainScreen</Text>
			</View>
		);
	}
}

export default MainScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});