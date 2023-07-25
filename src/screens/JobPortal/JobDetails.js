import React, { useState } from "react";
import { View, TouchableOpacity,Image, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground, ToastAndroid } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import MainHeader from "../../component/header/MainHeader";
import FavHeader from "../../component/header/FavHeader";
import CustomButton from "../../component/Button/CustomButton";

import Build from '../../assets/svg/Job/Build.svg'
import Stat from '../../assets/svg/Job/Stat.svg'
import Credit from '../../assets/svg/Job/Credit.svg'
import Tag from '../../assets/svg/Job/Tag.svg'
import Dot from '../../assets/svg/Job/Dot.svg'
import { responses } from "../../row/data";

export default JobDetails = (props) =>{

    function applying(){
        // ToastAndroid.show('Applied Successfully',Short)
        ToastAndroid.show('Applied Successfully',ToastAndroid.SHORT)
    }

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor= "transparent" />
            <FavHeader onPress={() => props.navigation.goBack()}/>
            <ScrollView style={styler.container}>
                <View style={styler.profile}>
                    <View style={styler.imgBack}>
                        <Image 
                            style={{height:40,width:60}}
                            source={require('../../assets/images/JOB.png')}/>
                    </View>
                    <Text style={styler.role}>Senior Coordinator, Player Marketing</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styler.type}>Full Time  </Text>
                        <Text style={styler.type}> | </Text>
                        <Text style={styler.type}> Remote</Text>
                    </View>
                </View>
                <LinearGradient
                end={{ x: 1, y: 0}}
                start={{ x: 0, y: 2}}
                // colors={['#14BC66', '#192D51']}
                colors = {props.space ? ['rgba(20,188,102,0.4)','rgba(25,45,81,0.4)']:['#14BC66', '#192D51']}
                style={[
                    styler.gradientContainer,]}>
                        <View style={styler.line1}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Build />
                                <Text style={styler.tag}>New York Mets</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Stat />
                                <Text style={styler.tag}>Junior (1-2 years exp)</Text>
                            </View>
                        </View>
                        <View style={styler.line1}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Credit />
                                <Text style={styler.tag}>$22,000 - $ 55,000 USD per year</Text>
                            </View>
                        </View>
                        <View style={styler.line1}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Tag />
                                <Text style={styler.tag}>Account Management</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Tag />
                                <Text style={styler.tag}>Baseball</Text>
                            </View>
                        </View>

                        <View style={styler.line1}>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Tag />
                                <Text style={styler.tag}>Business Development</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Tag />
                                <Text style={styler.tag}>MLB</Text>
                            </View>
                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Tag />
                                <Text style={styler.tag}>Sales</Text>
                            </View>
                        </View>
                </LinearGradient>

                <View>
                    <Text style={[styler.role,{color:COLOR.blue}]}>Description</Text>
                    <View style={{marginVertical:5,}}>
                        <Text>Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley of type and scrambled it to 
                            make a type specimen book. It has survived not only five 
                            centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 
                            1960s with the release of Letraset sheets containing Lorem 
                            Ipsum passages, and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem 
                            Ipsum.</Text>
                    </View>

                    <Text style={[styler.role,{color:COLOR.blue}]}>Job Responsibilities</Text>
                    <View style={{marginVertical:10,}}>
                    <FlatList
                            style={{}}
                            data={responses}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                        <View style={{flexDirection:'row',marginBottom:5}}>
                            <Text>•  </Text>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>}/>
                    </View>
                </View>
            </ScrollView>


            <View  style={styler.btnContainer}>
                <CustomButton title={'Apply'} onPress={() => applying()}/>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container:{
        height:HEIGHT/100*82,
        width:'100%',
        // paddingVertical:HEIGHT/100*2,
        paddingHorizontal:WIDTH/100*5,
        // backgroundColor:'red',
    },
    btnContainer:{
        height:HEIGHT/100*10,
        width:'100%',
        alignItems:"center",
        justifyContent:'center'
    },
    profile:{
        marginTop:HEIGHT/100*2,
        height:HEIGHT/100*15,
        width:'100%',
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    imgBack:{
        height:60,
        width:60,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    role:{
       color:COLOR.black,
       fontSize:FONT_SIZE.large, 
       fontWeight:FONT_WEIGHT.medium,
       marginVertical:5
    },
    type:{
        color:'#9699A0',
        fontSize:FONT_SIZE.compact, 
     },
     gradientContainer: {
        // height: HEIGHT / 100 * 25,
        width: WIDTH / 100 * 90,
        borderRadius: 10,
        marginVertical:10,
        paddingVertical:10,
        paddingHorizontal:10,
        // alignItems: "center",
        // justifyContent: 'center',
    },
    line1:{
        flexDirection:'row',
        alignItems:'center',
        width:'95%',
        marginVertical:7,
        justifyContent:"space-between"
    },
    tag:{
        color:'#BFC2C8',
        fontSize:FONT_SIZE.medium, 
        marginLeft:5,
    },

})