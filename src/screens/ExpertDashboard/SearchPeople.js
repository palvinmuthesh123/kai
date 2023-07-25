import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import MainHeader from "../../component/header/MainHeader";

import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Big from '../../assets/svg/message/BigBoy.svg'
import Add from '../../assets/svg/message/Add.svg'
import Small from '../../assets/svg/message/SmallBoy.svg'
import Girl from '../../assets/svg/message/Girl.svg'
import { MessageList, activeList } from "../../row/data";

export default SearchPeople = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <MainHeader title={'Siyona'} message={true} />
            <View style={styler.container}>
                <View style={[styles.searchView, { width: WIDTH, height: HEIGHT / 100 * 5, marginVertical: '5%', }]}>
                    <View style={styles.searchBar}>
                        <WFSearch />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={'white'}
                            placeholder="Search for People"
                        />
                    </View>
                </View>
                <View style={styler.activeView}>
                    <View style={styler.activeOne}>
                        <View style={styler.pro}>
                            <Girl />
                        </View>
                        <LinearGradient
                end={{ x: 0, y: 0 }}
                start={{ x: 1, y: 1.5 }}
                colors={['#14BC66', '#19214F']}
                style={styler.gradientBox} >
                        <Add/>
                        </LinearGradient>
                    </View>
                    <FlatList
                        data={activeList}
                        horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <View style={[styler.activeOne, { marginLeft: 20 }]}>
                                <View style={styler.pro}>
                                    {item.image}
                                </View>
                                <View style={styler.actSym}></View>
                                <Text style={styler.name}>{item.name}</Text>
                            </View>} />
                </View>

                <View style={{flex:1,width:'100%',paddingHorizontal:'5%',paddingVertical:'5%'}}>
                    <Text style={[styler.name,{fontSize:FONT_SIZE.compact}]}>Messages</Text>
                    <ScrollView style={styler.mesList}>
                    <FlatList
                        data={MessageList}
                        // horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                        <View style={{flexDirection:'row',alignItems:'center',marginBottom:15}}>
                            <View style={styler.smallPro}>
                                {item.image}
                            </View>
                            <View style={{flexDirection:'column',marginLeft:10}}>
                                <Text style={[styler.name,{fontSize:FONT_SIZE.compact}]}>{item.name}</Text>
                                <View style={{flexDirection:'row',alignItems:'center',top:2}}>
                                    <Text style={{fontSize:FONT_SIZE.small}}>{item.message}</Text>
                                    <Text style={{fontSize:FONT_SIZE.small}}> {item.time}</Text>
                                </View>
                            </View>
                        </View>}/>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: '100%',
        height: HEIGHT / 100 * 93,
    },
    activeView: {
        height: HEIGHT / 100 * 15,
        width: '100%',
        borderBottomColor: COLOR.lightGray,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3%',
    },
    activeOne: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginLeft: 10,
        height: HEIGHT / 100 * 14
    },
    pro: {
        height: 60,
        width: 60,
        backgroundColor: 'grey',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallPro:{
        height: 45,
        width: 45,
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actSym:{
        width:10,
        height:10,
        backgroundColor:"#00A962",
        borderRadius: 100,
        marginTop:-20,
        left:23
    },
    name:{
         color: 'black', 
         fontWeight: FONT_WEIGHT.semibold,
    },
    mesList:{
      width:'100%',
      paddingVertical:'5%'
    //   backgroundColor:'yellow'  
    },
    gradientBox:{
        height:25,
        width:25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:50,
        marginTop:-15,
        top:-15,
        marginLeft:40
    },
})