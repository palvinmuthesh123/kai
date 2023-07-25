import React from 'react';
import { View ,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WIDTH, HEIGHT } from '../../theme/typography';

import HomeScreen from './HomeScreen';
import PeopleScreen from './PeopleScreen';
import ManScreen from './ManScreen';
import SearchScreen from './SearchScreen';
import LastScreen from './ProfileScreen';

import Group from '../../assets/svg/dashboard/group.svg';
import Home from '../../assets/svg/dashboard/home.svg';
import Last from '../../assets/svg/dashboard/last.svg';
import Plus from '../../assets/svg/dashboard/plus.svg';
import Search from '../../assets/svg/dashboard/search.svg';

const Tab = createBottomTabNavigator();

export default DashBoardScreen = (props) => {

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <>
              <Home color={color} size={size} />
              {focused ? <View style={{ height: HEIGHT * 0.3 / 100, width: WIDTH * 10 / 100, backgroundColor: 'black', marginTop: 10 }}></View> : null}
            </>
          ),
        }}

      />
      <Tab.Screen
        name="PeopleScreen"
        component={PeopleScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <><Group color={color} size={size} />
              {focused ? <View style={{ height: HEIGHT * 0.3 / 100, width: WIDTH * 10 / 100, backgroundColor: 'black', marginTop: 10 }}></View> : null}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="ManScreen"
        component={ManScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: 68,
                width: 68,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Plus color={color} size={50} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <><Search color={color} size={size} />
              {focused ? <View style={{ height: HEIGHT * 0.3 / 100, width: WIDTH * 10 / 100, backgroundColor: 'black', marginTop: 10 }}></View> : null}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="LastScreen"
        component={LastScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <TouchableOpacity
                onPress={() => props.navigation.push('ProfileScreen') }><Last color={color} size={size} />
              {focused ? <View style={{ height: HEIGHT * 0.25 / 100, width: WIDTH * 10 / 100, backgroundColor: 'black', marginTop: 5 }}></View> : null}
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  )
}