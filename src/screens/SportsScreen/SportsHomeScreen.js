import React, { useEffect ,useState} from "react";
import { SafeAreaView, StatusBar, FlatList, Image, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";

import One from '../../assets/svg/athlete/One.svg'

import AppBarHeder from "../../component/header/AppBarHeder";
import { allCampaign, allSports } from "../../row/data";
import JobFooter from "../../component/Bottom/JobFooter";

export default SportsHomeScreen = (props) => {

    const [modalVisible,setModalVisible] =useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.primary} />
            <AppBarHeder name={'Hi siyona'} onClick={() => props.navigation.push('NotificationScreen')}/>
            <View style={styler.container}>
                <View style={styler.posterView}>
                    <ImageBackground
                        source={require('../../assets/images/Soccer.png')}
                        style={{ width: '100%', height: '100%', zIndex: -6, }} imageStyle={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                        <View style={{ height: HEIGHT / 100 * 28, width: '50%', paddingTop: 20, }}>
                            <ImageBackground
                                source={require('../../assets/images/Trend.png')}
                                style={{ height: 24, width: 130, alignItems: 'center', justifyContent: "center" }} resizeMode="stretch">
                                <Text style={{ color: COLOR.white }}>TRENDING # 1</Text>
                            </ImageBackground>
                            <Image
                                source={require('../../assets/images/Watch.png')}
                                style={{ marginLeft: 10 }} />
                            <View style={{paddingLeft:20,paddingTop:15}}>
                                <Text style={styler.whiteText}>New Season Soccer</Text>
                                <View style={{top:-15}}>
                                    <One/>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View>
                        <ImageBackground
                            source={require('../../assets/images/Shaper.png')}
                            style={{ width: WIDTH, height: HEIGHT, zIndex: -1, marginTop: -HEIGHT * 17.1 / 100 }} resizeMode="stretch">
                            <View style={styler.titleView}>
                                <Text style={styler.title}>All Sports</Text>
                            </View>
                            <View style={styler.GridView}>
                            <FlatList
                                data={allSports}
                                keyExtractor={item => item.id}
                                // horizontal={true}
                                numColumns={2}
                                renderItem={({ item, index }) =>   
                                <TouchableOpacity onPress={()=> {props.navigation.push("SportsDetails")}} style={styler.grid}>
                                    <View style={styler.TriangleShapeView}>
                                        <View style={{transform: [{ rotate: '-45deg' }]}}>
                                            {item.image}
                                        </View>
                                    </View>
                                    <Text style={styler.title1}>{item.name}</Text>
                                </TouchableOpacity>}/>
                            </View>
                        </ImageBackground>
                    </View>
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
    container: {
        height: HEIGHT / 100 * 85,
        alignItems: 'center',
    },
    posterView: {
        height: HEIGHT / 100 * 37,
        width: WIDTH,
        marginVertical: HEIGHT / 100 * 2,
        // backgroundColor:"red",
    },
    titleView: {
        height: 100, width: '100%',
        alignItems: "flex-end",
        justifyContent: 'flex-end',
        paddingHorizontal: '5%',
    },
    title:{
        color:COLOR.black,
        fontSize:FONT_SIZE.xl,
        fontWeight:FONT_WEIGHT.medium
    },
    whiteText:{
        color:'white',
        fontSize:26,
        fontStyle:'italic',
        fontWeight:'600',
        textAlign:'center'
    },
    title1:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
        marginTop:15,
    },
    GridView:{
        height:HEIGHT/100*40,
        marginTop:HEIGHT/100*7,
        width:'100%',
        // backgroundColor:'pink',
    },
    grid:{
        height:HEIGHT/100*20,
        width:WIDTH/100*50,
        // width: 100,
        // height: 100,
        alignItems:"center",
        justifyContent:"center"
    },
    TriangleShapeView: {
        width: 80,
        height: 80,
        borderRadius:10,
        backgroundColor:'rgba(0, 169, 98, 0.2)',
        transform: [{ rotate: '45deg' }] ,
        alignItems: 'center', 
        justifyContent: "center" 
      },
})