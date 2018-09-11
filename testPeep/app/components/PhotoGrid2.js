import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView, StatusBar, Dimensions} from 'react-native';


type Props = {};
export default class PhotoGrid2 extends Component<Props> {
  render() {
    return (
<View>
<ScrollView>
<View style={styles.photoGrid}>

<View style={styles.photoWrap}>
<Image style={styles.photo} source={require('../img/logo2.jpg')} />
</View>

<View style={styles.photoWrap}>
<Image style={styles.photo} source={require('../img/logo2.jpg')} />
</View>

<View style={styles.photoWrap}>
<Image style={styles.photo} source={require('../img/logo2.jpg')} />
</View>

<View style={styles.photoWrap}>
<Image style={styles.photo} source={require('../img/logo2.jpg')} />
</View>

</View>
</ScrollView>
</View>
);
}
}

const styles = StyleSheet.create({
photoGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
marginTop: 25,
marginLeft: 50,
marginRight: 50
},

photoWrap: {
margin: 2,
height: 128,
width: ((Dimensions.get("window").width) - 100)/ 3 - 4,
},

photo: {
flex: 1,
width: null,
alignSelf: 'stretch',
}

});