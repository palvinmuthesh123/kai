import React, { useState } from "react";
import { View, TouchableOpacity, Image, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';

import  WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Filter from '../../assets/svg/dashboard/Filter.svg'
import Back from '../../assets/svg/filter/Back.svg'
import BStar from '../../assets/svg/athlete/StarBig.svg'
import LinearGradient from "react-native-linear-gradient";
import { docList, docProfile } from "../../row/data";

export default DoctorList = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar 
                onPress={() => props.navigation.goBack()}
                backgroundColor='transparent' />
            <View style={styler.container}>
            <View style={{paddingHorizontal:WIDTH/100*5}}>
                <View style={[styles.searchView, { height: HEIGHT / 100 * 5, }]}>
                    <TouchableOpacity 
                    onPress={() => props.navigation.goBack()}
                    style={{ width: WIDTH / 100 * 10 }}>
                        <Back />
                    </TouchableOpacity>
                    <View style={[styles.searchBar, { height: HEIGHT / 100 * 4.5, }]}>
                        <WFSearch />
                        <TextInput
                            style={[styles.input, { fontSize: 12, color: 'white', top: 2, }]}
                            placeholderTextColor={'white'}
                            placeholder="Search for athlete / team"
                        />
                    </View>
                </View>
            </View>
                <View style={styler.titleBar}>
                    <Text style={styler.title}>Popular Doctor</Text>
                    <TouchableOpacity
                    // onPress={() => props.navigation.push('JobFilter')}
                    >
                        <ImageBackground
                            style={{ height: 35, width: 44, alignItems: 'center', justifyContent: "center", marginLeft: 10, }}
                            source={require('../../assets/images/fillBox.png')}
                        >
                            <Filter />
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <ScrollView style={{marginHorizontal:'5%'}}>
                    <FlatList
                            style={{}}
                            data={docList}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                    <View style={styler.box}>
                        <View style={styler.line1}>
                            <View style={{width:'33%',alignItems:'center',justifyContent:'center'}}>
                                <Image 
                                    source={item.image}
                                    style={{height:100,width:100,}}/>
                            </View>
                            <View style={{paddingLeft:10,width:'67%',}}>
                                <Text style={styler.name}>{item.name}</Text>
                                <View style={{width:'100%',flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={{marginTop:5,fontSize:FONT_SIZE.medium}}>{item.special}</Text>
                                    <Text style={{marginTop:5,fontSize:FONT_SIZE.medium,color:'#464646'}}>{item.exp}</Text>
                                </View>
                                <View style={styler.ratingPanel}>
                                    <Text style={styler.rating}>{item.star}</Text>
                                    <BStar/>
                                </View>
                            </View>
                        </View>
                        <View style={styler.line2}>
                                <LinearGradient
                                    end={{ x: 1, y: 0}}
                                    start={{ x: 0, y: 2}}
                                    colors={['#14BC66', '#192D51']}
                                    style={[ styler.gradientContainer,]}>
                                    <Text style={styles.apply}>Book</Text>
                                </LinearGradient>

                                <View style={[ styler.gradientContainer,{borderColor:'#19214F',borderWidth:2}]}>
                                    <Text style={styles.remove}>View</Text>
                                </View>
                        </View>
                    </View>}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT,
        paddingVertical: HEIGHT / 100 * 2
    },
    searchBar: {
        backgroundColor: COLOR.green,
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        marginHorizontal: WIDTH / 100 * 5,
        height: HEIGHT / 100 * 4.7,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    titleBar: {
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: FONT_SIZE.large,
        fontWeight: FONT_WEIGHT.semibold
    },
    box:{
        width:'98%',
        marginTop:10,
        backgroundColor:COLOR.white,
        elevation:3,
        padding:10,
        margin:3,
        borderRadius:5
    },
    line1:{
        flexDirection:"row",
        width:'100%',
        alignItems:"center",
    },
    line2:{
        flexDirection:"row",
        width:'100%',
        justifyContent:'space-between',
        alignItems:"center",
        marginTop:10
    },
    name:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
    },
    ratingPanel:{
        height:25, width:40,
        backgroundColor:COLOR.green,
        borderRadius:5,
        marginTop:5,
        alignItems:"center",
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:5,
    },
    rating:{
        color:'white',
        fontSize:10,
    },
    gradientContainer:{
        height:40,
        width:'45%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:"center"
    },
}) 