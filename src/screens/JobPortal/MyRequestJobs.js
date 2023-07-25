import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';

import Job1 from '../../assets/svg/filter/Job1.svg'
import { jobList } from "../../row/data";

export default MyRequestJobs = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            
            <FlatList
                        data={jobList}
                        // horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
            <View style={styler.container}>
                    <View style={{width:'100%',height:'30%',borderBottomColor:"rgba(0, 0, 0, 0.04)",borderBottomWidth:1}}>
                        <Text style={styler.greenText}>Application viewed 9w ago</Text>
                    </View>
                    <View style={styler.vertBox}>
                        <Job1 />
                        <View style={{flexDirection:'column',marginLeft:10,}}>
                            <Text style={[styler.position,{color:'#000',fontWeight:'500'}]}>Senior Coordinator, Player Marketing</Text>
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:3}}>
                                <Text style={[styler.position,{color:'#9699A0',}]}>MLB</Text>
                                <Text style={[styler.position,{color:'#9699A0',marginHorizontal:15}]}>Full Time</Text>
                                <Text style={[styler.position,{color:'#9699A0',}]}>2-5 years</Text>
                            </View>
                        </View>
                    </View>
            </View>}/>
        </SafeAreaView>
    )}
const styler = StyleSheet.create({
    container:{
        height:HEIGHT/100*15,
        marginHorizontal:WIDTH/100*5,
        width:WIDTH/100*90,
        marginTop:HEIGHT/100*2,
        paddingHorizontal:WIDTH/100*2,
        paddingVertical:HEIGHT/100*2,
        backgroundColor:'white',
        elevation:5,
        borderLeftWidth:6,
        borderRadius:10,
        borderLeftColor:"#00A962"
    },
    greenText:{
        color:COLOR.green,
        fontSize:FONT_SIZE.small,
    
    },
    position:{
        color:COLOR.white,
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular
    },
    vertBox:{
        height:HEIGHT/100*10,
        width:'100%',
        borderRadius:10,
        paddingHorizontal:WIDTH/100*3,
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:5,
        marginBottom:10,
    },
})