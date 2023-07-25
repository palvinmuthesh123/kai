import React, { useState } from "react";
import { View, TouchableOpacity,Image, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import CampaignHeader from "../../component/header/CampaignHeader";
import { jobList } from "../../row/data";
import JobFooter from "../../component/Bottom/JobFooter";

export default SavedJobScreen = (props) => {

    const [modalVisible,setModalVisible] =useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <CampaignHeader title={true} name={'Saved jobs'} nothing={true} />
            <View style={styler.containerBox}>
            <FlatList
                        data={jobList}
                        // horizontal={true}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                <View style={styler.container}>
                    <Image  source={require('../../assets/images/JOB.png')}/>
                    <View style={{ flexDirection: 'column', marginLeft: 10, }}>
                            <Text style={[styler.position, { color: '#000', fontWeight: '500' }]}>Senior Coordinator, Player Marketing</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
                                <Text style={[styler.position, { color: '#9699A0', }]}>MLB</Text>
                                <Text style={[styler.position, { color: '#9699A0', marginHorizontal: 15 }]}>Full Time</Text>
                                <Text style={[styler.position, { color: '#9699A0', }]}>2-5 years</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 ,}}>
                                
                                    <LinearGradient
                                        end={{ x: 1, y: 0}}
                                        start={{ x: 0, y: 2}}
                                        colors={['#14BC66', '#192D51']}
                                        style={[ styler.gradientContainer,]}>
                                        <Text style={styler.apply}>Apply</Text>
                                    </LinearGradient>
                                    
                                <TouchableOpacity 
                                style={[ styler.gradientContainer,{borderColor:'#E8311A',borderWidth:1,marginLeft:10}]}>
                                    <Text style={styler.remove}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>}/>
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
    )
}
const styler = StyleSheet.create({
    containerBox: {
        width: WIDTH,
        height: HEIGHT / 100 * 85,
    },
    container:{
        // height:HEIGHT/100*12,
        marginHorizontal:WIDTH/100*5,
        width:WIDTH/100*90,
        marginBottom:HEIGHT/100*2,
        marginTop:2,
        paddingHorizontal:WIDTH/100*2,
        paddingVertical:HEIGHT/100*2,
        backgroundColor:'white',
        elevation:5,
        alignItems:'center',
        flexDirection:'row',
        borderRadius:10,
    },
    position:{
        color:COLOR.white,
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular
    },
    vertBox:{
        height:HEIGHT/100*10,
        paddingHorizontal:WIDTH/100*3,
        paddingVertical:5,
        marginBottom:10,
    },
    gradientContainer:{
        height:25,
        width:'35%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:"center"
    },
    apply:{
        color:'white',
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.medium
    },
    remove:{
        color:'#E8311A',
        fontSize:FONT_SIZE.small,
        fontWeight:FONT_WEIGHT.regular
    },
})