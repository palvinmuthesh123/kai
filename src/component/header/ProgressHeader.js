import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';

import Back from '../../assets/svg/register/back.svg'
import Progress from '../../assets/svg/register/Progress.svg'
import Progress1 from '../../assets/svg/register/Progress1.svg'

export default ProgressHeader = (props) => {
    return (
        <View style={styles.container}>
      <View 
        style={styles.mainView}>
      
        <LinearGradient
                end={{ x: 1, y: 0 }}
                start={{ x: 0, y: 0 }}
                // colors={['#14BC66', '#192D51']}
                colors = {props.space ? ['rgba(20,188,102,0.4)','rgba(25,45,81,0.4)']:['#14BC66', '#192D51']}
                style={[
                    styles.gradientContainer,
                    props.one ?{width:'25%'}:props.two ?{width:'50%'}:props.three ?{width:'75%'}:{}]}>
                    <Text style={styles.btnText}>{props.title}</Text>
                </LinearGradient>
      </View>
    </View>
  )};

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer:{
    width:'100%',
    borderRadius: 10,
  },
  mainView:{
    width: WIDTH/100*96,
    height: 6,
    backgroundColor: '#f5f5f5',
    borderColor:'#f5f5f5',
    borderWidth: 0.2,
    borderRadius: 10,
  },
  box: {
    width: WIDTH/100*96,
    height: 5,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 7.0,
  },
});