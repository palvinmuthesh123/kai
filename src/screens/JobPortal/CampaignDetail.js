import React, { useState } from "react";
import { View, TouchableOpacity, Image, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import MainHeader from "../../component/header/MainHeader";

import Location from '../../assets/svg/Job/Location.svg'
import Calender from '../../assets/svg/filter/Calender.svg'
import { allCampaign, eligibleSports } from "../../row/data";

export default CampaignDetail = (props) =>{
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.primary} />
            <MainHeader  
            share={true} 
            onPress={() => props.navigation.goBack()}
            title={'Winter X Games 26 '}/>
            <ScrollView style={styler.container}>
                <Image 
                    style={{borderRadius:10,elevation:3,height:HEIGHT/100*25,width:'100%'}}
                    source={require('../../assets/images/Image3.png')}/>
                <View style={{paddingVertical:'5%'}}>
                    <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>Winter X Games 26 </Text>
                    <View style={{flexDirection:'row',alignItems:"center",marginTop:5}}>
                        <Location/>
                        <Text style={styler.address}>Aspen, Colorado, USA</Text>
                    </View>
                </View>
                <View style={styler.bigBox}>
                    <View style={[styler.smallBox,{}]}>
                        <Calender/>
                        <View style={{marginLeft:5}}> 
                            <Text>Start Date</Text>
                            <Text style={styler.date}>12/02/2023</Text>
                        </View>
                    </View>

                    <View style={[styler.smallBox,{}]}>
                        <Calender/>
                        <View style={{marginLeft:5}}> 
                            <Text>End Date</Text>
                            <Text style={styler.date}>12/02/2023</Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingVertical:'5%'}}>
                    <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>Eligible Sports</Text>
                    <View style={{marginVertical:'5%'}}>
                    <FlatList
                        data={eligibleSports}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        renderItem={({ item, index }) =>
                        <View style={{width:WIDTH/100*18,alignItems:"center",marginRight:10}}>
                            <View style={{height:50,width:50,backgroundColor:'#D9D9D9',borderRadius:100,}}></View>
                            <View style={{height:40,marginTop:5}}>
                                <Text style={styler.address}>{item.name}</Text>
                            </View>
                        </View>}/>
                    </View>
                </View>

                <View style={{}}>
                    <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>About </Text>
                    <View style={{marginVertical:'5%'}}>
                        <Text style={styler.address}>
                            Lorem Ipsum is simply dummy text of the printing and 
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
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width:WIDTH,
        paddingHorizontal:WIDTH/100*5,
        paddingVertical:HEIGHT/100*2,
        height:HEIGHT/100*92
    },
    address:{
        marginLeft:2,
        color:'#464646',
        fontSize:FONT_SIZE.medium
    },
    date:{
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.medium,
        color:COLOR.black,
        marginTop:3
    },
    smallBox: {
        marginVertical: HEIGHT / 100 * 1.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 10,
        width:WIDTH/100*43, justifyContent:'flex-start'
    },
    bigBox:{
        marginVertical:3,
        flexDirection:"row",
        marginHorizontal:3,
        justifyContent:'space-between',
        elevation: 5,
        paddingVertical:10,
        paddingHorizontal: 5,
        borderRadius: 10,
        backgroundColor: COLOR.white,
    },
}) 