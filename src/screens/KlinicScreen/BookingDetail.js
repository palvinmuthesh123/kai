import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, FlatList, Image, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import FavHeader from "../../component/header/FavHeader";

import Calender from '../../assets/svg/Clinic/Calender.svg'
import Camera from '../../assets/svg/Clinic/Camera.svg'

export default BookingDetail = (props) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <FavHeader nothing={true} title={'Booking Detail'} onPress={() => props.navigation.goBack()}/>
            <ScrollView style={styler.container}>
                <View style={[styler.titleBar,{marginTop:'3%'}]}>
                    <Text style={styler.title}>Booking info</Text>
                    <View style={styler.statusBox}>
                        <Text style={styler.confirm}>Confirmed</Text>
                    </View>
                </View>
                <View style={{alignItems:"center"}}>
                    <View style={styler.inputBox}>
                        <View style={styler.calback}>
                            <Calender/>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={[styler.title,{fontSize:14}]}>Date & Time</Text>
                            <Text style={[styler.date,{marginTop:2}]}>Mon, 20 May 2023</Text>
                            <Text style={[styler.date,{marginTop:7,fontSize:11}]}>08:00 PM</Text>
                        </View>
                    </View>

                    <View style={styler.inputBox}>
                        <View style={styler.calback}>
                            <Camera/>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={[styler.title,{fontSize:14}]}>Appointment Type</Text>
                            <Text style={[styler.date,{marginTop:2}]}>Video Call</Text>
                        </View>
                    </View>
                </View>
                
                <Text style={[styler.title,{marginVertical:'5%'}]}>Doctor info</Text>

                <View style={{flexDirection:'row',alignItems:"center",height:HEIGHT/100*13,}}>
                    <Image 
                        style={{borderRadius:100,height:80,width:80,marginTop:10}}
                        source={require('../../assets/images/Doctor.png')}/>
                    <View style={{marginLeft:10}}>
                        <Text style={styler.name}>Dr. Astrid Helena</Text>
                        <Text style={{marginTop:5,fontSize:FONT_SIZE.small}}>Cardiologist</Text>
                    </View>
                </View>

                <Text style={[styler.title,{marginVertical:'5%'}]}>Payment info</Text>
                <View style={styler.titleBar}>
                    <Text style={[styler.date,{fontSize:13}]}>Total Amount</Text>
                    <Text style={[styler.title,{fontSize:14}]}>$ 75</Text>
                </View>
                <View style={styler.titleBar}>
                    <Text style={[styler.date,{fontSize:13}]}>Tax</Text>
                    <Text style={[styler.title,{fontSize:14}]}>$ 0</Text>
                </View>

                <View style={{height:1,width:'100%',backgroundColor:"#EEEEEE",marginVertical:'3%'}}></View>

                <View style={styler.titleBar}>
                    <Text style={[styler.date,{fontSize:13}]}>Payment Total</Text>
                    <Text style={[styler.title,{fontSize:14}]}>$ 75</Text>
                </View>

            </ScrollView>
            <View style={styler.btnContainer}>
                <CustomButton title={'Proceed Payment'} onPress={() => props.navigation.push('BookingApoointment')} />
            </View>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    container: {
        height: HEIGHT / 100 * 82,
        width: WIDTH,
        paddingHorizontal: WIDTH / 100 * 5,
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    titleBar: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: '3%',
    },
    name:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
    },
    calback:{
        height:40,
        width:40,
        borderRadius:100,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.medium
    },
    date: {
        color: '#464646',
        fontSize: FONT_SIZE.small,
    },
    statusBox: {
        height: HEIGHT / 100 * 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: COLOR.green
    },
    confirm: {
        color: COLOR.white,
        fontSize: FONT_SIZE.medium,
        fontWeight: '400'
    },
    inputBox: {
        width: WIDTH / 100 * 88,
        marginVertical: HEIGHT / 100 * 1.2,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR.white,
        paddingHorizontal: 15,
        paddingVertical:15,
        borderRadius: 10,
        backgroundColor:'#F6F6F6',
        elevation: 5
    },
}) 