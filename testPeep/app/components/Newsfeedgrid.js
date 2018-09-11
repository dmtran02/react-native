import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar, Dimensions} from 'react-native';


type Props = {};
export default class Newsfeedgrid extends Component<Props> {
  render() {
    return (
<View>
<Text style = {styles.header} > {this.props.location} </Text>
<View>
<View style={styles.photoGrid}>

<View style={styles.photoWrap}>
<Image style={styles.photo} source={require('../img/two.png')} />
<Text> Reunited </Text>
</View>

<View style={styles.photoWrap}>
<Image style={styles.photo} source={require('../img/guys.png')} />
<Text> Yo Rocky! THere are only 72 steps though! </Text>
</View>

<View style={styles.photoWrap}>
<Image style={styles.photo} source={require('../img/redcap.png')} />
<Text> Just finished climbing these steps. Hey Mayweather want a match? </Text>
</View>

<View style={styles.photoWrap}>
<Image style={styles.photo} source={require('../img/logo.jpg')} />
</View>

</View>
</View>
<Text>               Show more </Text>
</View>
);
}
}

const styles = StyleSheet.create({
photoGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
marginLeft: 50,
marginRight: 50,
},

photoWrap: {
margin: 10,
height: 200,
width: ((Dimensions.get("window").width) - 100)/ 2 - 20,
},

photo: {
flex: 1,
width: null,
},

header: {
	textAlign: 'center',
	textDecorationLine: 'underline'
}

});