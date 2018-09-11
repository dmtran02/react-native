import React, { Component } from "react";
import { View, Text, StyleSheet, Image, } from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, } from 'native-base';

class CardComponent extends Component {

	render(){

		const images = {
			"1": require('../img/KappaThug.jpg'),
			"2": require('../img/KappaPride.jpg'),
			"3": require('../img/FeelsGoodMan.jpg')
		}

		return (
			<Card>
				<CardItem>
					<Left>
						<Thumbnail source={require('../img/Kappa.jpg')}/>
						<Body>
							<Text>Kappa</Text>
							<Text note>Jan 15, 2018</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem>
					<Image source={images[this.props.imageSource]} 
					style={{ height: 400, width: null, flex: 1 }}/>
				</CardItem>
				<CardItem style={{ height: 45 }}>
					<Left>
						<Button transparent>
							<Icon name="ios-heart-outline"
							style={{color:'black'}}/>
						</Button>
						<Button transparent>
							<Icon name="ios-chatbubbles-outline"
							style={{color:'black'}}/>
						</Button>
						<Button transparent>
							<Icon name="ios-send-outline"
							style={{color:'black'}}/>
						</Button>
					</Left>
				</CardItem>
				<CardItem style={{ height: 20 }}>
					<Text>{this.props.likes} likes</Text>
				</CardItem>
				<CardItem>
					<Body>
						<Text>
						<Text style={{ fontWeight: "900" }}>Sir Kappa </Text>
							I look hella cool today!
						</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

export default CardComponent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});