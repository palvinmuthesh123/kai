import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import CampaignHeader from "../../component/header/CampaignHeader";
import { appointmentTabbar, jobTabbar } from "../../row/data"; 
import UpcomingAppointments from "./UpcomingAppointments";


import  Notification from '../../assets/svg/dashboard/notify.svg'
import JobFooter from "../../component/Bottom/JobFooter";

export default AppointmentTabbar = (props) => {

    const [change,setChange] = useState(0)
    const [modalVisible,setModalVisible] =useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <View style={styler.header}>
                <Text style={styler.heading}>Schedule</Text>
                <TouchableOpacity onPress={() =>props.navigation.push('NotificationScreen')}>
                    <Notification />
                </TouchableOpacity>
            </View>
            <View style={styler.container}>
            <View style={styler.tabbar}>
            <FlatList
                        data={appointmentTabbar}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        renderItem={({ item, index }) =>
                <TouchableOpacity 
                        onPress={() => setChange(index)}
                        style={[styler.tab,change == index ? {backgroundColor:COLOR.blue}:{backgroundColor:'#F6F6F6'}]}>
                    <Text style={[styler.tabText,change == index ? {color:'white'}:{color:'#707070'}]}>{item.data}</Text>
                </TouchableOpacity>}/>
            </View> 
            <UpcomingAppointments/>
            </View>
            <JobFooter
                    sport={true}
                    clinic={true}
                    onClick={() =>setModalVisible(!modalVisible)} 
                    visible={modalVisible}
                    prop={props}
                    onHome={() =>props.navigation.push('ClinicHomeScreen')}
                    onSecond={()=>props.navigation.push('TopSpecialist')}
                    onFourth={()=>props.navigation.push('AppointmentTabbar')}
                    onProfile={()=>props.navigation.push('ProfileScreen')}/>

        </SafeAreaView>
    )}
const styler = StyleSheet.create({
    tabbar:{
        marginHorizontal:WIDTH/100*5,
        width:WIDTH/100*90,
        height:HEIGHT/100*7,
        backgroundColor:'#F6F6F6',
        borderRadius:10
    },
    header:{
        width:WIDTH,
        height:HEIGHT/100*8,
        paddingHorizontal:WIDTH/100*5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    heading:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.semibold
    },
    tab:{
        width:WIDTH/100*45,
        height:HEIGHT/100*7,
        backgroundColor:'#F6F6F6',
        // backgroundColor:COLOR.blue,
        borderRadius:10,
        justifyContent:'center',
        alignItems:"center"
    },
    tabText:{
        color:'#707070',
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium
    },
    container:{
        width:WIDTH,
        height:HEIGHT/100*85,
    },
})