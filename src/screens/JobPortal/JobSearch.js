import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import CustomBarHeader from "../../component/header/CustomBarHeader";

import Filter from '../../assets/svg/dashboard/Filter.svg'
import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Job from '../../assets/svg/filter/Job.svg'
import Job1 from '../../assets/svg/filter/Job1.svg'
import { jobTypeList , jobList} from "../../row/data";
import JobDetails from "./JobDetails";
import JobFooter from "../../component/Bottom/JobFooter";

export default JobSearch = (props) => {

    const [modalVisible,setModalVisible] =useState(false)

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <StatusBar backgroundColor="transparent" />
            <CustomBarHeader 
                    name={'Hi Albert'}
                    onClick={() => props.navigation.push('NotificationScreen')} />
            <ScrollView style={styler.container}>
                <View style={styler.searchView}>
                    <View style={styler.searchBar}>
                        <WFSearch />
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'white'}
                            placeholder="Search for athlete / team"
                        />
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.push('JobFilter')}>
                        <ImageBackground
                            style={{ height: 35, width: 44, alignItems: 'center', justifyContent: "center",marginLeft:10, }}
                            source={require('../../assets/images/fillBox.png')}
                        >
                            <Filter />
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <Text style={styler.discover}>Popular Company</Text>
                <View style={{marginLeft:WIDTH/100*5}}>
                <FlatList
                        data={jobList}
                        horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                <TouchableOpacity 
                        onPress={() => props.navigation.push('JobDetails')}
                        style={styler.horiBox}>
                    <View style={styler.logo}>
                        <Job/>
                        <Text style={styler.salary}>$22K - $55K</Text>
                    </View>
                    <Text style={[styler.position,{color:'#DFE0E0'}]}>Senior Coordinator, Player Marketing</Text>
                    <Text style={[styler.position,{fontSize:FONT_SIZE.medium,marginVertical:5}]}>MLB</Text>
                        <View style={{flexDirection:"row",alignItems:'center'}}>
                            <View style={{backgroundColor:COLOR.green,paddingHorizontal:10,borderRadius:5,paddingVertical:2,marginHorizontal:5,width:70}}>
                                <Text style={[styler.position,{}]}>2-5 years</Text>
                            </View>
                            <View style={{backgroundColor:COLOR.green,paddingHorizontal:10,borderRadius:5,paddingVertical:2,marginHorizontal:5,width:70}}>
                                <Text style={[styler.position,{}]}>Full Time</Text>
                            </View>
                            <View style={{backgroundColor:COLOR.green,paddingHorizontal:10,borderRadius:5,paddingVertical:2,marginHorizontal:5,width:70}}>
                                <Text style={[styler.position,{}]}>Remote</Text>
                            </View>
                        </View>
                </TouchableOpacity>}/>
                </View>

                <Text style={styler.discover}>Job Updates</Text>
                <View style={{marginHorizontal:WIDTH/100*5}}>
                <FlatList
                        data={jobList}
                        // horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                    <TouchableOpacity 
                            onPress={() => props.navigation.push('JobDetails')}
                            style={styler.vertBox}>
                        <Job1 />
                        <View style={{flexDirection:'column',marginLeft:10,}}>
                            <Text style={[styler.position,{color:'#000',fontWeight:'500'}]}>Senior Coordinator, Player Marketing</Text>
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:3}}>
                                <Text style={[styler.position,{color:'#9699A0',}]}>MLB</Text>
                                <Text style={[styler.position,{color:'#9699A0',marginHorizontal:15}]}>Full Time</Text>
                                <Text style={[styler.position,{color:'#9699A0',}]}>2-5 years</Text>
                            </View>
                        </View>
                    </TouchableOpacity>}/>
                </View>

            </ScrollView>
            <JobFooter
                    onClick={() =>setModalVisible(!modalVisible)} 
                    visible={modalVisible}
                    prop={props}
                    onHome={() =>props.navigation.push('JobSearch')}
                    onSecond={()=>props.navigation.push('MyJobTabbar')}
                    onFourth={()=>props.navigation.push('SavedJobScreen')}
                    onProfile={()=>props.navigation.push('ProfileScreen')}/>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    searchView: {
        flexDirection: "row",
        width: WIDTH / 100 * 90,
        height: HEIGHT / 100 * 5,
        paddingHorizontal:WIDTH/100*5,
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchBar: {
        backgroundColor: COLOR.green,
        flexDirection: "row",
        alignItems: "center",
        width: WIDTH / 100 * 77,
        height: HEIGHT / 100 * 4.7,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    horiBox:{
        height:HEIGHT/100*22,
        width:'70%',
        backgroundColor:COLOR.blue,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
        marginRight:5,
        flex: 1
    },
    vertBox:{
        height:HEIGHT/100*10,
        width:'100%',
        borderRadius:10,
        paddingHorizontal:WIDTH/100*3,
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:5,
        marginBottom:10,
        backgroundColor:'rgba(112, 112, 112, 0.1)',
    },
    container: {
        width: WIDTH,
        height: HEIGHT/100*85,
        paddingVertical:HEIGHT/100*2
    },
    input: {
        fontSize: 13,
        top: 3,
    },
    logo:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        width:'100%'
    },
    discover: {
        fontSize: FONT_SIZE.large,
        fontWeight: FONT_WEIGHT.medium,
        color: '#000000',
        marginLeft:WIDTH/100*5,
        marginVertical:15,
    },
    salary:{
        color:COLOR.white,
        fontSize:FONT_SIZE.large,
        fontWeight:FONT_WEIGHT.medium,
        marginTop:5
    },
    position:{
        color:COLOR.white,
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular
    },
})