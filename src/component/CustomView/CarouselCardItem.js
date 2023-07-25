import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image,TouchableOpacity } from "react-native"
import { FONT_SIZE, COLOR, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography'
import LinearGradient from "react-native-linear-gradient";

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.89)

import Like from '../../assets/svg/dashboard/heart.svg'
import Send from '../../assets/svg/dashboard/send.svg'
import Speech from '../../assets/svg/dashboard/speech.svg'
import Location from '../../assets/svg/dashboard/location.svg'

const CarouselCardItem = ({ index }) => {

  return (
    <View style={styles.container} key={index}>
      <LinearGradient
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 0 }}
        colors={['#14BC66', '#19214F']}
        style={[
          styles.gradientBox, { padding: 15, borderRadius:5 }]}
      >
        <View style={{ backgroundColor: COLOR.bGray, height: HEIGHT/100*48, width: '100%', borderRadius: 5, }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Location />
            <Text style={styles.address}>San Francisco ,CA</Text>
          </View>
          <TouchableOpacity style={styles.connectBox}>
            <Text style={styles.connect}>Connect</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 3 }}>
          <Text style={styles.news}>Wonderful building near London Big Ben with Amazing News</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 6 ,height:HEIGHT/100*10,}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: 50, width: 50, borderRadius: 100, backgroundColor: COLOR.bGray }}></View>
            <View style={{ marginHorizontal: 5, justifyContent: 'space-between' }}>
              <Text style={styles.name}>Olivia Redman</Text>
              <Text style={styles.address}>2 minutes ago</Text>
            </View>
          </View>
          <View style={{ justifyContent: 'space-between', alignItems: "center" }}>
            <View style={{ alignItems: "center", marginTop: -30 }}>
              <Like/>
              <Text style={styles.address}>325</Text>
            </View>
            <View style={{ marginTop:10}}><Send /></View>
            <View style={{ marginTop:10}}><Speech /></View>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  gradientBox:{
    height:HEIGHT/100*77,
    width:WIDTH/100*90,
    right:10,
  },
  connectBox: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'grey',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center'
  },
  connect: {
    color: COLOR.white,
    fontWeight: FONT_WEIGHT.semibold
  },
  news: {
    color: COLOR.white,
    fontWeight: FONT_WEIGHT.semibold,
    fontSize: FONT_SIZE.large,
    width:WIDTH/100*74
  },
  name: {
    color: COLOR.white,
    fontWeight: FONT_WEIGHT.medium,
    fontSize: FONT_SIZE.compact
  },
  address: {
    color: '#f5f5f5',
    fontSize: FONT_SIZE.small,
    marginHorizontal: 5
  },
})

export default CarouselCardItem