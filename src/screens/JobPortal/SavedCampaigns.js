import React, { useState } from "react";
import { View, TouchableOpacity,  Text, FlatList, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import CampaignHeader from "../../component/header/CampaignHeader";
import { allCampaign } from "../../row/data";
import CustomFooter from "../../component/Bottom/CustomFooter";
import MainModal from '../../component/Modal/MainModal'

export default SavedCampaigns = (props) => {

    const [modalVisible,setModalVisible] =useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <CampaignHeader title={true} name={'Saved Campaigns'} nothing={true} />
            <View style={styler.containerBox}>
            <FlatList
                        data={allCampaign}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        renderItem={({ item, index }) =>   
                <View style={styler.container}>
                    <View style={{height:'100%',width:'35%',alignItems:'center'}}>
                        <ImageBackground
                                source={require('../../assets/images/Image3.png')}
                                style={styler.Image}>
                            <View style={styler.dateBox}>
                                <Text style={{width:30,textAlign:'center',fontSize:11,}}> Feb 09</Text>
                                <Text> -</Text>
                                <Text style={{width:30,textAlign:'center',fontSize:11,}}> Mar 11</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{height:'100%',width:'60%',marginHorizontal:'3%'}}>
                        <Text style={styler.place}>Aspen, Colorado, USA</Text>
                        <View style={{marginVertical:5,}}>
                            <Text style={[styles.BigTitle,{lineHeight:28}]}>Winter X Games 26 - Extreme Sports</Text>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 3 ,}}>
                                <LinearGradient
                                    end={{ x: 1, y: 0}}
                                    start={{ x: 0, y: 2}}
                                    colors={['#14BC66', '#192D51']}
                                    style={[ styler.gradientContainer,]}>
                                    <Text style={styler.apply}>Join</Text>
                                </LinearGradient>
                                <View style={[ styler.gradientContainer,{borderColor:'#E8311A',borderWidth:1,marginTop:10}]}>
                                    <Text style={styler.remove}>Remove</Text>
                                </View>
                            </View>
                        
                    </View>
                </View>}/>
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
    container:{
        height:HEIGHT/100*28,
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
    Image:{
        width:'100%',
        height:'100%',
        borderRadius:10,
        overflow:'hidden',
        alignItems:"flex-start",
        justifyContent:"flex-end"
    },
    dateBox:{
        height:30,
        width:70,
        borderRadius:6,
        backgroundColor:'#D7f6E9',
        margin:3,
        // paddingHorizontal:1,
        flexDirection:"row",
        justifyContent:'space-evenly',
        alignItems:"center"
    },
    place:{
        color:'#464646',
        fontSize:FONT_SIZE.medium,
    },
    gradientContainer:{
        height:40,
        width:'90%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:"center"
    },
    apply:{
        color:'white',
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.medium
    },
    remove:{
        color:'#E8311A',
        fontSize:FONT_SIZE.medium,
        fontWeight:FONT_WEIGHT.regular
    },
})