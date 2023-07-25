import React from 'react';
import { View ,TouchableOpacity,SafeAreaView ,TextInput} from 'react-native';
import { WIDTH, HEIGHT, COLOR } from '../../theme/typography';
import styles from './styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AthleteSearch from './AthleteSearch';
import CoachSearch from './CoachSearch';
import CustomHeader from '../../component/header/CustomHeader';

import Back from '../../assets/svg/filter/Back.svg'
import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'

const Tab = createMaterialTopTabNavigator();

function AthleteTabbar(props) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View style={[styles.searchView, { height: HEIGHT / 100 * 5, }]}>
                <TouchableOpacity 
                    onPress={() =>props.navigation.goBack() }
                    style={{ width: WIDTH / 100 * 10 }}>
                    <Back />
                </TouchableOpacity>
                <View style={[styles.searchBar, { height: HEIGHT / 100 * 4.5, }]}>
                    <WFSearch />
                    <TextInput
                        style={[styles.input, { fontSize: 12, color: 'white', top: 2, }]}
                        placeholderTextColor={'white'}
                        placeholder="Search for athlete / team"
                    />
                </View>
            </View>
    <View style={{flex:1,backgroundColor:'white'}}>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLOR.blue,
        tabBarInactiveTintColor: 'rgba(48, 48, 48, 0.52)',
        tabBarStyle: {
          backgroundColor: 'white',
          width:'60%',
          height:HEIGHT/100*6,
          elevation:0
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 14,
          fontWeight:'600',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: COLOR.blue,
          borderBottomWidth: 2,
          width:'30%',
          marginLeft:'8%'
        },
      }}>
      <Tab.Screen
        name="AthleteSearch"
        component={AthleteSearch}
        options={{
          tabBarLabel: 'Athletes',
        }}  />
      <Tab.Screen
        name="CoachSearch"
        component={CoachSearch}
        options={{
          tabBarLabel: 'Coaches',
        }} />
    </Tab.Navigator>
    </View>
    </SafeAreaView>
  );
}


export default AthleteTabbar;