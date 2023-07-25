import React, { useState } from "react";
import { View, TouchableOpacity, Image, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';

import  WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Soccer from '../../assets/svg/athlete/Soccer.svg'
import { SportsList } from "../../row/data";
import JobFooter from "../../component/Bottom/JobFooter";

export default AllSports = (props) =>{

    const [modalVisible,setModalVisible] =useState(false)

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor='transparent' />
            <View style={styler.container}>
                <View style={styles.searchView}>
                    <View style={styles.searchBar}>
                        <WFSearch />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={'white'}
                            placeholder="Search for athlete / team"
                        />
                    </View>
                </View>
                <View>
                    <Text style={styler.title}>All Sports</Text>
                </View>
                <View style={{marginVertical:'5%'}}>
                <FlatList
                        data={SportsList}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        numColumns={2}
                        renderItem={({ item, index }) => 
                    <View style={styler.box}>
                        <ImageBackground 
                                source={require('../../assets/images/RingBall.png')}
                                style={styler.ring}>
                            {item.image}
                            <Text style={[styler.title,{marginTop:7}]}>{item.name}</Text>      
                        </ImageBackground>
                    </View>}/>
                </View>
            </View>
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
        width:WIDTH,
        height:HEIGHT/100*93,
        paddingHorizontal:WIDTH/100*5,
        paddingVertical:HEIGHT/100*1
    },
    title:{
        fontSize:FONT_SIZE.large,
        fontWeight:FONT_WEIGHT.regular,
        color:COLOR.black
    },
    ring:{
        height:130,
        width:130,
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        width:WIDTH/100*45,
        height:HEIGHT/100*21,
        alignItems:"center",
        justifyContent:"center"
    },
}) 