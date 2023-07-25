import React, { useEffect,useState } from "react";
import { SafeAreaView, StatusBar, FlatList, Image, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import styles from "./styles";
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import LinearGradient from "react-native-linear-gradient";
import ToggleSwitch from 'toggle-switch-react-native'
import FavHeader from "../../component/header/FavHeader";
import CustomButton from "../../component/Button/CustomButton";
import { availTime, communicationMode } from "../../row/data";
import CalendarStrip from 'react-native-calendar-strip';

export default NewAppointment = (props) => {

    const[select , setSelect] = useState()
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState(communicationMode)

    const Changes = (ind) => {
        var arr = [];
        data.map((item, index)=>{
            if(index==ind && item.status)
            {
                arr.push({
                    'name' : item.name, 
                    'content' : item.content, 
                    'image' : item.image,
                    'status' : false
                })
            }
            else if(index==ind && !item.status)
            {
                arr.push({
                    'name' : item.name, 
                    'content' : item.content, 
                    'image' : item.image,
                    'status' : true
                })
            }
            else if(item.status)
            {
                arr.push({
                    'name' : item.name, 
                    'content' : item.content, 
                    'image' : item.image,
                    'status' : true
                })
            }
            else
            {
                arr.push({
                    'name' : item.name, 
                    'content' : item.content, 
                    'image' : item.image,
                    'status' : item.status
                })
            }
        })
        setData(arr);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='transparent' />
            <FavHeader nothing={true} title={'New Appointment'} onPress={() => props.navigation.goBack()} />
            <ScrollView style={styler.container}>
                {/* <View style={styler.Calender}> */}
                    {/* <Text style={styler.date}>May, 2023</Text> */}
                    <CalendarStrip
                        scrollable
                        style={{height:100}}
                        selectedDate={Date(new Date())}
                        dayContainerStyle={{backgroundColor:COLOR.white, borderRadius:3, elevation:2}}
                        highlightDateContainerStyle={{backgroundColor:COLOR.green, borderRadius:3, elevation:2}}
                    />
                {/* </View> */}
                <View style={{marginVertical:'5%'}}>
                    <Text style={styler.name}>Available Time</Text>
                    <FlatList
                            style={{}}
                            data={availTime}
                            // horizontal={true}
                            numColumns={3}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => setSelect(index)}>
                        <LinearGradient
                            end={{ x: 1, y: 0 }}
                            start={{ x: 0, y: 0 }}
                            colors={ select  == index? ['#14BC66', '#192D51']:['#FFFFFF','#FFFFFF'] }
                            // colors ={['#FFFFFF','#FFFFFF']}
                            style={[styler.gradientContainer,select == index ? {} :{backgroundColor:'white',elevation:2}]}>
                        <Text style={[styler.btnText,select  == index? {} : {color:'#464646',fontWeight:'400'}]}>{item.time}</Text>
                    </LinearGradient>
                </TouchableOpacity>}/>
                </View>

                <View style={{marginVertical:'5%'}}>
                    <Text style={styler.name}>Appointment Type</Text>

                        <View style={{marginVertical:10}}>
                        <FlatList
                                style={{}}
                                data={data}
                                // horizontal={true}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>
                            <View style={{flexDirection:"row",alignItems:"center",justifyContent:'space-between',marginTop:10}}>
                                <View style={{flexDirection:"row",alignItems:"center",}}>
                                    <View style={styler.mesBox}>
                                        {item.image}
                                    </View>
                                    <View style={{marginLeft:10,}}>
                                        <Text style={[styler.name,{fontSize:14}]}>{item.name}</Text>
                                        <Text style={[styler.patText,{marginTop:5}]}>{item.content}</Text>
                                    </View>
                                </View>
                                <View>
                                    <ToggleSwitch
                                        isOn={item.status}
                                        onColor={COLOR.green}
                                        offColor="#DFE0E0"
                                        labelStyle={{ color: "black", fontWeight: "900" }}
                                        size="compact"
                                        onToggle={isOn => {
                                            Changes(index)
                                        }}
                                    />
                                </View>
                            </View>}/>
                        </View>
                </View>

            </ScrollView>
            <View style={styler.btnContainer}>
                <CustomButton 
                    title={'Next'}
                    onPress={() => props.navigation.push('PatientDetail')} />
            </View>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    container: {
        height: HEIGHT / 100 * 82,
        width: WIDTH,
        paddingHorizontal: WIDTH / 100 * 5,
    },
    btnContainer:{
        justifyContent:"center",
        alignItems:"center",
    },
    Calender:{
        height:HEIGHT/100*12,
        width:'100%',
        borderColor:"red",
        borderWidth:1
    },
    date:{
        color:COLOR.green,
        fontSize:FONT_SIZE.compact
    },
    name:{
        color:COLOR.black,
        fontSize:FONT_SIZE.compact,
        fontWeight:FONT_WEIGHT.medium,
    },
    gradientContainer: {
        height: HEIGHT / 100 * 5,
        width: WIDTH / 100 * 27,
        marginRight:WIDTH/100*3.5,
        marginTop:15,
        marginLeft:2,
        marginBottom:3,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    btnText: {
        color: COLOR.white,
        fontWeight: FONT_WEIGHT.medium,
        fontSize: FONT_SIZE.medium
    },  
    mesBox:{
        height:60,
        width:60,
        borderWidth:3,
        borderColor:COLOR.blue,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center"
    },
    patText:{
        // textAlign:"center",
        color:"#464646",
        fontSize:FONT_SIZE.small,
    },
}) 