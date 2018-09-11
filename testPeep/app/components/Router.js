import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile_With_Grid from './Profile_With_Grid';
import login from './login';
import Peep from './Peep';
import News_L from './News_L';
import Profile_With_Photo from './Profile_With_Photo';


const ProfileNav = createStackNavigator({
	Home: Peep,
	Profile_1: Profile_With_Photo,
	Profile_2: Profile_With_Photo,
	Profile_3: Profile_With_Photo,
	Profile_4: Profile_With_Photo,
	Profile_5: Profile_With_Photo,
	Profile_6: Profile_With_Photo,
	Profile_7: Profile_With_Photo

})

export default createBottomTabNavigator({
  Newsfeed: Profile_With_Grid,
  Peep: ProfileNav,
  Notifications: login,
  Profile: Profile_With_Photo,
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Newsfeed') {
          iconName = 'ios-today'
        } else if (routeName === 'Peep') {
          iconName = 'ios-people';
        }
        else if (routeName === 'Notifications') {
          iconName = 'ios-notifications-outline'
        }else if (routeName === 'Profile') {
          iconName = 'ios-person'
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);



