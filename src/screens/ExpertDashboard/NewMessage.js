import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, ScrollView, Text, FlatList, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { WIDTH, HEIGHT, COLOR, FONT_WEIGHT, FONT_SIZE, } from '../../theme/typography';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import MainHeader from "../../component/header/MainHeader";
import { MessageList, activeList } from "../../row/data";

import WFSearch from '../../assets/svg/dashboard/WFsearch.svg'
import Add from '../../assets/svg/message/tick.svg'
import CustomButton from "../../component/Button/CustomButton";

var arrays = [];

export default NewMessage = (props) => {

const [select,setSelect] = useState(false)
const [name,setName] = useState('')
const [indexs,setIndexs] = useState()
const [arrs,setArrs] = useState([])
const [data,setData] = useState(MessageList)

    function sets(ind) {

        var arr = [];
        for(var i = 0; i<data.length; i++)
        {
            if(ind==i && data[ind].status==true)
            {
                arr.push({
                        'image': data[i].image,
                        'name' :data[i].name,
                        'short' :data[i].short,
                        'message' : data[i].message,
                        'time' :data[i].time,
                        'status': false
                })
            }
            else if(ind==i && data[ind].status==false)
            {
                arr.push({
                    'image': data[i].image,
                    'name' :data[i].name,
                    'short' :data[i].short,
                    'message' : data[i].message,
                    'time' :data[i].time,
                    'status': true
                })
            }
            else if(data[i].status==true)
            {
                arr.push({
                    'image': data[i].image,
                    'name' :data[i].name,
                    'short' :data[i].short,
                    'message' : data[i].message,
                    'time' :data[i].time,
                    'status': true
                })
            }
            else
            {
                arr.push({
                    'image': data[i].image,
                    'name' :data[i].name,
                    'short' :data[i].short,
                    'message' : data[i].message,
                    'time' :data[i].time,
                    'status': false
                })  
            }
        }
        setData(arr);
    }

    // useEffect(()=>{
    //     console.log(name)
    //     // if(name!='' && name!=null && name!=undefined && name!=' ')
    //     // {
    //         arrays.push(name)
    //         arrays = arrays.filter(function (el) {
    //             return el != "";
    //         });
    //     // }
    // },[name])

    // const lapsList = () => {

    //     return arrays.map((data) => {
    //         return (
    //             <View style={styler.nameBar}> 
    //             <Text 
    //                 style={{color:'white',fontSize:FONT_SIZE.medium,fontWeight:FONT_WEIGHT.medium}}>
    //             {data}</Text> 
    //             </View>
    //         )
    //     })
    // }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <MainHeader 
                title={'New Message'} 
                nothing={true} 
                onPress={()=>props.navigation.goBack()}
                />
            <View style={styler.container}>
                <Text style={styler.to}>To:</Text>
                <View style={[styler.searchView, {}]}>
                    {arrays.length>0 ?
                        <FlatList
                            data={arrays}
                            horizontal={true}
                            keyExtractor={index => index}
                            renderItem={({ item, index }) =>
                                <View style={[styler.nameBar,{marginHorizontal:5}]}> 
                                <Text style={{color:'white',fontSize:FONT_SIZE.medium,fontWeight:FONT_WEIGHT.medium}}>
                                {item}</Text> 
                                </View>
                        } />
                    : 
                    <View style={styler.searchBar}>
                        <WFSearch />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={'white'}
                            placeholder="Search for People"
                        />
                    </View>}
                </View>

                <View style={{ flex: 1, width: '100%', paddingVertical: '5%' }}>
                    <Text style={[styler.name, { fontSize: FONT_SIZE.compact }]}>Messages</Text>
                    <ScrollView style={styler.mesList}>
                        <FlatList
                            data={data}
                            // horizontal={true}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%',height:HEIGHT/100*7,marginVertical:3}}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                                        <View style={styler.smallPro}>
                                            {item.image}
                                        </View>
                                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                            <Text style={[styler.name, { fontSize: FONT_SIZE.compact }]}>{item.name}</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', top: 2 }}>
                                                <Text style={{ fontSize: FONT_SIZE.small }}>{item.short}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{alignItems:"center"}}>
                                        <TouchableOpacity 
                                                onPress={() =>{setIndexs(index);setSelect(true);setName(item.name);sets(index);arrays.push(item.name)}}
                                                style={styler.tickbar}>
                                        { item.status ? <LinearGradient
                                            end={{ x: 0, y: 0 }}
                                            start={{ x: 1, y: 1.5 }}
                                            colors={['#14BC66', '#19214F']}
                                            style={styler.gradientBox} >
                                            <Add />
                                        </LinearGradient>: null}
                                        </TouchableOpacity>
                                    </View>
                                </View>} />
                    </ScrollView>
                </View>
            </View>
            <View style={{paddingHorizontal: '5%',}}>
                <CustomButton 
                        title={arrays.length>1 ? 'Create Group Chat' : 'Create Chat'} 
                        space={!select} 
                        onPress={() => arrays.length>1 ? props.navigation.push('GroupMessage',{datas:arrays}) : props.navigation.push('MessageScreen',{datas: name})}/>
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    container: {
        width: '100%',
        height: HEIGHT / 100 * 85,
        paddingHorizontal: '5%',
        paddingVertical: '3%',
        // backgroundColor: 'yellow'
    },
    to: {
        color: COLOR.black,
        fontSize: FONT_SIZE.medium,
        fontWeight: FONT_WEIGHT.medium,
    },
    searchView: {
        flexDirection: "row",
        width: WIDTH / 100 * 90,
        height: HEIGHT / 100 * 5,
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: '5%',
    },
    searchBar: {
        backgroundColor: COLOR.green,
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        height: HEIGHT / 100 * 5,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    name: {
        color: 'black',
        fontWeight: FONT_WEIGHT.semibold,
    },
    mesList: {
        width: '100%',
        paddingVertical: '5%'
        //   backgroundColor:'yellow'  
    },
    smallPro: {
        height: 45,
        width: 45,
        backgroundColor: '#f5f5f5',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradientBox: {
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    tickbar:{
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor:'#464646',
        borderWidth:1
    },
    nameBar:{
        backgroundColor:COLOR.blue,
        borderRadius:10,
        paddingVertical:7,
        paddingHorizontal:15
    },
})