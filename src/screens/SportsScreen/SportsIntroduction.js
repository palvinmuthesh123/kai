import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, FlatList, Image, View, Text, TouchableOpacity,ScrollView, StyleSheet, ImageBackground } from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import MainHeader from "../../component/header/MainHeader";


import Play from '../../assets/svg/athlete/PlayBtn.svg'
import Heart from '../../assets/svg/athlete/Heart.svg'
import { allSports, introVideos } from "../../row/data";

export default SportsIntroduction = (props) => {
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.primary} />
            <MainHeader  
            share={true} 
            onPress={() => props.navigation.goBack()}
            title={'Introduction'}/>
            <ScrollView style={styler.container}>
                <View style={styles.bannerView}>
                    <ImageBackground
                            source={require('../../assets/images/PlayBack.png')}
                            style={styles.bannerImg} 
                            imageStyle={{borderRadius:20}}>
                        <Play />
                    </ImageBackground>
                </View>
                <View style={{marginTop:'5%'}}>
                    <Text style={styles.title}>Introduction</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:20,marginTop:5,}}>
                        <Text style={styles.content}>20/05/2023</Text>
                        <View style={styles.viewBox}>
                            <Text style={[styles.content,{color:"#000000"}]}>3 modules . 37 mins</Text>
                        </View>
                    </View>
                    <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
                </View>

                <View style={{marginTop:'5%'}}>
                <FlatList
                        data={introVideos}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        // numColumns={2}
                        renderItem={({ item, index }) =>   
                    <TouchableOpacity 
                            onPress={() => props.navigation.push('AboutSports')}
                            style={{flexDirection:'row',alignItems:"flex-start",width:'100%',height:HEIGHT/100*12}}>
                        <TouchableOpacity 
                                // onPress={() => props.navigation.push('AboutSports')}
                                style={[styler.ImgBack,{marginRight:3}]}>
                            <ImageBackground
                                    source={require('../../assets/images/PlayBack.png')}
                                    style={{width:'100%',height:80,justifyContent:'flex-end',alignItems:'flex-end',padding:5}} 
                                    imageStyle={{borderRadius:10}}>
                                <Text style={[styler.rating,{marginRight:15}]}>{item.time}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <View style={{width:'40%',justifyContent:'space-between',height:HEIGHT/100*10,}}>
                            <Text style={[styles.title1,{marginTop:5}]}>{item.name}</Text>
                            <Text style={[styles.content,{fontSize:11}]}>{item.content}</Text>
                        </View>
                        <View style={{width:'10%',marginTop:5}}>
                            <Heart />
                        </View>
                        <View>

                        </View>
                    </TouchableOpacity>}/>
                </View>

                <View style={{height:1,width:'100%',backgroundColor:"#EEEEEE",marginTop:'3%'}}></View>

                <View style={{marginTop:'5%'}}>
                    <Text  style={styles.title}>Modules in line</Text>
                </View>

                <View style={{marginTop:'5%'}}>
                <FlatList
                        data={allSports}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        numColumns={2}
                        renderItem={({ item, index }) =>   
                    <View style={styler.ImgBack}>
                    <ImageBackground
                            source={require('../../assets/images/PlayBack.png')}
                            style={{width:'100%',height:80,justifyContent:'flex-end',padding:5}} 
                            imageStyle={{borderRadius:10}}>
                        <Text style={styler.miniText}>#1</Text>
                        <Text style={styler.miniText}>Introduction</Text>
                        <Text style={styler.rating}>3 modules . 37 mins</Text>
                    </ImageBackground>
                    </View>}/>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        height: HEIGHT / 100 * 92,
        width:WIDTH,
        paddingHorizontal:WIDTH/100*5,
        marginVertical:HEIGHT/100*2
        // alignItems: 'center',
    },
    ImgBack:{
        width:'50%',
        alignItems:'center',
        justifyContent:"center",
        marginBottom:10,
        marginRight:10,
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