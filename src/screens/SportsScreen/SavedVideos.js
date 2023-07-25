import React, { useState } from "react";
import { View, TouchableOpacity, Image, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import CampaignHeader from "../../component/header/CampaignHeader";
import { introVideos } from "../../row/data";
import JobFooter from "../../component/Bottom/JobFooter";

export default SavedVideos = (props) =>{

    const [modalVisible,setModalVisible] =useState(false)

    return(
        <SafeAreaView  style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor='transparent' />
            <CampaignHeader title={true} name={'Saved Videos'} nothing={true} />
            <ScrollView style={styler.container}>
                <FlatList
                        data={introVideos}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        // numColumns={2}
                        renderItem={({ item, index }) =>   
                <View style={styler.box}>
                    <View style={styler.imgPart}>
                        <Image 
                            source={require('../../assets/images/PlayBack.png')}
                            style={{width:'95%',height:'100%',borderRadius:10}}/>
                    </View>
                    <View style={{marginLeft:5}}>
                        <Text style={styler.num}>#2</Text>
                        <Text style={styler.num}>Introduction</Text>
                        <Text style={styler.duration}>3 modules . 37 mins</Text>
                        <Text style={[styler.duration,{color:'#DE2B2B'}]}>Remove</Text>
                    </View>
                </View>}/>
            </ScrollView>
            <JobFooter
                    sport={true}
                    onClick={() =>setModalVisible(!modalVisible)} 
                    visible={modalVisible}
                    prop={props}
                    onHome={() =>props.navigation.push('SportsHomeScreen')}
                    onSecond={()=>props.navigation.push('AllSports')}
                    onFourth={()=>props.navigation.push('SavedVideos')}
                    onProfile={()=>props.navigation.push('ProfileScreen')}/>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container:{
        height:HEIGHT/100*85,
        paddingHorizontal:WIDTH/100*5,
        paddingVertical:HEIGHT/100*2,
        width:WIDTH,
    },
    box:{
        width:WIDTH/100*89,
        // height:HEIGHT/100*15,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        marginVertical:10,
        marginHorizontal:2,
        // backgroundColor:'red',
        borderRadius:10,
        backgroundColor:COLOR.white,
        elevation:5
    },
    imgPart:{
        width:'40%',
        height:70
    },
    num:{
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.semibold,
        color:'#464646'
    },
    duration:{
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular,
        color:'#464646'
    },
}) 