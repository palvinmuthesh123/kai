import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, Image, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';

import Job1 from '../../assets/svg/filter/Job1.svg'
import { AppointmentList, jobList } from "../../row/data";

export default UpcomingAppointments = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{marginVertical:'5%'}}>
                    <FlatList
                        data={AppointmentList}
                        // horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
            <View style={styler.container}>
                    <View style={{width:'100%',paddingVertical:10,borderBottomColor:"rgba(0, 0, 0, 0.04)",borderBottomWidth:1}}>
                        <Text style={styler.greenText}>Appointment date</Text>
                        <Text style={styler.dateText}>{item.date}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:"center",paddingVertical:10,}}>
                    <Image 
                        style={{borderRadius:100,height:50,width:50,}}
                        source={item.image}/>
                    <View style={{marginLeft:10}}>
                        <Text style={styler.name}>{item.name}</Text>
                        <Text style={{marginTop:5,fontSize:FONT_SIZE.small}}>{item.special}</Text>
                    </View>
                </View>
            </View>}/>
            </View>
        </SafeAreaView>
    )}
const styler = StyleSheet.create({
    container:{
        // height:HEIGHT/100*15,
        // paddingVertical:15,
        marginHorizontal:WIDTH/100*5,
        width:WIDTH/100*90,
        marginBottom:HEIGHT/100*2,
        paddingHorizontal:WIDTH/100*2,
        backgroundColor:'white',
        elevation:5,
        borderLeftWidth:6,
        borderRadius:10,
        borderLeftColor:"#00A962"
    },
    name:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
    },
    greenText:{
        color:'#464646',
        fontSize:FONT_SIZE.tiny,
    },
    dateText:{
        color:'#464646',
        fontSize:FONT_SIZE.small,
    },
    position:{
        color:COLOR.white,
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular
    },
    vertBox:{
        // height:HEIGHT/100*10,
        paddingVertical:10,
        width:'100%',
        borderRadius:10,
        paddingHorizontal:WIDTH/100*3,
        alignItems:'center',
        flexDirection:'row',
    },
})