import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import CampaignHeader from "../../component/header/CampaignHeader";
import { jobTabbar } from "../../row/data";
import MyRequestJobs from "./MyRequestJobs";
import JobFooter from "../../component/Bottom/JobFooter";

export default MyJobTabbar = (props) => {

    const [change,setChange] = useState(0)
    const [modalVisible,setModalVisible] =useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <CampaignHeader title={true} name={'My Request'} nothing={true}/>
            <View style={styler.container}>
            <View style={styler.tabbar}>
            <FlatList
                        data={jobTabbar}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        renderItem={({ item, index }) =>
                <TouchableOpacity 
                        onPress={() => setChange(index)}
                        style={[styler.tab,change == index ? {backgroundColor:COLOR.blue}:{backgroundColor:'#F6F6F6'}]}>
                    <Text style={[styler.tabText,change == index ? {color:'white'}:{color:'#707070'}]}>{item.data}</Text>
                </TouchableOpacity>}/>
            </View>
            <MyRequestJobs/>
            </View>
            <JobFooter
                    onClick={() =>setModalVisible(!modalVisible)} 
                    visible={modalVisible}
                    prop={props}
                    onHome={() =>props.navigation.push('JobSearch')}
                    onSecond={()=>props.navigation.push('MyJobTabbar')}
                    onFourth={()=>props.navigation.push('SavedJobScreen')}
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