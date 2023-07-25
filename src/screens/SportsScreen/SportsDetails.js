import React, { useEffect, useRef } from "react";
import { SafeAreaView, StatusBar, FlatList, Image, View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import MainHeader from "../../component/header/MainHeader";
import Video from 'react-native-video';

import Play from '../../assets/svg/athlete/PlayBtn.svg'
import SStar from '../../assets/svg/athlete/SmallStar.svg'
import BStar from '../../assets/svg/athlete/StarBig.svg'
import { allSports } from "../../row/data";

export default SportsDetails = (props) => {

    const player = useRef();

    const lapsList = (num) => {

        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(i)
        }
        return arr.map((data) => {
            return (
                <View style={{marginTop:'3%',marginRight:4}}>
                        <SStar/>
                    </View> 
            )
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.primary} />
            <MainHeader
                    onPress={() => props.navigation.goBack()}  
                    share={true} title={'Soccer'}/>
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={styler.container}>
                <View style={styles.bannerView}>
                    <ImageBackground
                            source={require('../../assets/images/PlayBack.png')}
                            style={styles.bannerImg} 
                            imageStyle={{borderRadius:20}}>
                        <Play />
                    </ImageBackground>
                </View>
                <View style={{marginTop:'5%'}}>
                    <Text style={styles.title}>Details</Text>
                    <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
                </View>

                <View style={{marginTop:'5%'}}>
                    <Text  style={styles.title}>Seasons (1)</Text>
                    <Text style={styles.content}>We are updating,so should you.</Text>
                </View>

                <View style={{marginTop:'5%'}}>
                <FlatList
                        data={allSports}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        numColumns={2}
                        renderItem={({ item, index }) =>   
                    <TouchableOpacity 
                            onPress={()=> props.navigation.push('SportsIntroduction')}
                            style={styler.ImgBack}>
                    <ImageBackground
                            source={require('../../assets/images/PlayBack.png')}
                            style={{width:'100%',height:80,justifyContent:'flex-end',padding:5}} 
                            imageStyle={{borderRadius:10}}>
                        <Text style={styler.miniText}>#1</Text>
                        <Text style={styler.miniText}>Introduction</Text>
                        <Text style={styler.rating}>3 modules . 37 mins</Text>
                    </ImageBackground>
                    </TouchableOpacity>}/>
                </View>

                <View style={{marginTop:'5%'}}>
                    <Text style={styles.title}>Professionals</Text>
                    <FlatList
                        data={allSports}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        // numColumns={2}
                        renderItem={({ item, index }) => 
                    <View style={{alignItems:"flex-start",width:WIDTH/100*27,}}>
                        <View style={{height:70,width:70,borderRadius:100,backgroundColor:'#D9D9D9',marginVertical:7,}}></View>
                        <View style={{alignItems:"center",}}>    
                            <Text style={[styles.content,{color:'black'}]}>Trainer</Text>
                            <Text style={[styles.content,{fontSize:FONT_SIZE.medium,marginTop:5}]}>Profession</Text>
                        </View>
                    </View>}/>
                </View>

                <View style={{marginTop:'5%'}}>
                    <Text style={styles.title}  >Rating</Text>
                    <View style={{flexDirection:"row",alignItems:"center",marginTop:'2%'}}>
                        <View style={styler.ratingPanel}>
                            <Text style={styler.rating}>4.5</Text>
                            <BStar/>
                        </View>
                        <Text style={[styles.content,{fontSize:FONT_SIZE.medium,marginTop:5,left:4}]}>5 reviews</Text>
                    </View>
                </View>
                <View style={{height:1,width:'100%',backgroundColor:"#EEEEEE",marginTop:'3%'}}></View>
                
                <View style={{marginTop:'3%'}}>
                    <Text style={[styles.content,{fontSize:FONT_SIZE.medium,}]}>Rate This Season</Text>
                    <View style={{flexDirection:'row'}}>
                        {lapsList(5)}
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
        marginVertical:HEIGHT/100*2,
        flex:1
    },
    ImgBack:{
        width:'50%',
        alignItems:'center',
        justifyContent:"center",
        marginBottom:10,
        marginRight:10
    },
    miniText:{
        color:'white',
        fontSize:12,
        fontWeight:'600'
    },
    ratingPanel:{
        height:25, width:40,
        backgroundColor:COLOR.green,
        borderRadius:5,
        alignItems:"center",
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:5,
    },
    rating:{
        color:'white',
        fontSize:10,
    },
})