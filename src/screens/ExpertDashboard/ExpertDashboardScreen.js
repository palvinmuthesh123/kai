import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground, Image, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, } from '../../theme/typography';
import styles from './styles';
import CustomBarHeader from '../../component/header/CustomBarHeader';
import LinearGradient from "react-native-linear-gradient";
import ViewSlider from 'react-native-view-slider'
import Filter from '../../assets/svg/dashboard/Filter.svg'
import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Like from '../../assets/svg/dashboard/heart.svg'
import Send from '../../assets/svg/dashboard/send.svg'
import Speech from '../../assets/svg/dashboard/speech.svg'
import Location from '../../assets/svg/dashboard/location.svg'
import { expertList } from '../../row/data';
import CustomFooter from '../../component/Bottom/CustomFooter';


const Tab = createBottomTabNavigator();

export default ExpertDashBoardScreen = (props) => {

  const [ind, setInd] = useState(0)
  const [index, setIndex] = useState(0)

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <StatusBar backgroundColor={COLOR.white} />
      <CustomBarHeader
        name={'Hi Albert'}
        onClick={() => props.navigation.push('NotificationScreen')} />
      <View style={styler.container}>
        <View style={styler.searchView}>
          <View style={styler.searchBar}>
            <WFSearch />
            <TextInput
              style={styler.input}
              placeholderTextColor={'white'}
              placeholder="Search for athlete / team"
            />
          </View>
          <TouchableOpacity onPress={() => props.navigation.push('FilterScreen')}>
            <ImageBackground
              style={{ height: 35, width: 44, alignItems: 'center', justifyContent: "center" }}
              source={require('../../assets/images/fillBox.png')}
            >
              <Filter />
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={{ height: HEIGHT / 100 * 7, justifyContent: "center", }}>
          <FlatList
            style={{  }}
            data={[
              { key: 'All Athletes' }, { key: 'For You' },
            ]}
            renderItem={({ item, index }) =>
              <TouchableOpacity onPress={() => setInd(index)} style={{ width: WIDTH / 3, justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                <Text style={[{ fontSize: 16, fontWeight: FONT_WEIGHT.regular }, ind == index ? { color: COLOR.blue } : { color: COLOR.gray }]}>{item.key}</Text>
              </TouchableOpacity>}
            horizontal={true}
          />
        </View>
        <ScrollView 
            style={{ height: HEIGHT / 100 * 72 }}
            >
          <FlatList
            data={expertList}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) =>
              <View >
                <LinearGradient
                  end={{ x: 0, y: 0 }}
                  start={{ x: 1, y: 1.5 }}
                  colors={['#14BC66', '#19214F']}
                  style={[
                    styles.gradientBox, { padding: 10, borderRadius: 5, marginVertical: 10, }]}>
                  <View style={{ backgroundColor: COLOR.gray, height: HEIGHT / 100 * 22, width: '100%', borderRadius: 5, }}></View>
                  <View style={{ height: HEIGHT / 100 * 9, width: '100%', flexDirection: 'row', justifyContent: "space-between" }}>
                    <View style={{ justifyContent: "center" }}>
                      <Text style={styles.name}>Jirapong Gareecharun</Text>
                      <Text style={styles.news}>HS 2026 / F, M</Text>
                      <Text style={styles.news}>Winter Springs, FL</Text>
                    </View>
                    <View>
                      <Text style={styles.address}>5’8 / 125 lbs</Text>
                      <Text style={styles.address}>4.0 GPA </Text>
                    </View>
                  </View>
                  <View style={{ height: HEIGHT / 100 * 3, width: '100%', flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={styles.address}>Business / Finance or Computer Science</Text>
                    <Speech />
                  </View>
                </LinearGradient>
              </View>} />
        </ScrollView>

      </View>
      <CustomFooter 
                    expert={true}
                    onClick={() =>props.navigation.push('AthleteOpening')} 
                    prop={props}
                    onHome={() =>props.navigation.push('ExpertDashboardScreen')}
                    onSecond={()=>props.navigation.push('RecruitmentScreen')}
                    onFourth={()=>props.navigation.push('AthleteTabbar')}
                    onProfile={()=>props.navigation.push('AthleteProfile')}/>
    </SafeAreaView>
  )
}
const styler = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT/100*85,
    paddingHorizontal:WIDTH/100*5,
    paddingVertical:HEIGHT/100*2
},
  searchView: {
    flexDirection: "row",
    width: WIDTH / 100 * 90,
    height: HEIGHT / 100 * 6,
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: COLOR.green,
    flexDirection: "row",
    alignItems: "center",
    width: WIDTH / 100 * 75,
    height: HEIGHT / 100 * 5.5,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
})