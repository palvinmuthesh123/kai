import React from 'react';
import { View, TouchableOpacity, SafeAreaView, TextInput,FlatList,ImageBackground,StyleSheet, Text, Image } from 'react-native';
import { WIDTH, HEIGHT, FONT_SIZE, COLOR,FONT_WEIGHT } from '../../theme/typography';
import PostHeader from '../../component/header/PostHeader';

import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Filter from '../../assets/svg/dashboard/Filter.svg'
import { athleteOpening } from '../../row/data';
import CustomFooter from '../../component/Bottom/CustomFooter';

export default AthleteOpening = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <PostHeader name={'Post open positions to Athletes'} />
            <View style={styler.container}>
                <View style={styler.searchView}>
                    <View style={styler.searchBar}>
                        <WFSearch />
                        <TextInput
                            style={styler.input}
                            placeholderTextColor={'white'}
                            placeholder="Search for athlete / team"
                        />
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.push('AthleteFilter')}>
                        <ImageBackground
                            style={{ height: 35, width: 44, alignItems: 'center', justifyContent: "center" }}
                            source={require('../../assets/images/fillBox.png')}
                        >
                            <Filter />
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={styler.postLine}>
                    <Text style={styler.BlueText}>420</Text>
                    <TouchableOpacity onPress={() =>props.navigation.push('PostRecruitment')}>
                        <Text style={styler.BlueText}>Post Recruitment</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingVertical:10,flex:1}}>
                <FlatList
                        data={athleteOpening}
                        keyExtractor={item => item.id}
                        // horizontal={true}
                        renderItem={({ item, index }) =>
                        <View style={{flex:1}}>   
                    <View style={styler.Box}>
                        <View style={styler.imgPart}>
                            <Image source={require('../../assets/images/Rectan.png')}/>
                        </View>
                        <View style={styler.TextPart}>
                            <Text style={styler.BoxHeading}>{item.title}</Text>
                            <Text style={styler.BoxContent}>{item.event}</Text>
                            <Text style={styler.BoxContent}>{item.date}</Text>
                        </View>
                        <View style={styler.BtnPart}>
                            <View style={styler.Btn}>
                                <Text style={styler.BoxHeading}>Message</Text>
                            </View>
                        </View>
                    </View></View>}/>

                </View>
            </View>
            <CustomFooter
                    cross={true}
                    expert={true}
                    onClick={() =>props.navigation.goBack()} 
                    prop={props}
                    onHome={() =>props.navigation.push('ExpertDashboardScreen')}
                    onSecond={()=>props.navigation.push('RecruitmentScreen')}
                    onFourth={()=>props.navigation.push('AthleteTabbar')}
                    onProfile={()=>props.navigation.push('AthleteProfile')}/>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        height: HEIGHT / 100 * 85,
        width: '100%',
        alignItems: "center",
    },
    imgPart:{
        width: WIDTH / 100 * 15,
        height: HEIGHT / 100 * 8,
        alignItems:'center',
        justifyContent:'center'
    },
    TextPart:{
        width: WIDTH / 100 * 40,
        height: HEIGHT / 100 * 8,
        marginLeft:WIDTH / 100 * 5,
        justifyContent:'center'
    },
    BtnPart:{
        width: WIDTH / 100 * 25,
        height: HEIGHT / 100 * 8,
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    Btn:{
        width:WIDTH/100*23,
        height: HEIGHT / 100 * 4,
        borderWidth:1,
        borderColor:COLOR.black,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    BoxHeading:{
        FONT_SIZE:FONT_SIZE.medium,
        color:COLOR.black,
    },
    BoxContent:{
        FONT_SIZE:FONT_SIZE.medium,
        color:'#9699A0',
    },
    searchView: {
        flexDirection: "row",
        width: WIDTH / 100 * 90,
        height: HEIGHT / 100 * 6,
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchBar: {
        backgroundColor: COLOR.green,
        flexDirection: "row",
        alignItems: "center",
        width: WIDTH / 100 * 75,
        height: HEIGHT / 100 * 5.5,
        borderRadius: 10,
        paddingHorizontal: 5,
    },
    postLine:{
        width: WIDTH / 100 * 90,
        height: HEIGHT / 100 * 6,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between'
    },
    BlueText:{
        FONT_SIZE:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
        color:COLOR.blue,
        textDecorationLine: 'underline' 
    },
    Box:{
        width: WIDTH / 100 * 90,
        height: HEIGHT / 100 * 11,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        elevation:3,
        backgroundColor:COLOR.white,
        borderRadius:10,
        paddingHorizontal:WIDTH / 100 * 2,
        paddingVertical:5,
        marginBottom:10
    },
})