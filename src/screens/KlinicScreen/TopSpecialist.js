import React, { useState } from "react";
import { View, TouchableOpacity, Image, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';

import  WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Filter from '../../assets/svg/dashboard/Filter.svg'
import Disease1 from '../../assets/svg/Clinic/disease1.svg'
import Disease2 from '../../assets/svg/Clinic/disease2.svg'
import Disease3 from '../../assets/svg/Clinic/disease3.svg'
import { injuryList, issuesList } from "../../row/data";
import JobFooter from "../../component/Bottom/JobFooter";

export default TopSpecialist = (props) =>{

    const [modalVisible,setModalVisible] =useState(false)

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <View style={styler.container}>
                <View style={[styles.searchView]}>
                    <View style={styler.searchBar}>
                        <WFSearch />
                        <TextInput
                            style={[styles.input,{top:2}]}
                            placeholderTextColor={'white'}
                            placeholder="Search for athlete / team"
                        />
                    </View>
                </View>
                <View style={styler.titleBar}>
                    <Text style={styler.title}>Choose from Top Specialities</Text>
                    <TouchableOpacity 
                            onPress={() => props.navigation.push('ClinicFilter')}
                            >
                        <ImageBackground
                            style={{ height: 35, width: 44, alignItems: 'center', justifyContent: "center",marginLeft:10, }}
                            source={require('../../assets/images/fillBox.png')}
                        >
                            <Filter />
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <ScrollView>    
                    <View style={styler.greenBar}>
                        <Text style={styler.greenTitle}>Sports Medicine Physicians</Text>
                    </View>
                    <View style={{marginVertical:'3%'}}>

                        <FlatList
                            data={injuryList}
                            // horizontal={true}
                            numColumns={4}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                        <View style={{width:WIDTH/100*25,height:100,alignItems: 'center', justifyContent: "center",paddingHorizontal:10}}>
                            <View style={styler.issueBox}>
                                {item.image}
                            </View>
                            <Text style={{color:"#464646",fontSize:12,textAlign:'center'}}>Overuse Injuries</Text>
                        </View>}/>
                    </View>

                    <View style={styler.greenBar}>
                        <Text style={styler.greenTitle}>Orthopedist</Text>
                    </View>
                    <View style={{marginVertical:'3%'}}>

                        <FlatList
                            data={injuryList}
                            // horizontal={true}
                            numColumns={4}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                        <View style={{width:WIDTH/100*25,height:100,alignItems: 'center', justifyContent: "center",paddingHorizontal:10}}>
                            <View style={styler.issueBox}>
                                {item.image}
                            </View>
                            <Text style={{color:"#464646",fontSize:12,textAlign:'center'}}>Overuse Injuries</Text>
                        </View>}/>
                    </View>
                </ScrollView>
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
    )
}
const styler = StyleSheet.create({
    container:{
        width:WIDTH,
        height:HEIGHT/100*93,
        paddingVertical:HEIGHT/100*2
    },
    searchBar: {
        backgroundColor: COLOR.green,
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        marginHorizontal:WIDTH/100*5,
        height: HEIGHT / 100 * 4.7,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    titleBar:{
        paddingVertical:'5%',
        paddingHorizontal:'5%',
        width:'100%',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center'
    },
    title:{
        color:'black',
        fontSize:FONT_SIZE.large,
        fontWeight:FONT_WEIGHT.semibold
    },
    issueBox:{
        height:55,
        width:55,
        borderRadius:100,
        backgroundColor:COLOR.white,
        elevation:5,
        alignItems:'center',
        justifyContent:"center"
    },
    greenBar:{
        width:WIDTH,
        height:HEIGHT/100*4,
        backgroundColor:COLOR.green,
        paddingHorizontal:'5%',
        justifyContent:'center'
    },
    greenTitle:{
        color:COLOR.white,
        fontWeight:FONT_WEIGHT.semibold,
        fontSize:FONT_SIZE.medium,
    },
}) 