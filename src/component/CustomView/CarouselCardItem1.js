import React from 'react'
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from "react-native"
import { WIDTH, FONT_SIZE, COLOR, FONT_WEIGHT, HEIGHT } from '../../theme/typography'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85)

const CarouselCardItem1 = ({ item, index }) => {

  return (
    <View style={styles.container} key={index}>
      <View style={{}}>
        <Text style={styles.title1}>
          <Text style={styles.title}>{item.title} </Text> {item.title1}
        </Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: ITEM_WIDTH,
    paddingBottom: HEIGHT * 5 / 100,
  },
  title: {
    fontSize: FONT_SIZE.higantic,
    color: COLOR.blue,
    fontWeight: FONT_WEIGHT.bold,
  },
  title1: {
    fontSize: FONT_SIZE.huge,
    color: COLOR.blue,
    fontWeight: FONT_WEIGHT.semi_light,
    textAlign: 'center',
    lineHeight: 40
  },
  content: {
    textAlign: 'center',
    color: 'grey',
    fontSize: FONT_SIZE.medium,
    marginTop: 20,
    width: WIDTH * 80 / 100
  },
})

export default CarouselCardItem1