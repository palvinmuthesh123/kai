import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, FlatList, ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";

import Play from '../../assets/svg/athlete/PlayBtn.svg'
import Heart from '../../assets/svg/athlete/Heart.svg'
import { allSports, introVideos } from "../../row/data";
import MainHeader from "../../component/header/MainHeader";

export default AboutSports = (props) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.primary} />
            <MainHeader  
                    share={true} 
                    onPress={() => props.navigation.goBack()}
                    title={'About  Soccer'}/>
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
                    <Text style={styles.title}>About</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:20,marginTop:5,}}>
                        <Text style={styles.content}>20/05/2023</Text>
                        <View style={styles.viewBox}>
                            <Text style={[styles.content,{color:"#000000"}]}>110 Views</Text>
                        </View>
                    </View>
                    <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
                </View>

                <View style={{marginVertical:'5%'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Heart/>
                        <Text style={{color:'#707070',fontSize:12,marginLeft:5,}}>3 likes</Text>
                    </View >
                </View>

                <View style={{height:1,width:'100%',backgroundColor:"#EEEEEE",marginTop:'3%'}}></View>

                <View style={{marginTop:'5%'}}>
                    <Text  style={styles.title}>Other Modules</Text>
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
        paddingVertical:HEIGHT/100*2
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