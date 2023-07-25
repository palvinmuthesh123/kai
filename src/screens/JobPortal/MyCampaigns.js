import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import CampaignHeader from "../../component/header/CampaignHeader";
import CustomFooter from "../../component/Bottom/CustomFooter";

export default MyCampaigns = (props) => {

    const [modalVisible,setModalVisible] =useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <CampaignHeader title={true} name={'My Campaigns'} nothing={true} />
            <View style={styler.containerBox}>

            <View style={styler.camBox}>
                    <View style={{height:HEIGHT/100*20,alignItems:"center",justifyContent:'center'}}>
                        <ImageBackground 
                                source={require('../../assets/images/Image3.png')}
                                style={{height:'100%',width:'100%',alignItems:"flex-start",justifyContent:"flex-end"}}>
                            <View style={styler.dateBox}>
                                <Text style={{width:30,textAlign:'center',fontSize:11,}}> Feb 09</Text>
                                <Text> -</Text>
                                <Text style={{width:30,textAlign:'center',fontSize:11,}}> Mar 11</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styler.detailBox}>
                        <View style={[styler.header,{marginVertical: '2%',}]}>
                            <Text style={styler.place}>Aspen, Colorado, USA</Text>
                            <Text style={styler.status}>Joined</Text>
                        </View>
                        <Text style={styles.BigTitle}>Winter X Games 26 -Extreme Sports</Text>
                    </View>
                </View>
            </View>
            <CustomFooter 
                onClick={() =>setModalVisible(!modalVisible)} 
                    visible={modalVisible}
                    prop={props}
                    onHome={() =>props.navigation.push('CampaignScreen')}
                    onSecond={()=>props.navigation.push('MyCampaigns')}
                    onFourth={()=>props.navigation.push('SavedCampaigns')}
                    onProfile={()=>props.navigation.push('ProfileScreen')}/>
        </SafeAreaView>
    )}
const styler = StyleSheet.create({
    containerBox: {
        width: WIDTH,
        height: HEIGHT / 100 * 85,
        alignItems:'center'
    },
    dateBox:{
        height:40,
        width:80,
        borderRadius:10,
        backgroundColor:'#D7f6E9',
        margin:15,
        paddingHorizontal:2,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center"
    },
    btn: {
        width: WIDTH / 100 * 60,
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems:'center'
    },
    camBox:{
        width: WIDTH / 100 * 89,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor:'white',
        elevation:3
    },
    status:{
        color:COLOR.blue,
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.semibold,
        marginLeft:20,
    },
    detailBox:{
        width: WIDTH / 100 * 89,
        paddingVertical: 5,
        paddingBottom:15,
        paddingHorizontal: 15,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '5%',
    },
    place:{
        color:'#464646',
        fontSize:FONT_SIZE.medium,
    },
})