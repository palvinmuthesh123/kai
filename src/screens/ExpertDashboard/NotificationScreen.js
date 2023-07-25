import React, { useState } from "react";
import { View, TouchableOpacity, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import FilterHeader from '../../component/header/FilterHeader';
import { NotificationList, NotificationTab, recruitList } from "../../row/data";
import CustomButton from "../../component/Button/CustomButton";
import CheckBox from '@react-native-community/checkbox';



import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Drop from '../../assets/svg/filter/Drop.svg'
import Ticks from '../../assets/svg/filter/Ticks.svg'
import CustomHeader from "../../component/header/CustomHeader";
import MainHeader from "../../component/header/MainHeader";
import NotificationHeader from "../../component/header/NotificationHeader";


export default NotificationScreen = (props) => {

    const [change, setChange] = useState(false)
    const [data, setData] = useState(recruitList)
    const [ind, setInd] = useState(0)

    const changes = (ind) => {
        var arr = []
        for (var i = 0; i < recruitList.length; i++) {
            if (ind == i || recruitList[i].status) {
                arr.push({
                    'name': recruitList[i].name,
                    'title': recruitList[i].title,
                    'subtitle': recruitList[i].subtitle,
                    'status': true
                })
            }
            else {
                arr.push(recruitList[i]);
            }
        }
        setData(arr);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.white} />
            <NotificationHeader title={'Notification'} onPress = {() => props.navigation.goBack()}/>
            <View style={styler.container}>
                <View style={styler.tabbar}>
                <FlatList
                    style={{ height: HEIGHT / 100 * 5, marginBottom:25}}
                    data={[
                        { key: 'All' }, { key: 'Following' } ,{ key: 'Followers' },
                    ]}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => setInd(index)} style={{ width: WIDTH / 3, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={[{ fontSize: 20, fontWeight: FONT_WEIGHT.regular }, ind == index ? { color: COLOR.blue } : { color: COLOR.gray }]}>{item.key}</Text>
                        </TouchableOpacity>}
                    horizontal={true}
                />
                </View>

                <View style={styler.containerBox}>
                    <FlatList
                        style={{}}
                        data={NotificationList}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity 
                                    onPress={() => props.navigation.push('RecruiterProfile')} 
                                    style={[styler.box,index == 0 ? {}: {backgroundColor:"white",elevation:3}]}>
                                <View style={[styler.imgPart, ]}>
                                    <View style={{ height: 40, width: 40, backgroundColor: 'grey', borderRadius: 100 }}></View>
                                </View>
                                <View style={styler.textPart}>
                                    <Text style={styler.name}>{item.name}
                                        <Text style={[styler.name,{color:'#778087',fontWeight:'600'}]}>  {item.message}</Text></Text>
                                    <Text style={[styles.news, { marginVertical: 5,color:'#778087' }]}>{item.time}</Text>
                                </View>
                                <View style={[styler.imgPart1 ,{}]}>
                                    <TouchableOpacity onPress={() => { changes(index) }} style={[styler.tickBox, item.status ? { backgroundColor: '#00A962' } : { backgroundColor: 'grey' }]}>
                                        {item.status ? <Ticks /> : null}
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>} />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT / 100 * 92,
    },
    containerBox: {
        width: WIDTH,
        height: HEIGHT / 100 * 82,
    },
    imgPart: {
        width: WIDTH / 100 * 20,
        height: HEIGHT / 100 * 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgPart1: {
        width: WIDTH / 100 * 10,
        height: HEIGHT / 100 * 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPart: {
        width: WIDTH / 100 * 65,
        height: HEIGHT / 100 * 12,
        paddingLeft: 15,
        justifyContent: 'center',
    },
    tabbar:{
        height:HEIGHT/100*10,
        width:WIDTH,
        justifyContent:'center'
    },
    name: {
        color: COLOR.white,
        fontWeight: FONT_WEIGHT.regular,
        fontSize: FONT_SIZE.small
      },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.compact,
        fontWeight: FONT_WEIGHT.semibold,
    },
    allText:{
        color:'#AAB2B7',
        fontSize:FONT_SIZE.large,
        fontWeight:FONT_WEIGHT.medium,
    },
    position: {
        color: COLOR.black,
        fontSize: FONT_SIZE.small,
        fontWeight: FONT_WEIGHT.medium,
    },
    box: {
        height: HEIGHT / 100 * 12,
        width: WIDTH / 100 * 90,
        backgroundColor: COLOR.blue,
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 10
        // paddingLeft: WIDTH / 100 * 5,
    },
    tickBox: {
        height: 40,
        width: 40,
        backgroundColor: 'grey',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
})